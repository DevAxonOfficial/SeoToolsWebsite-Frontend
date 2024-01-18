"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [download, setDownload] = useState();
  const readFileAsBuffer = (file) => {
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
  // const numbers = Math.floor(Math.random() * 9000) + 1000;
  // const number = numbers.toString();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileList = Array.from(files); // Corrected line
    for (const file of fileList) {
      await handleFileChange({ target: { files: [file] } });
    }
    // Rest of the code remains the same
    // for (const file of fileList) {
    //   const buffer = await readFileAsBuffer(file);
    //   console.log(`File Name: ${file.name}, Buffer Size: ${buffer.byteLength}`);
    //   if (file) {
    //     try {
    //       const buffer = await readFileAsBuffer(file);
    //       const fileName = file.name;
    //       console.log(fileName);
    //       // Now 'buffer' contains the file data as a buffer
    //       const downloadUrl = await uploadToS3(buffer, fileName);
    //       setDownload(downloadUrl);

    //       // const url = await uploadToS3(buffer);
    //       // setDownloadUrl(url); // Upload the buffer to S3 (modify your upload function accordingly)
    //     } catch (error) {
    //       console.error("Error reading file:", error);
    //       // Handle error (e.g., show error message to the user)
    //     }
    //   }
    // }

    setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
  };
  const handleFileChange = async (event) => {
    const files = event.target.files;
    setLoader(true);
    if (files && files.length > 0) {
      try {
        const formData = new FormData();
        const fileNames = [];
        setSelectedFiles(fileNames);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          if (file.type === "application/pdf") {
            formData.append("files", file); // Use the same key for all files
            fileNames.push(file.name);
          } else {
            console.warn(`File ${file.name} is not a PDF and will be skipped.`);
          }
        }

        formData.append("fileNames", JSON.stringify(fileNames));

        const response = await axios.post("/api/mergePdf", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const downloadUrl = response.data.downloadUrl;
        setLoader(false);
        setDownload(downloadUrl);
      } catch (error) {
        console.error("Error processing files:", error);
        // Handle error (e.g., show an error message to the user)
      }
    } else {
      console.warn("No files selected.");
      // You might want to notify the user that no files were selected
    }
  };
  // const handleFileChange = async (event) => {
  //   const file = event.target.files;
  //   const fileList = Array.from(file);
  //   console.log(fileList);
  //   // setSelectedFiles(file.name);

  //   if (file) {
  //     console.log("file: ", file);
  //     try {
  //       // const numbers = Math.floor(Math.random() * 9000) + 1000;
  //       // const number = numbers.toString();
  //       // const buffer = await readFileAsBuffer(file);
  //       // const fileName = file.name;
  //       // console.log(fileName);
  //       // console.log(buffer);
  //       // Make a POST request to your Next.js API route
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       formData.append("name", file.name);
  //       const response = await axios.post("/api/mergePdf", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       });
  //       // Now 'buffer' contains the file data as a buffer
  //       const downloadUrl = response.data.downloadUrl;
  //       setDownload(downloadUrl);
  //       console.log(downloadUrl);

  //       // const url = await uploadToS3(buffer);
  //       // setDownloadUrl(url); // Upload the buffer to S3 (modify your upload function accordingly)
  //     } catch (error) {
  //       console.error("Error reading file:", error);
  //       // Handle error (e.g., show error message to the user)
  //     }
  //   }
  // };

  const handleDownload = () => {
    // Trigger the download using the download URL
    if (download) {
      window.open(download, "_blank"); // Open the download URL in a new tab
    }
  };
  return (
    <>
      <div className=" relative flex justify-around  mt-10 ">
        <div className=" xm:hidden sm:hidden lg:flex bg-[#d9d9d9] xl:w-[120px] h-[550px] lg:w-[80px] justify-center items-center text-xl font-bold  ">
          AD
        </div>
        <div
          className="flex justify-center items-center xm:w-[100%] xm:h-[350px] xm:mx-2 sm:w-[100%] sm:mx-3 sm:h-[400px] md:w-[800px] md:mx-5  "
          style={{
            backgroundImage: "url('/img/Rectangle23.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="">
            <div className=" flex justify-center items-center">
              <Image
                src="/img/Merge.png"
                alt="remove logo"
                width={90}
                height={90}
              />
            </div>
            <p className=" text-center font-bold text-3xl">Merge Pdf</p>
            <div className="w-96 mb-3 text-center">
              Simplify your document management with our quick and intuitive
              <span className="font-bold"> PDF Merge Tool.</span>
            </div>
            <div className=" flex justify-center ">
              <label
                htmlFor="file-upload"
                className="sm:px-14 sm:py-7 xm:p-7  text-center hover:cursor-pointer  bg-gray-400 rounded-full text-white font-semibold"
              >
                Select Pdf File
              </label>
              <input
                type="file"
                name="file"
                id="file-upload"
                multiple={true}
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the file input
              />
              <div>
                <Image
                  className="mx-auto"
                  src="/img/Group12.png"
                  alt="Google Drive Icone"
                  width={45}
                  height={45}
                />
                <Image
                  className="mx-auto "
                  src="/img/Group13.png"
                  alt="Google Drive Icone"
                  width={38}
                  height={38}
                />
              </div>
            </div>
            <span className="flex justify-center items-center  ">
              or simply drag & drop files
            </span>
          </div>
        </div>
        <div className=" xm:hidden sm:hidden lg:flex bg-[#d9d9d9] xl:w-[120px] h-[550px] lg:w-[80px]  justify-center items-center text-xl font-bold  ">
          AD
        </div>
        <div className="absolute sm:mt-[400px] xm:mt-[350px]  ">
          <div className="flex justify-center items-center rounded-2xl py-4 xm:px-8 sm:px-28 lg:px-52 bg-[#FDE1E1]">
            <div className="flex justify-around py-2 border border-gray-300 rounded-lg xm:w-80   w-96  bg-white  ">
              <div className="flex justify-center items-center ml-2">
                <Image
                  src="/img/Group13.png"
                  alt="Google Drive Icone"
                  width={38}
                  height={38}
                />
                {selectedFiles.length == 0 ? (
                  <p className="ml-4 ">Pdf File Name</p>
                ) : (
                  <p className="ml-4 ">{selectedFiles}</p>
                )}
              </div>
              {loader && (
                <div>
                  <div class="flex items-center justify-center ">
                    <div class="border-t-8 border-solid border-teal-400 rounded-full w-8 h-8 animate-spin"></div>
                  </div>
                </div>
              )}
              {download && (
                <div className="flex justify-center mr-2 items-center hover:cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src="/img/down2.png"
                    onClick={handleDownload}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center py-16 w-[70%] xm:mt-24 sm:mt-24 lg:mt-0 mx-auto font-semibold bg-[#d9d9d9]">
        Ad
      </div>
    </>
  );
};

export default Page;
