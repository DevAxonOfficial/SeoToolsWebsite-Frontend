"use server";
import { uploadToS3 } from "/app/utils/AWSS3/action";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Check if there are files in the form data
    if (!formData.has("files[]")) {
      throw new Error("No 'files[]' field found in form data.");
    }

    // Get the files array from the form data
    const files = formData.getAll("files[]");

    // Iterate over the files and process each one
    for (let i = 0; i < files.length; i++) {
      const myfile = files[i];

      if (!myfile) {
        throw new Error(`File at index ${i} is null.`);
      }

      if (typeof myfile.arrayBuffer !== "function") {
        throw new Error(
          `arrayBuffer method is not available on the file object at index ${i}.`
        );
      }

      const fileBuffer = await myfile.arrayBuffer();

      // Assuming you have a file and fileName in the request body
      const downloadUrl = await uploadToS3(
        fileBuffer,
        myfile.name,
        "merge-pdf"
      );

      // Log or use downloadUrl as needed
      console.log(`File at index ${i} processed. Download URL: ${downloadUrl}`);
    }

    // Return a success response
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    // Return an error response
    return new Response("Internal Server Error", { status: 500 });
  }
}
