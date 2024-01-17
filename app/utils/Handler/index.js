"use client";
import React from "react";
import { useState, useEffect } from "react";

export const readFileAsBuffer = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const buffer = event.target.result;
      resolve(buffer);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
};
const numbers = Math.floor(Math.random() * 9000) + 1000;
const number = numbers.toString();

export const handleDragOver = (event) => {
  event.preventDefault();
  // console.log(event);
};

export const handleDrop = async (event, setSelectedFiles, number) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  const fileList = Array.from(files);

  for (const file of fileList) {
    try {
      const buffer = await readFileAsBuffer(file);
      const fileName = file.name.split(".").slice(0, -1).join(".") + number;
      const response = await axios.post("/api", {
        file: buffer.toString("base64"),
        fileName: fileName,
      });
      const downloadUrl = response.data.downloadUrl;
      // Handle download or any other logic here
    } catch (error) {
      console.error("Error reading file:", error);
      // Handle error (e.g., show error message to the user)
    }
  }

  setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
};

// export const HandleDrop = async (event, setSelectedFiles, setDownload, number ) => {
//   event.preventDefault();
//   const files = event.dataTransfer.files;
//   const fileList = Array.from(files); // Corrected line

//   // Rest of the code remains the same
//   for (const file of fileList) {
//     const buffer = await readFileAsBuffer(file);
//     console.log(`File Name: ${file.name}, Buffer Size: ${buffer.byteLength}`);
//     if (file) {
//       try {
//         const buffer = await readFileAsBuffer(file);
//         const fileName = file.name.split(".").slice(0, -1).join(".") + number;
//         console.log(fileName);
//         const response = await axios.post("/api", {
//           file: buffer.toString("base64"),
//           fileName: fileName,
//         });
//         console.log(response);
//         // Now 'buffer' contains the file data as a buffer
//         const downloadUrl = response.data.downloadUrl;
//         setDownload(downloadUrl);
//         console.log(downloadUrl);

//         // const url = await uploadToS3(buffer);
//         // setDownloadUrl(url); // Upload the buffer to S3 (modify your upload function accordingly)
//       } catch (error) {
//         console.error("Error reading file:", error);
//         // Handle error (e.g., show error message to the user)
//       }
//     }
//   }

//   setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);

// };
export const HandleFileChange = async (event) => {
  const file = event.target.files[0];
  // setSelectedFiles(file.name);

  if (file) {
    try {
      // const numbers = Math.floor(Math.random() * 9000) + 1000;
      // const number = numbers.toString();
      const buffer = await readFileAsBuffer(file);
      const fileName = file.name.split(".").slice(0, -1).join(".") + number;
      console.log(fileName);
      console.log(buffer);
      // Make a POST request to your Next.js API route
      const response = await axios.post("/api", {
        file: buffer.toString("base64"),
        fileName: fileName,
      });
      console.log(response);
      // Now 'buffer' contains the file data as a buffer
      const downloadUrl = response.data.downloadUrl;
      setDownload(downloadUrl);
      console.log(downloadUrl);

      // const url = await uploadToS3(buffer);
      // setDownloadUrl(url); // Upload the buffer to S3 (modify your upload function accordingly)
    } catch (error) {
      console.error("Error reading file:", error);
      // Handle error (e.g., show error message to the user)
    }
  }

  return { download };
};

export const HandleDownload = () => {
  // Trigger the download using the download URL
  if (download) {
    window.open(download, "_blank"); // Open the download URL in a new tab
  }

  return { download };
};
