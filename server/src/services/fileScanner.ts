export async function scanFile(file: Express.Multer.File) {
  // Placeholder: implement actual antivirus scan, signatures, etc.
  const isMalicious = file.originalname.endsWith(".exe"); // dummy logic

  return {
    filename: file.originalname,
    size: file.size,
    mime: file.mimetype,
    detected: isMalicious,
    message: isMalicious ? "Potential malware detected" : "Clean",
  };
}
