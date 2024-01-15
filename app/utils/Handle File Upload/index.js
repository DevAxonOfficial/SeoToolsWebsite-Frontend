"use client";
import { uploadToS3 } from "../AWS S3/action";
import { useState } from "react";
import { readFileAsBuffer } from "../Buffered File";
export const HandleFileChange = async (event) => {
  const [download, setDownload] = useState();

  const file = event.target.files[0];
  const numbers = Math.floor(Math.random() * 9000) + 1000;
  const number = numbers.toString();
  // setSelectedFiles(file.name);

  if (file) {
    try {
      // const numbers = Math.floor(Math.random() * 9000) + 1000;
      // const number = numbers.toString();
      const buffer = await readFileAsBuffer(file);
      const fileName = file.name.split(".").slice(0, -1).join(".") + number;
      console.log(fileName);
      // Now 'buffer' contains the file data as a buffer
      const downloadUrl = await uploadToS3(buffer, fileName);
      setDownload(downloadUrl);

      // const url = await uploadToS3(buffer);
      // setDownloadUrl(url); // Upload the buffer to S3 (modify your upload function accordingly)
    } catch (error) {
      console.error("Error reading file:", error);
      // Handle error (e.g., show error message to the user)
    }
  }
};
export const handleDownload = () => {
  // Trigger the download using the download URL
  if (download) {
    window.open(download, "_blank"); // Open the download URL in a new tab
    console.log(download);
  }
};
