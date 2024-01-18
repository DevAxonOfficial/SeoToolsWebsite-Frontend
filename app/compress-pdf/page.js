"use client";
import { MdFileDownload } from "react-icons/md";
import { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loader ,setLoader] = useState(false) 
  const [download, setDownload] = useState();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileList = Array.from(files);
    for (const file of fileList) {
      await handleFileChange({ target: { files: [file] } });
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
  };
  const handleFileChange = async (event) => {
    const files = event.target.files;
    setLoader(true)
    
    if (files && files.length > 0) {
      try {
        const formData = new FormData();
        const fileNames = [];
        setSelectedFiles(fileNames)

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

        const response = await axios.post("/api/compressPdf", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);

        const downloadUrl = response.data.downloadUrl;
        setLoader(false)
        setDownload(downloadUrl);
      } catch (error) {
        console.error("Error processing files:", error);
      }
    } else {
      console.warn("No files selected.");
    }
  };
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
            backgroundImage: "url('/img/Rectangle25.png')",
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
                src="/img/Compress.png"
                alt="remove logo"
                width={90}
                height={90}
              />
            </div>
            <p className=" text-center font-bold text-3xl">Compress Pages</p>
            <div className="w-96 mb-3 text-center">
              Simplify your document management with our quick and intuitive
              <span className="font-bold"> Remove Pages.</span>
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
          <div className="flex justify-center items-center rounded-2xl py-4 xm:px-8 sm:px-28 lg:px-52 bg-[#EAEFF0]">
            <div className="flex justify-around py-2 border border-gray-300 rounded-lg xm:w-80   w-96  bg-white  ">
              <div className="flex justify-center items-center ml-2">
                <Image
                  src="/img/Group13.png"
                  alt="Google Drive Icone"
                  width={38}
                  height={38}
                />
               {selectedFiles.length==0?<p className="ml-4 ">Pdf File Name</p>: <p className="ml-4 ">{selectedFiles}</p> }
              </div>
              {loader && (
              <div>
                <div class="flex items-center justify-center ">
                      <div class="border-t-8 border-solid border-teal-400 rounded-full w-8 h-8 animate-spin"></div>
                </div>
                </div>
             ) }
              {download && (
                <div className="flex justify-center items-center mr-2  hover:cursor-pointer">
                  <Image
                  width={24}
                  height={24}
                  src="/img/down2.png"
                  onClick={handleDownload}/>
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
