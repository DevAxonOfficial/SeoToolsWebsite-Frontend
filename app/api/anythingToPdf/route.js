"use server";
import { uploadToS3 } from "../../utils/AWSS3/action";
import { anythingToPDF } from "../../utils/Actions";
export async function POST(req) {
  try {
    const formData = await req.formData();

    const files = formData.getAll("files");

    const [fileName] = JSON.parse(formData.get("fileNames"));

    for (let i = 0; i < files.length; i++) {
      const fileBuffer = await files[i].arrayBuffer();
      await uploadToS3(fileBuffer, fileName);
    }
    const downloadUrl = await anythingToPDF(fileName);

    return Response.json({ downloadUrl });
  } catch (error) {
    console.error("Error:", error);
  }
}
