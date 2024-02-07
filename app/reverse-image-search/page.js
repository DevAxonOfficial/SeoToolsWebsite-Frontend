"use client";
import { DiBingSmall } from "react-icons/di";
import { FaYandexInternational } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { uploadToS3, getPreSignedURL } from "/app/utils/AWSS3/action";
import { useState } from "react";
import { Adsterra, Adsterra2 } from "../AdScript";
const Page = () => {
  const [userFileName, setuserFileName] = useState();
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState();
  const [imagePreview, setImagePreview] = useState();
  const handleFileChange = async (event) => {
    const file = event.target.files || event.dataTransfer.files;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file[0]);

    const fileName = file[0].name;
    setuserFileName(`${fileName}`);
    if (file && file.length <= 1) {
      try {
        const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
        if (file[0].size <= maxFileSize) {
          const formData = new FormData();
          formData.append("files", file[0]);
          const fileBuffer = await readFileAsBuffer(file[0]);
          await uploadToS3(fileBuffer, fileName, "images-raw-seo");
          const url = getPreSignedURL(fileName);
          setUrl(url);
          setLoader(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length == 1) {
      await handleFileChange(event);
      return;
    } else if (files.length > 0) {
      toast.warn("DSADASD");
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const readFileAsBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const buffer = Buffer.from(reader.result);
        resolve(buffer);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <>
      <Adsterra slot={"32574d71c95c68d56e8efa676b6849a4"} />
      <div className="  flex justify-around  mt-10 ">
        <div>
          <div
            className="flex justify-center items-center sm:px-36 xm:w-[100%] xm:h-[350px]  sm:w-[100%]  sm:h-[400px] md:w-[800px]  "
            style={{
              backgroundImage: `url(/img/ReversImageBack.png)`,
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
                  src="/img/ReverseImage.png"
                  alt="remove logo"
                  width={90}
                  height={90}
                />
                
              </div>
              <p className=" text-center font-bold text-3xl">
                REVERSE IMAGE SEARCH
              </p>
              <div className="w-96 mb-3 text-center">
                Simplify your document management with our quick and intuitive
                <span className="font-bold">REVERSE IMAGE SEARCH</span>
              </div>
              <div className=" flex justify-center ">
                <label
                  htmlFor="file-upload"
                  className="sm:px-14 sm:py-7 xm:p-7  text-center hover:cursor-pointer  bg-[#4BC5BC] rounded-full text-white font-semibold"
                >
                  Select IMAGE
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="file-upload"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
              <span className="flex justify-center items-center  ">
                or simply drag & drop files
              </span>
              {/* <ToastContainer/> */}
            </div>
          </div>
        </div>
      </div>
      <Adsterra2 slot={"bbd1e0f4c54c1cb2ae6f3aaabd762788"} />
      {loader && (
        <div className=" xm:block sm:block mt-6 md:flex justify-center">
          <div className="border border-gray-300 flex justify-center items-center">
            <Image
              src={imagePreview}
              alt={`${userFileName}`}
              width={353}
              height={353}
            />
          </div>
          <div className="pl-10 border py-8 px-10 border-gray-300" >
            <div className="flex  items-center  my-6">
              <div>
                <FaGoogle className="text-white bg-[#3490dc] w-[50px] h-[50px] p-1" />
              </div>
              <div className="pl-3">
                <p>Similar Images according to Google</p>
                  <a
                   className="text-white bg-[#3490dc] px-7 py-1 rounded-lg"
                    href={`https://lens.google.com/uploadbyurl?url=${url}`}
                    target="blank"
                  >
                     Search Matches
                  </a>
              </div>
            </div>
            <div className="flex items-center  my-6">
              <div>
              <DiBingSmall className="text-white bg-[#008373] w-[50px] h-[50px] p-1" />
              </div>
              <div className="pl-3">
                <p>Similar Images according to Bing</p>
                  <a
                  className="text-white bg-[#008373] px-7 py-1 rounded-lg"
                    href={`https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:${url}`}
                    target="blank"
                  >
                    Search Matches
                  </a>
              </div>
            </div>
            <div className="flex  items-center  my-6 ">
              <div> 
                <FaYandexInternational className="text-white bg-[#e3342f] w-[50px] h-[50px] p-1" />
              </div>
              <div className="pl-3">
                <p>Similar Images according to Yandex</p>
                  <a
                  className="text-white bg-[#e3342f] px-7 py-1 rounded-lg"
                    href={`https://yandex.com/images/search?source=collections&url=${url}`}
                    target="blank"
                  >
                    Search Matches
                  </a>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Page;
