import { uploadToS3 } from "@/app/utils/AWSS3/action";

export default async function POST(req, res) {
  try {
    // Assuming you have a file and fileName in the request body
    const { file, fileName } = req.body;
    console.log("File", fileName);

    // Call your uploadToS3 function
    const downloadUrl = await uploadToS3(file, fileName);
    console.log(downloadUrl);

    // Return the download URL in the API response
    res.status(200).json({ downloadUrl });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
