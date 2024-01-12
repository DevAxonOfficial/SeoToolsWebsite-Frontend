"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";
import Image from "next/image";

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileList = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
  };

  const handleSelectFiles = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.addEventListener("change", (event) => {
      setSelectedFiles(event.target.files);
    });
    input.click();
  };

  const mergeFiles = async () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      Array.from(selectedFiles).forEach((file) => {
        formData.append("files", file);
      });

      try {
        const response = await fetch("http://54.81.233.0/merge-pdf", {
          method: "POST",
          body: formData,
          contentType: "application/pdf",
          // Add any necessary headers like authorization, content-type, etc.
        });

        if (response.ok) {
          const result = await response.text();
          setDownloadLink(result.downloadLink); // Set the download link received from the API
        } else {
          // Handle API error or non-200 status code
          console.error("Failed to merge files");
        }
      } catch (error) {
        console.error("Error merging files:", error);
      }
    }
  };

  const handleDownload = async () => {
    // If download link is available, trigger download
    if (downloadLink) {
      try {
        const response = await fetch(downloadLink);

        const blob = await response.blob();

        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "merged_document.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        setDownloadLink(null); // Clear the download link after downloading
      } catch (error) {
        console.error("Error downloading file:", error);
      }
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
                <button
                  onClick={handleSelectFiles}
                  className="sm:p-7 sm:w-[170px] md:mt-2 xs:p-2 w-[150px] md:w-[250px]   bg-gray-400 rounded-full text-white font-semibold"
                >
                  Select Pdf file
                </button>
                <button onClick={mergeFiles}>Merge & Get Download Link</button>

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
