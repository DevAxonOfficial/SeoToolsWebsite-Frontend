import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HandleDragnDrop = ({
  backgroundImage,
  logoImage,
  toolName,
  toolSpec,
  apiEndpoint,
  bgColor,
  fileType,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [download, setDownload] = useState();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const commonFileHandler = async (files) => {
    setLoader(true);

    if (files && files.length > 0) {
      try {
        const formData = new FormData();
        const fileNames = [];
        const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileExtension = file.name.split(".").pop().toLowerCase();
          // Check if the API endpoint is for anythingToPdf
          if (apiEndpoint === "/api/anythingToPdf") {
            if (fileType === "CSV" && file.type !== "text/csv") {
              toast.warn(
                `File ${file.name} is not a CSV file and will be skipped.`
              );
              continue;
            } else if (fileType === "TXT" && file.type !== "text/plain") {
              toast.warn(
                `File ${file.name} is not a TXT file and will be skipped.`
              );
              continue;
            } else if (
              fileType === "EXCEL" &&
              !(
                file.type ===
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
                file.type === "application/vnd.ms-excel"
              )
            ) {
              toast.warn(
                `File ${file.name} is not an Excel file and will be skipped.`
              );
              continue;
            } else if (
              fileType === "PPT" &&
              !(
                file.type ===
                  "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
                file.type === "application/vnd.ms-powerpoint"
              )
            ) {
              toast.warn(
                `File ${file.name} is not a PowerPoint file and will be skipped.`
              );
              continue;
            } else if (fileType === "HTML" && file.type !== "text/html") {
              toast.warn(
                `File ${file.name} is not an HTML file and will be skipped.`
              );
              continue;
            } else if (fileType === "PNG" && file.type !== "image/png") {
              toast.warn(
                `File ${file.name} is not a PNG file and will be skipped.`
              );
              continue;
            } else if (fileType === "JPG" && file.type !== "image/jpeg") {
              toast.warn(
                `File ${file.name} is not a JPG file and will be skipped.`
              );
              continue;
            } else if (fileType === "PSD" && fileExtension !== "psd") {
              toast.warn(
                `File ${file.name} is not a PSD file and will be skipped.`
              );
              continue;
            }
            if (file.size <= maxFileSize) {
              formData.append("files", file);
              fileNames.push(file.name);
              setSelectedFiles(fileNames);
            } else {
              toast.error(
                `File ${file.name} exceeds the maximum size of 5 MB and will be skipped.`
              );
              return;
            }
          } else if (apiEndpoint === "/api/wordToPdf") {
            // If the endpoint is for wordToPdf, accept only Word files
            if (
              file.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
              file.type === "application/msword"
            ) {
              if (file.size <= maxFileSize) {
                formData.append("files", file);
                fileNames.push(file.name);
                setSelectedFiles(fileNames);
              } else {
                toast.error(
                  `File ${file.name} exceeds the maximum size of 5 MB and will be skipped.`
                );
                return;
              }
            } else {
              toast.warn(
                `File ${file.name} is not a Word document and will be skipped.`
              );
            }
          } else {
            // For other endpoints, accept only PDF files
            if (file.type === "application/pdf") {
              if (file.size <= maxFileSize) {
                formData.append("files", file);
                fileNames.push(file.name);
                setSelectedFiles(fileNames);
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
        }

        if (formData.has("files")) {
          formData.append("fileNames", JSON.stringify(fileNames));

          const response = await axios.post(apiEndpoint, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          const downloadUrl = response.data.downloadUrl;
          setLoader(false);
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

  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const fileList = Array.from(files);
    await commonFileHandler(fileList);
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    await commonFileHandler(files);
  };
  const handleDownload = () => {
    if (download) {
      window.open(download, "_blank");
    }
  };
  return (
    <>
      <div className="  flex justify-around  mt-10 ">
        <div className="hidden  bg-[#d9d9d9] xl:w-[120px] h-[550px] lg:w-[80px] justify-center items-center text-xl font-bold  ">
          AD
        </div>
        <div>
          <div
            className="flex justify-center items-center xm:w-[100%] xm:h-[350px]  sm:w-[100%]  sm:h-[400px] md:w-[800px]  "
            style={{
              backgroundImage: `url('${backgroundImage}')`,
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
                  src={logoImage}
                  alt="remove logo"
                  width={90}
                  height={90}
                />
              </div>
              <p className=" text-center font-bold text-3xl">{toolName}</p>
              <div className="w-96 mb-3 text-center">
                Simplify your document management with our quick and intuitive
                <span className="font-bold">{toolSpec}</span>
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
            <div
              className={`flex justify-center items-center rounded-3xl mt-4 py-4 xm:px-8 sm:px-28 ${bgColor}`}
            >
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
                    <div className="flex items-center justify-center ">
                      <div className="border-t-8 border-solid border-teal-400 rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                  </div>
                )}
                {download && (
                  <div className="flex justify-center items-center mr-2 hover:cursor-pointer">
                    <Image
                      alt="downloadLogo"
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
        <div className="hidden bg-[#d9d9d9] xl:w-[120px] h-[550px] lg:w-[80px]  justify-center items-center text-xl font-bold  ">
          AD
        </div>
      </div>
      <div className=" hidden text-center py-16 w-[70%] xm:mt-24 sm:mt-24 lg:mt-0 mx-auto font-semibold bg-[#d9d9d9]">
        Ad
      </div>
    </>
  );
};

export default HandleDragnDrop;
