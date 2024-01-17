import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";

const client = new S3Client({
  apiVersion: "2006-03-01",
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAY3AKF77QJB5HEQPI",
    secretAccessKey: "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",
  },
});

const BUCKET = "raw-files-1";

export const uploadToS3 = async (file, fileName) => {
  try {
    const uniqueKey = fileName;
    console.log(uniqueKey);
    const putCommand = new PutObjectCommand({
      Bucket: BUCKET,
      Key: uniqueKey,
      Body: file,
    });

    const response = await client.send(putCommand);
    return response;
  } catch (error) {
    console.log("error", error);
  }
  //     // Download the processed file
  //     const processedFileKey = `${fileName}_processed`; // Modify the key if needed
  //     const getCommand = new GetObjectCommand({
  //       Bucket: BUCKET,
  //       Key: fileName,
  //     });

  //     const downloadUrl = await client.getSignedUrl(getCommand, {
  //       expiresIn: 3600,
  //     });
  //     window.open(downloadUrl, "_blank"); // Open the download URL in a new tab
  //   } catch (error) {
  //     console.error("Error:", error);
  // Handle error (e.g., show error message to the user)
  //}
};
// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     uploadToS3(body);
//   } else {
//     console.error("No file selected");
//     // Handle case when no file is selected
//   }
// };
// export default async function FileUploader() {
//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {/* Other components or UI */}
//     </div>
//   );
// }
