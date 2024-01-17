"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
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
    // console.log(event);
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

    if (files.length > 0) {
      try {
        const formData = new FormData();

        // Append each file with the key "files[]"
        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          // Check if the file is a PDF before appending
          if (file.type === "application/pdf") {
            formData.append("files[]", file);
          } else {
            console.warn(`File ${file.name} is not a PDF and will be skipped.`);
          }
        }

        const response = await axios.post("/api/mergePdf", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        // Log or handle the response as needed
        console.log(response.data);
      } catch (error) {
        console.error("Error processing files:", error);
        // Handle error (e.g., show an error message to the user)
      }
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
      <div class="grid grid-cols-3">
        <div class=" p-10">
          <div className="xs:hidden sm:hidden lg:flex  w-[100px] h-[550px] bg-gray-300  items-center justify-center font-bold">
            Ad
          </div>
        </div>
        <div class="p-4 flex justify-center items-center">
          <div
            className="grid grid-cols-1  xl:w-[940px] md:w-[800px] lg:w-[850px] xs:w-[400px] sm:w-[700px] xl:h-[600px] lg:h-[370px] xs:h-[400px] sm:h-[700px]  justify-center items-center"
            style={{
              backgroundImage: "url('/img/Rectangle23.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex justify-center items-center">
              <div className="flex xl:p-16 xs:p-10  flex-col justify-center items-center">
                <Image
                  src="/img/Merge.png"
                  alt="remove logo"
                  width={90}
                  height={90}
                  className=" lg:w-[90px] xs:w-[60px]   flex justify-center items-center "
                />
                <h1 className="text-center md:mt-3 text-2xl md:text-3xl font-bold">
                  Merge PDF
                </h1>
                <p className=" text-center md:mt-2 xs:leading-4 leading-5 md:text-base xs:text-sm">
                  Simplify your document management with our <br /> quick and
                  intuitive{" "}
                  <strong className="font-bold">Pdf Merge Tool.</strong>
                </p>
                <label
                  htmlFor="file-upload"
                  className="sm:p-7 sm:w-[170px] md:mt-2 xs:p-2 w-[150px] md:w-[250px] text-center hover:cursor-pointer  bg-gray-400 rounded-full text-white font-semibold"
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
                {selectedFiles.length > 0 &&
                  Array.from(selectedFiles).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                <p>Drag and drop files here, or</p>
                <div className=" m-12">
                  {selectedFiles.length > 0 && (
                    <button onClick={handleDownload}>Download</button>
                  )}
                </div>
              </div>
              {/* <div className="flex justify-between ml-2 ">
                <div className=" ">
                  {files.map((file) => (
                    <div key={file.name} className=" md:text-base text-sm">
                      <div>{file.name}</div>
                      <div>
                        <Image
                          src={file.preview}
                          alt={file.name}
                          width={100}
                          height={100}
                          className="rounded-xl sm:w-[120px] w-[70px]"
                        />
                        <button onClick={() => deleteFile(file.name)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div class=" p-10 flex justify-end">
          <div className=" xs:hidden sm:hidden lg:flex w-[100px] h-[550px]  bg-gray-300  items-center justify-center font-bold">
            Ad
          </div>
        </div>
      </div>
      <div className="w-2/3 mt-4 mx-auto my-auto  h-[130px] flex flex-col justify-center items-center bg-gray-300 ">
        <p className="font-bold flex flex-row justify-center items-center text-center">
          Ad
        </p>
      </div>
    </>
  );
};

export default Page;
