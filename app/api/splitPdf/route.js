"use server";
import { uploadToS3 } from "/app/utils/AWSS3/action";

export async function POST(req) {
  console.log(req);
  try {
    const formData = await req.formData();
    const myfile = formData.get("file");
    const fileBuffer = await myfile.arrayBuffer();
    console.log("==============", myfile, myfile.name);

    // Assuming you have a file and fileName in the request body

    // Call your uploadToS3 function
    const downloadUrl = await uploadToS3(fileBuffer, myfile.name, "split-pdf");
    console.log("file", downloadUrl);

    // Return the download URL in the API response
    return Response.json({ downloadUrl });
  } catch (error) {
    console.error("Error:", error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
}
