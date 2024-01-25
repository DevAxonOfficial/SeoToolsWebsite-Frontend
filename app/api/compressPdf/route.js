"use server";
import { uploadToS3 } from "/app/utils/AWSS3/action";
import { compressPDF } from "./../../utils/Actions";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");
    const fileNames = JSON.parse(formData.get("fileNames"));
    for (let i = 0; i < files.length; i++) {
      const fileBuffer = await files[i].arrayBuffer();
      await uploadToS3(fileBuffer, files[i].name);
    }
    const downloadUrl = await compressPDF(fileNames);

    return Response.json({ downloadUrl });
  } catch (error) {
    return Response.error({ error });
  }
}
