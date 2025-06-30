import path from "path";
import fs from "fs";
import multer from "multer";
import express, { type Request, Response } from "express";
import type { Request as MulterRequest } from "express";
import type { File as MulterFile } from "multer";

const CERT_UPLOAD_PASSWORD = process.env.CERT_UPLOAD_PASSWORD || "Hana@4268";
const CERTIFICATES_JSON = path.join(process.cwd(), "client/src/lib/certificates.ts");
const CERTIFICATES_DIR = path.join(process.cwd(), "client/public/certificates");

const storage = multer.diskStorage({
  destination: (req: express.Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, CERTIFICATES_DIR);
  },
  filename: (req: express.Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});
const upload = multer({ storage });

export function registerCertificateUploadRoute(app: express.Express) {
  app.post(
    "/api/certificates/upload",
    upload.single("image"),
    (req: express.Request & { file?: Express.Multer.File }, res: Response) => {
      const { password, name, description } = req.body;
      if (password !== CERT_UPLOAD_PASSWORD) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
      }
      if (!req.file || !name) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
      // Read current certificates
      let certs = [];
      try {
        const certsModule = fs.readFileSync(CERTIFICATES_JSON, "utf-8");
        const match = certsModule.match(/export const certificates = (\[.*\]);/s);
        certs = match ? JSON.parse(match[1]) : [];
      } catch {
        certs = [];
      }
      // Add new certificate
      certs.push({
        name,
        description,
        image: `/certificates/${req.file.filename}`,
      });
      // Write back to file
      const newContent = `// Auto-generated certificate list\nexport const certificates = ${JSON.stringify(certs, null, 2)};\n`;
      fs.writeFileSync(CERTIFICATES_JSON, newContent, "utf-8");
      res.json({ success: true, message: "Certificate uploaded" });
    }
  );
}
