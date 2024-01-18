"use client";
import React from "react";
import { useState } from "react";
import { MdFileDownload } from "react-icons/md";
import axios from "axios";
import Image from "next/image";

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [download, setDownload] = useState();

  const numbers = Math.floor(Math.random() * 9000) + 1000;
  const number = numbers.toString();

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

    setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        // Check if the file type is allowed (in this case, only allow .docx and .doc files)
        const allowedFileTypes = [
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowedFileTypes.includes(file.type)) {
          throw new Error("Invalid file type. Please upload a Word document.");
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", file.name);

        const response = await axios.post("/api/anythingToPdf", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const downloadUrl = response.data.downloadUrl;
        setDownload(downloadUrl);
      } catch (error) {
        console.error("Error processing file:", error.message);
        // Handle error (e.g., show error message to the user)
      }
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
            <p className=" text-center font-bold text-3xl">Word To PDF</p>
            <div className="w-96 mb-3 text-center">
              Simplify your document management with our quick and intuitive
              <span className="font-bold"> PDF Merge Tool.</span>
            </div>
            <div className=" flex justify-center ">
              <label
                htmlFor="file-upload"
                className="sm:p-7 sm:w-[170px] md:mt-2 xs:p-2 w-[150px] md:w-[250px] text-center hover:cursor-pointer  bg-gray-400 rounded-full text-white font-semibold"
              >
                Select Pdf File
              </label>
              <input
                type="file"
                id="file-upload"
                multiple={true}
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the file input
              />
              {/* {selectedFiles && <p> {selectedFiles}</p>} */}
              {download && (
                <button onClick={handleDownload}>Download File</button>
              )}
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
                <p className="ml-4 ">Pdf File Name</p>
              </div>
              <div className="flex justify-center items-center">
                <MdFileDownload />
              </div>
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
