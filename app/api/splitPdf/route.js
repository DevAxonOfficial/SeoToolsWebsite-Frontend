"use server";
import { uploadToS3 } from "/app/utils/AWSS3/action";
import { splitPDF } from "./../../utils/Actions";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const files = formData.getAll("files");

    const [fileName] = JSON.parse(formData.get("fileNames"));

    for (let i = 0; i < files.length; i++) {
      const fileBuffer = await files[i].arrayBuffer();
      await uploadToS3(fileBuffer, fileName);
    }
    const downloadUrl = await splitPDF(fileName);

    return Response.json({ downloadUrl });
  } catch (error) {
    console.error("Error:", error);
  }
}
