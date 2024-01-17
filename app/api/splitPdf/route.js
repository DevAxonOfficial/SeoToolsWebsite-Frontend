"use server";
import { uploadToS3 } from "/app/utils/AWSS3/action";
import { splitPDF } from "./../../utils/Actions";

export async function POST(req) {
  console.log(req);
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const fileBuffer = await file.arrayBuffer();
    const fileName = file.name;
    console.log("==============", file, fileName);

    // Assuming you have a file and fileName in the request body

    // Call your uploadToS3 function
    await uploadToS3(fileBuffer, fileName);
    const downloadUrl = await splitPDF(fileName);
    console.log("file", downloadUrl);

    // Return the download URL in the API response
    return Response.json({ downloadUrl });
  } catch (error) {
    console.error("Error:", error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
}
