"use server";
import { uploadToS3 } from "/app/utils/AWSS3/action";
import { compressPDF } from "./../../utils/Actions";

export async function POST(req) {
  try {
    const formData = await req.formData();
    console.log(formData);
    const files = formData.getAll("files");
    console.log(files);
    const fileNames = JSON.parse(formData.get("fileNames"));

    for (let i = 0; i < files.length; i++) {
      const fileBuffer = await files[i].arrayBuffer();
      await uploadToS3(fileBuffer, files[i].name);
    }

    // Assuming you have a function in your API to merge PDF files
    const downloadUrl = await compressPDF(fileNames);

    // Return the download URL in the API response
    return Response.json({ downloadUrl });
  } catch (error) {
    console.error("Error:", error);
    // Handle error (e.g., return an error response)
    return {
      body: JSON.stringify({ error: "Internal Server Error" }),
      status: 500, // Status code indicating server error
    };
  }
}
