"use client";
import { useState } from "react";
import { MdFileDownload } from "react-icons/md";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [download, setDownload] = useState();
  

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const fileList = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setLoader(true)
    try {
      const formData = new FormData();
      const fileNames = [];

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];

        if (file.type === "application/pdf") {
          formData.append("files", file);
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
      setLoader(false )
      setDownload(downloadUrl);
    } catch (error) {
      console.error("Error processing files:", error);
      
    }

    
  };
  const handleFileChange = async (event) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setLoader(true);
    if (files && files.length > 0) {
      try {
        const formData = new FormData();
        const fileNames = [];
        const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes

        if (files.length < 2) {
          toast.error("Please select at least two files.");
         
          return;
        }

        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          if (file.type === "application/pdf") {
            if (file.size <= maxFileSize) {
              formData.append("files", file);
              fileNames.push(file.name);
            } else {
              toast.error(
                `File ${file.name} exceeds the maximum size of 5 MB and will be skipped.`
              );
              return; 
            }
          } else {
            toast.warn(`File ${file.name} is not a PDF and will be skipped.`);
          }
        }

        if (formData.has("files")) {
          formData.append("fileNames", JSON.stringify(fileNames));

          const response = await axios.post("/api/mergePdf", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          const downloadUrl = response.data.downloadUrl;
          setLoader(false)
          setDownload(downloadUrl);
      
        } else {
          toast.warn("No valid files selected.");
          
        }
      } catch (error) {
        console.error("Error processing files:", error);
        toast.error("Error processing files. Please try again.");
       
      }
    } else {
      toast.warn("No files selected.");
     
    }
  };
  const handleDownload = () => {
    // Trigger the download using the download URL
    if (download) {
      window.open(download, "_blank");
    }
  };
  return (
    <>
      <div className=" flex justify-around  mt-10 ">
        <div className="  xm:hidden sm:hidden lg:flex bg-[#d9d9d9] xl:w-[120px] h-[550px] lg:w-[80px] justify-center items-center text-xl font-bold  ">
          AD
        </div>
        <div>
        <div
          className=" flex justify-center items-center xm:w-[100%] xm:h-[350px]  sm:w-[100%]  sm:h-[400px] md:w-[800px]   "
          style={{
            backgroundImage: "url('/img/Rectangle23.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
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
                style={{ display: "none" }} 
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
            <ToastContainer />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center rounded-3xl mt-4 py-4 xm:px-8 sm:px-28  bg-[#FDE1E1]">
            <div className="flex justify-around py-2 border border-gray-300 rounded-lg xm:w-80   w-96  bg-white  ">
              <div className="flex justify-center items-center ml-2">
                <Image
                  src="/img/Group13.png"
                  alt="Google Drive Icone"
                  width={38}
                  height={38}
                />
                <div>
                {selectedFiles.length == 0 ? (
                  <p className="ml-4 ">Pdf File Name</p>
                ) : (
                  selectedFiles.map((file, index) => (
                    <p className="ml-4" key={index}>
                      {file.name}
                      <br />
                    </p>  
                  ))
                )}
                </div>
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
        <div className=" xm:hidden sm:hidden lg:flex bg-[#d9d9d9] xl:w-[120px] h-[550px] lg:w-[80px]  justify-center items-center text-xl font-bold  ">
          AD
        </div>
      </div>
      <div className=" text-center py-16 w-[70%] xm:mt-24 sm:mt-24 lg:mt-3  mx-auto font-semibold bg-[#d9d9d9]">
        Ad
      </div>
    </>
  );
};

export default Page;
