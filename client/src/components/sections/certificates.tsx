import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CertificatesSection() {
  const [certificates, setCertificates] = useState([]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedDesc, setZoomedDesc] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/certificates/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCertificates(data.certificates);
      });
  }, []);

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my professional certificates.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-muted rounded-lg shadow p-6 flex flex-col items-center"
            >
              {cert.image && cert.image.endsWith(".pdf") ? (
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mb-4 block"
                >
                  View PDF
                </a>
              ) : cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-48 object-contain mb-4 rounded border cursor-zoom-in"
                  onClick={() => {
                    setZoomedImage(cert.image);
                    setZoomedDesc(cert.description || "");
                  }}
                />
              ) : null}
              <h3 className="text-lg font-semibold text-foreground text-center">
                {cert.name}
              </h3>
              {cert.description && (
                <p className="text-muted-foreground text-center mt-2">
                  {cert.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <div className="max-w-3xl w-full flex flex-col items-center">
              <img
                src={zoomedImage}
                alt="Zoomed certificate"
                className="w-full max-h-[80vh] object-contain rounded shadow-lg"
              />
              {zoomedDesc && (
                <p className="text-white text-center mt-4 bg-black bg-opacity-60 px-4 py-2 rounded">
                  {zoomedDesc}
                </p>
              )}
              <button
                className="mt-4 px-6 py-2 bg-white text-black rounded shadow"
                onClick={() => setZoomedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
