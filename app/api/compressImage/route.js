"use server";
import { uploadToS3 } from "../../utils/AWSS3/action";
import { compressImage } from "../../utils/Actions";
export async function POST(req) {
  try {
    const formData = await req.formData();

    const files = formData.getAll("files");

    const fileName = JSON.parse(formData.get("fileNames"));
    console.log("--------------------", fileName);
    for (let i = 0; i < files.length; i++) {
      const fileBuffer = await files[i].arrayBuffer();
      await uploadToS3(fileBuffer, fileName[i]);
    }
    const downloadUrl = await compressImage(fileName);

    return Response.json({ downloadUrl });
  } catch (error) {
    console.log(error);
    return Response.error({ error }, { status: 500 });
  }
}
