import { NextApiRequest, NextApiResponse } from "express";
import path from "path";
import fs from "fs";

const CERTIFICATES_JSON = path.join(process.cwd(), "client/src/lib/certificates.ts");
const CERTIFICATES_DIR = path.join(process.cwd(), "client/public/certificates");
const CERT_UPLOAD_PASSWORD = process.env.CERT_UPLOAD_PASSWORD || "Hana@4268";

export function registerCertificateAdminRoutes(app: any) {
  // List all certificates (raw JSON)
  app.get("/api/certificates/list", (_req: NextApiRequest, res: NextApiResponse) => {
    try {
      const certsModule = fs.readFileSync(CERTIFICATES_JSON, "utf-8");
      const match = certsModule.match(/export const certificates = (\[.*\]);/s);
      const certs = match ? JSON.parse(match[1]) : [];
      res.json({ success: true, certificates: certs });
    } catch (e) {
      res.status(500).json({ success: false, message: "Failed to read certificates." });
    }
  });

  // Delete a certificate
  app.post("/api/certificates/delete", (req: NextApiRequest, res: NextApiResponse) => {
    const { password, index } = req.body;
    console.log("DELETE request received:", { password, index });
    if (password !== CERT_UPLOAD_PASSWORD) {
      console.log("Unauthorized password");
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    try {
      const certsModule = fs.readFileSync(CERTIFICATES_JSON, "utf-8");
      const match = certsModule.match(/export const certificates = (\[.*\]);/s);
      let certs = match ? JSON.parse(match[1]) : [];
      if (typeof index !== "number" || index < 0 || index >= certs.length) {
        console.log("Invalid index", index, certs.length);
        return res.status(400).json({ success: false, message: "Invalid index." });
      }
      // Remove file
      const cert = certs[index];
      if (cert.image && cert.image.startsWith("/certificates/")) {
        const filePath = path.join(CERTIFICATES_DIR, path.basename(cert.image));
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
      certs.splice(index, 1);
      const newContent = `// Auto-generated certificate list\nexport const certificates = ${JSON.stringify(certs, null, 2)};\n`;
      fs.writeFileSync(CERTIFICATES_JSON, newContent, "utf-8");
      console.log("Certificate deleted. New list:", certs);
      res.json({ success: true });
    } catch (e) {
      console.error("Failed to delete certificate:", e);
      res.status(500).json({ success: false, message: "Failed to delete certificate." });
    }
  });

  // Edit a certificate
  app.post("/api/certificates/edit", (req: NextApiRequest, res: NextApiResponse) => {
    const { password, index, name, description } = req.body;
    console.log("EDIT request received:", { password, index, name, description });
    if (password !== CERT_UPLOAD_PASSWORD) {
      console.log("Unauthorized password");
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    try {
      const certsModule = fs.readFileSync(CERTIFICATES_JSON, "utf-8");
      const match = certsModule.match(/export const certificates = (\[.*\]);/s);
      let certs = match ? JSON.parse(match[1]) : [];
      if (typeof index !== "number" || index < 0 || index >= certs.length) {
        console.log("Invalid index", index, certs.length);
        return res.status(400).json({ success: false, message: "Invalid index." });
      }
      certs[index].name = name;
      certs[index].description = description;
      const newContent = `// Auto-generated certificate list\nexport const certificates = ${JSON.stringify(certs, null, 2)};\n`;
      fs.writeFileSync(CERTIFICATES_JSON, newContent, "utf-8");
      console.log("Certificate edited. New list:", certs);
      res.json({ success: true });
    } catch (e) {
      console.error("Failed to edit certificate:", e);
      res.status(500).json({ success: false, message: "Failed to edit certificate." });
    }
  });
}
