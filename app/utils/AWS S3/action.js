import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
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
const API_ENDPOINT =
  "https://gbmxwutwksccq5lgd6vqfn3m7i0vkpia.lambda-url.us-east-1.on.aws";

export const uploadToS3 = async (file, fileName) => {
  console.log("-================ file", fileName);
  try {
    const uniqueKey = fileName;
    console.log(uniqueKey);
    const putCommand = new PutObjectCommand({
      Bucket: BUCKET,
      Key: uniqueKey,
      Body: file,
    });

    const response = await client.send(putCommand);
    console.log("-================", response);

    // Simulate an API action (you can replace this with your actual API call)
    // For example, waiting for some seconds to simulate processing
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const apiEndpoint = `${API_ENDPOINT}/?filename=${uniqueKey}`;
    const apiResponse = await axios.get(apiEndpoint);
    const downloadUrl = apiResponse.data.url;

    // Extract the download URL from the API response
    // const downloadUrl = apiResponse.data;
    return downloadUrl;
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
