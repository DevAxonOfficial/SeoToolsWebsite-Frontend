"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";
import Image from "next/image";

const Page = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const deleteFile = (fileName) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  const handleClick = (event) => {
    if (files.length === 0) {
      event.preventDefault();
      // Additional logic can be added here if needed
    }
  };
  return (
    <div>
      <div class="grid grid-cols-3">
        <div class=" p-10">
          <div className="xs:hidden sm:hidden lg:flex  w-[100px] h-[550px] bg-gray-300  items-center justify-center font-bold">
            Ad
          </div>
        </div>
        <div class="p-4 flex justify-center items-center">
          <div {...getRootProps()} onClick={handleClick}>
            <div
              className="grid grid-cols-1  xl:w-[940px] md:w-[800px] lg:w-[850px] xs:w-[400px] sm:w-[700px] xl:h-[600px] lg:h-[370px] xs:h-[400px] sm:h-[700px]  justify-center items-center"
              style={{
                backgroundImage: "url('/img/Rectangle23.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-center items-center">
                <div className="flex xl:p-16 xs:p-10  flex-col justify-center items-center">
                  <Image
                    src="/img/Compress.png"
                    alt="remove logo"
                    width={90}
                    height={90}
                    className=" lg:w-[90px] xs:w-[60px]   flex justify-center items-center "
                  />
                  <h1 className="text-center md:mt-3 text-2xl md:text-3xl font-bold">
                    Compress PDF
                  </h1>
                  <p className=" text-center md:mt-2 xs:leading-4 leading-5 md:text-base xs:text-sm">
                    Simplify your document management with our <br /> quick and
                    intuitive{" "}
                    <strong className="font-bold">Pdf Merge Tool.</strong>
                  </p>
                  <button className="sm:p-7 sm:w-[170px] md:mt-2 xs:p-2 w-[150px] md:w-[250px]   bg-gray-400 rounded-full text-white font-semibold">
                    Select Pdf file
                  </button>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop files here...</p>
                  ) : (
                    <p className="xs:text-xs">Drag and drop PDF files here</p>
                  )}
                </div>
                <div className="flex justify-between ml-2 ">
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
                </div>
              </div>
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
    </div>
  );
};

export default Page;
