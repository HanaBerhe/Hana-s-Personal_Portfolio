import { useState, useEffect } from "react";
import { certificates as initialCertificates } from "@/lib/certificates";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AdminCertificates() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [certificates, setCertificates] = useState(initialCertificates);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const fetchCertificates = () => {
    fetch("/api/certificates/list")
      .then(res => res.json())
      .then(data => {
        if (data.success) setCertificates(data.certificates);
      });
  };

  // Fetch certificates from backend
  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image || !password) {
      setMessage("Name, image, and password are required.");
      return;
    }
    setLoading(true);
    setMessage(null);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("password", password);
    try {
      const res = await fetch("/api/certificates/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Certificate uploaded successfully!");
        setName("");
        setDescription("");
        setImage(null);
        setPassword("");
      } else {
        setMessage(data.message || "Upload failed.");
      }
    } catch (err) {
      setMessage("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  const getPassword = () => {
    const pwd = window.prompt("Enter admin password:");
    return pwd || "";
  };

  const handleDelete = async (index: number) => {
    const pwd = getPassword();
    if (!pwd) return;
    if (!window.confirm("Are you sure you want to delete this certificate?")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/certificates/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: Number(index), password: pwd }),
      });
      const data = await res.json();
      if (data.success) {
        fetchCertificates();
        setMessage("Certificate deleted.");
      } else {
        alert(data.message || "Delete failed.");
        setMessage(data.message || "Delete failed.");
      }
    } catch {
      setMessage("An error occurred while deleting.");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (index: number) => {
    setEditIndex(index);
    setEditName(certificates[index].name);
    setEditDescription(certificates[index].description);
  };

  const handleEdit = async (index: number) => {
    const pwd = getPassword();
    if (!pwd) return;
    setLoading(true);
    try {
      const res = await fetch("/api/certificates/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: Number(index), name: editName, description: editDescription, password: pwd }),
      });
      const data = await res.json();
      if (data.success) {
        fetchCertificates();
        setMessage("Certificate updated.");
        setEditIndex(null);
      } else {
        alert(data.message || "Edit failed.");
        setMessage(data.message || "Edit failed.");
      }
    } catch {
      setMessage("An error occurred while editing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 py-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <form
        className="bg-white dark:bg-muted rounded-lg shadow p-8 w-full max-w-md space-y-6 mb-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-foreground">Upload Certificate (Admin)</h1>
        {message && <div className="text-center text-red-500 mb-2">{message}</div>}
        <div>
          <label className="block mb-1 font-medium text-foreground">Certificate Name *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 text-foreground bg-background"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-foreground">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2 text-foreground bg-background"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-foreground">Certificate File (PDF or Image) *</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="w-full text-foreground bg-background"
            onChange={e => setImage(e.target.files?.[0] || null)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-foreground">Admin Password *</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 text-foreground bg-background"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Certificate"}
        </button>
      </form>

      <div className="w-full max-w-2xl bg-white dark:bg-muted rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">Uploaded Certificates</h2>
        <ul className="space-y-4">
          {certificates.map((cert, idx) => (
            <li key={idx} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                {editIndex === idx ? (
                  <>
                    <input
                      className="border rounded px-2 py-1 mb-2 w-full text-foreground bg-background"
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                    />
                    <textarea
                      className="border rounded px-2 py-1 w-full text-foreground bg-background"
                      value={editDescription}
                      onChange={e => setEditDescription(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <div className="font-semibold text-foreground">{cert.name}</div>
                    <div className="text-muted-foreground mb-2">{cert.description}</div>
                  </>
                )}
                {cert.image && cert.image.endsWith(".pdf") ? (
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View PDF</a>
                ) : cert.image ? (
                  <img src={cert.image} alt={cert.name} className="w-32 h-20 object-contain mt-2 border rounded" />
                ) : null}
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                {editIndex === idx ? (
                  <>
                    <button
                      className="bg-[#cdb4f6] text-white px-3 py-1 rounded mb-1"
                      onClick={() => handleEdit(idx)}
                      disabled={loading}
                    >Save</button>
                    <button
                      className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
                      onClick={() => setEditIndex(null)}
                    >Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-[#cdb4f6] text-white px-3 py-1 rounded mb-1"
                      onClick={() => startEdit(idx)}
                    >Edit</button>
                    <button
                      className="bg-[#cdb4f6] text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(idx)}
                      disabled={loading}
                    >Delete</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
