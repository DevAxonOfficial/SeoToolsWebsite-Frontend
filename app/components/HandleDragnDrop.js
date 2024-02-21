import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiFileText } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const HandleDragnDrop = ({
  backgroundImage,
  logoImage,
  toolName,
  toolSpec,
  apiEndpoint,
  bgColor,
  fileType,
  BtnName,
  acceptedFiles,
  contentTitle,
  contentDescription,
  contentImg1,
  contentHeading1,
  contentDescription1,
  contentImg2,
  contentHeading2,
  subHeading1,
  subHeadingDescription1,
  subHeading2,
  subHeadingDescription2,
  subHeading3,
  subHeadingDescription3,
  subHeading4,
  subHeadingDescription4,
  contentImg3,
  contentImg4,
  contentHeading3,
  subHeading5,
  subHeadingDescription5,
  subHeading6,
  subHeadingDescription6,
  subHeading7,
  subHeadingDescription7,
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
            if (files.length > 1) {
              toast.warn("Please select only one file.");
              setLoader(false);
              return;
            }
            if (fileType === "CSV" && file.type !== "text/csv") {
              toast.warn(
                `File ${file.name} is not a CSV file and will be skipped.`
              );
              setLoader(false);
              return;
            } else if (fileType === "TXT" && file.type !== "text/plain") {
              toast.warn(
                `File ${file.name} is not a TXT file and will be skipped.`
              );
              setLoader(false);
              return;
            } else if (
              fileType === "EXCEL" &&
              !(
                file.type ===
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
                file.type === "application/vnd.ms-excel" ||
                file.name.endsWith(".xls") ||
                file.name.endsWith(".xlsx")
              )
            ) {
              toast.warn(
                `File ${file.name} is not an Excel file and will be skipped.`
              );
              setLoader(false);
              return;
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
              setLoader(false);
              return;
            } else if (fileType === "HTML" && file.type !== "text/html") {
              toast.warn(
                `File ${file.name} is not an HTML file and will be skipped.`
              );
              setLoader(false);
              return;
            } else if (fileType === "SVG" && file.type !== "image/svg+xml") {
              toast.warn(
                `File ${file.name} is not an SVG file and will be skipped.`
              );
              setLoader(false);
              return;
            } else if (fileType === "PNG" && file.type !== "image/png") {
              toast.warn(
                `File ${file.name} is not a PNG file and will be skipped.`
              );
              setLoader(false);
              return;
            } else if (fileType === "JPG" && file.type !== "image/jpeg") {
              toast.warn(
                `File ${file.name} is not a JPG file and will be skipped.`
              );
              setLoader(false);
              return;
            } else if (fileType === "PSD" && fileExtension !== "psd") {
              toast.warn(
                `File ${file.name} is not a PSD file and will be skipped.`
              );
              setLoader(false);
              return;
            }
            if (file.size <= maxFileSize) {
              formData.append("files", file);
              fileNames.push(file.name);
              setSelectedFiles(fileNames);
            } else {
              toast.error(
                `File ${file.name} exceeds the maximum size of 5 MB and will be skipped.`
              );
              setLoader(false);
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
                setLoader(false);
                return;
              }
            } else {
              toast.warn(
                `File ${file.name} is not a Word document and will be skipped.`
              );
              setLoader(false);
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
                setLoader(false);
                return;
              }
            } else {
              toast.warn(`File ${file.name} is not a PDF and will be skipped.`);
              setLoader(false);
            }
          }
        }
        if (apiEndpoint === "/api/mergePdf") {
          // For mergepdf endpoint, ensure at least two files are selected
          if (files.length < 2) {
            toast.warn("Please select at least two PDF files for merging.");
            setLoader(false);
            return;
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
          setLoader(false);
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 50; // Adjust this value based on when you want the transition to complete

      // Calculate scroll direction
      const scrollDirection = scrolled > prevScrollY ? "down" : "up";

      // Calculate opacity based on scroll position
      const opacity = Math.min(1, scrolled / maxScroll);

      // Update opacity based on scroll direction
      if (scrollDirection === "down") {
        setScrollOpacity(opacity);
      } else {
        setScrollOpacity(1 - opacity);
      }

      // Update previous scroll position
      setPrevScrollY(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <div className="  flex justify-around  mt-10 ">
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
                  className="sm:px-14 sm:py-7 xm:p-7  text-center hover:cursor-pointer  bg-[#4BC5BC] rounded-full text-white font-semibold"
                >
                  {BtnName}
                </label>
                <input
                  type="file"
                  accept={`${acceptedFiles}`}
                  id="file-upload"
                  multiple={true}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
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
                  <FiFileText className="text-2xl" />
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
      </div>
      <div className=" mt-10">
        <div className="py-10">
          <h2 className="text-4xl text-center py-6 font-bold">
            {contentTitle}
          </h2>
          <p
            className="fade-container w-8/12 mx-auto md:order-first lg:order-last"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {contentDescription}
          </p>
        </div>
        <div className="justify-center   items-center grid lg:grid-cols-2  ">
          <div
            className="fade-container mx-auto md:order-first lg:order-last"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={contentImg1}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className="w- px-8 mx-auto py-20 md:order-last lg:order-first">
            <h2 className="font-bold text-2xl py-4">{contentHeading1}</h2>
            <p className="fade-container mx-auto md:order-first lg:order-last">
              {contentDescription1}
            </p>
          </div>
        </div>
        <div className="justify-center   items-center grid lg:grid-cols-2  ">
          <div
            className=" mx-auto    "
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={contentImg2}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className=" px-8 py-20 ">
            <h2 className="font-bold text-xl py-4">{contentHeading2}</h2>
            <h2 className="font-semibold text-lg py-4">{subHeading1}</h2>
            <p className=" text-balance ">{subHeadingDescription1}</p>
            <h2 className="font-semibold  text-lg py-4">{subHeading2}</h2>
            <p className=" text-balance ">{subHeadingDescription2}</p>
          </div>
        </div>
        <div className="justify-center items-center grid lg:grid-cols-2  ">
          <div
            className=" mx-auto md:order-first   lg:order-last "
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={contentImg3}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className="w- px-8 py-20 mx-auto md:order-last lg:order-first">
            <h2 className="font-semibold text-lg py-4">{subHeading3}</h2>
            <p className=" text-balance ">{subHeadingDescription3}</p>
            <h2 className="font-semibold  text-lg py-4">{subHeading4}</h2>
            <p className=" text-balance ">{subHeadingDescription4}</p>
          </div>
        </div>
        <div className="justify-center  items-center grid lg:grid-cols-2  ">
          <div
            className=" mx-auto"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={contentImg4}
              width={600}
              height={600}
              alt="content"
              className="mx-auto "
            />
          </div>
          <div className="px-8 py-20">
            <h2 className="font-bold text-xl py-4">{contentHeading3}</h2>
            <h2 className="font-semibold text-lg py-4">{subHeading5}</h2>
            <p className=" text-balance ">{subHeadingDescription5}</p>
            <h2 className="font-semibold  text-lg py-4">{subHeading6}</h2>
            <p className=" text-balance ">{subHeadingDescription6}</p>
            <h2 className="font-semibold  text-lg py-4">{subHeading7}</h2>
            <p className=" text-balance ">{subHeadingDescription7}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandleDragnDrop;
