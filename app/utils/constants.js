export const SPLIT_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle24.png",
  logoImage: "/img/Split.png",
  toolName: "Split Pdf",
  toolSpec: " Split PDF",
  bgColor: "bg-[#DBF3F2]",
  apiEndpoint: "/api/splitPdf",
  BtnName: "Select PDF File",
  acceptedFiles: "application/pdf",
};
export const REMOVE_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle22.png",
  logoImage: "/img/remove.png",
  toolName: "Remove Pages",
  toolSpec: " Remove Pages",
  bgColor: "bg-[#FDF8E1]",
  apiEndpoint: "/api/removePdf",
  BtnName: "Select PDF File",
  acceptedFiles: "application/pdf",
};
export const MERGE_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle23.png",
  logoImage: "/img/Merge.png",
  toolName: "Merge Pdf",
  toolSpec: " Merge PDF",
  bgColor: "bg-[#FDE1E1]",
  apiEndpoint: "/api/mergePdf",
  BtnName: "Select PDF File",
  acceptedFiles: "application/pdf",
};
export const COMPRESS_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle25.png",
  logoImage: "/img/Compress.png",
  toolName: "Compress Pdf",
  toolSpec: " Compress PDF",
  bgColor: "bg-[#EAEFF0]",
  apiEndpoint: "/api/compressPdf",
  BtnName: "Select PDF File",
  acceptedFiles: "application/pdf",
};
export const WORD_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle26.png",
  logoImage: "/img/WORD.png",
  toolName: "Word To Pdf",
  toolSpec: " Word To PDF",
  bgColor: "bg-[#EEE6FF]",
  apiEndpoint: "/api/wordToPdf",
  BtnName: "Select Word File",
  acceptedFiles:
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
export const CSV_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle32.png",
  logoImage: "/img/Group 32.png",
  toolName: "CSV To Pdf",
  toolSpec: " CSV To PDF",
  bgColor: "bg-[#E9F4E5]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "CSV",
  BtnName: "Select CSV File",
  acceptedFiles: ".csv",
};
export const TXT_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle33.png",
  logoImage: "/img/Group33.png",
  toolName: "TXT To Pdf",
  toolSpec: " TXT To PDF",
  bgColor: "bg-[#D2F6FC]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "TXT",
  BtnName: "Select TXT File",
  acceptedFiles: "text/plain",
};
export const EXCEL_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle34.png",
  logoImage: "/img/Excel.png",
  toolName: "Excel To Pdf",
  toolSpec: " Excel To PDF",
  bgColor: "bg-[#D8EFDE]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "EXCEL",
  BtnName: "Select Excel File",
  acceptedFiles: "application/vnd.ms-excel",
};
export const PPT_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle35.png",
  logoImage: "/img/Ppt.png",
  toolName: "PPT To Pdf",
  toolSpec: " PPT To PDF",
  bgColor: "bg-[#FFDFDF]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "PPT",
  BtnName: "Select PPT File",
  acceptedFiles: "application/vnd.ms-powerpoint",
};
export const HTML_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle36.png",
  logoImage: "/img/Html.png",
  toolName: "HTML To Pdf",
  toolSpec: " HTML To PDF",
  bgColor: "bg-[#FFF4D6]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "HTML",
  BtnName: "Select HTML File",
  acceptedFiles: "text/html",
};
export const PNG_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle39.png",
  logoImage: "/img/Png.png",
  toolName: "PNG To Pdf",
  toolSpec: " PNG To PDF",
  bgColor: "bg-[#FDF8E1]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "PNG",
  BtnName: "Select PNG File",
  acceptedFiles: "image/*",
};
export const JPG_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle38.png",
  logoImage: "/img/Jpeg.png",
  toolName: "JPG To Pdf",
  toolSpec: " JPG To PDF",
  bgColor: "bg-[#FDE9FD]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "JPG",
  BtnName: "Select JPG File",
  acceptedFiles: "image/*",
};
export const PSD_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle37.png",
  logoImage: "/img/Psd.png",
  toolName: "PSD To Pdf",
  toolSpec: " PSD To PDF",
  bgColor: "bg-[#D3E9F3]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "PSD",
  BtnName: "Select PSD File",
  acceptedFiles: ".psd",
};
export const PDF_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle40.png",
  logoImage: "/img/pdf-to-word.png",
  toolName: "PDF To Word",
  toolSpec: " PDF To Word",
  bgColor: "bg-[#d8edf9]",
  apiEndpoint: "/api/pdfToWord",
  BtnName: "Select PDF File",
  acceptedFiles: "application/pdf",
};
export const PROMPS_POPULAR_PDF_TOOLS = [
  {
    bgcolor: "#e4fbfe",
    logoimage: "/img/Compress.png",
    heading: "Compress Pdf",
    img2: "/img/Group1.png",
    Link: "/compress-pdf",
  },
  {
    bgcolor: "#fde1e1",
    logoimage: "/img/Merge.png",
    heading: "Merge Pdf",
    img2: "/img/Group2.png",
    Link: "/merge-pdf",
  },
  {
    bgcolor: "#dbf3f2",
    logoimage: "/img/Split.png",
    heading: "Split Pdf",
    img2: "/img/Group3.png",
    Link: "/split-pdf",
  },
  {
    bgcolor: "#fdf8e1",
    logoimage: "/img/remove.png",
    heading: "Remove Pages",
    img2: "/img/Group4.png",
    Link: "/remove-pages",
  },
  {
    bgcolor: "#eee6ff",
    logoimage: "/img/WORD.png",
    heading: "Word to Pdf",
    img2: "/img/Group15.png",
    Link: "/word-to-pdf",
  },
  {
    bgcolor: "#fde9fd",
    logoimage: "/img/Jpeg.png",
    heading: "JPG to Pdf",
    img2: "/img/Group39.png",
    Link: "/jpg-to-pdf",
  },
  {
    bgcolor: "#d2f6fc",
    logoimage: "/img/Txt.png",
    heading: "TXT to Pdf",
    img2: "/img/Group34.png",
    Link: "/txt-to-pdf",
  },
  {
    bgcolor: "#e9f4e5",
    logoimage: "/img/Csv.png",
    heading: "CSV to Pdf",
    img2: "/img/Group18.png",
    Link: "/csv-to-pdf",
  },
  {
    bgcolor: "#d8efde",
    logoimage: "/img/Excel.png",
    heading: "Excel to Pdf",
    img2: "/img/Group35.png",
    Link: "/excel-to-pdf",
  },
  {
    bgcolor: "#d3e9f3",
    logoimage: "/img/Psd.png",
    heading: "PSD to Pdf",
    img2: "/img/Group38.png",
    Link: "/psd-to-pdf",
  },
  {
    bgcolor: "#fff4d6",
    logoimage: "/img/Html.png",
    heading: "HTML to Pdf",
    img2: "/img/Group37.png",
    Link: "/html-to-pdf",
  },
  {
    bgcolor: "#ffdfdf",
    logoimage: "/img/Ppt.png",
    heading: "PPT to Pdf",
    img2: "/img/Group36.png",
    Link: "/ppt-to-pdf",
  },
  {
    bgcolor: "#fef4d4",
    logoimage: "/img/Png.png",
    heading: "PNG to Pdf",
    img2: "/img/Group40.png",
    Link: "/png-to-pdf",
  },
  {
    bgcolor: "#d8edf9",
    logoimage: "/img/pdf-to-word.png",
    heading: "PDF to Word",
    img2: "/img/Group41.png",
    Link: "/pdf-to-word",
  },
];

export const PROMPS_FREE_SEO_TOOLS = [
  {
    Heading: "Fast & Effective Conversion:",
    ImgUrl: "/img/Group6.png",
    Detail: "Our cutting-edge technology ensures that your files are converted",
  },
  {
    Heading: "No Software Installation:",
    ImgUrl: "/img/Group7.png",
    Detail:
      "Our web-based PDF converter eliminates the need for downloads or installations, allowing you to convert files hassle-free.",
  },
  {
    Heading: "24/7 Positive Feedback:",
    ImgUrl: "/img/Group8.png",
    Detail:
      "Receive comprehensive assistance whenever you require it, thanks to our 24/7 customer support.",
  },
  {
    Heading: "Cost-Effective Solutions:",
    ImgUrl: "/img/Group9.png",
    Detail:
      "Enjoy the benefits of a feature-rich PDF converter tool without breaking the bank.",
  },
  {
    Heading: "People Trust Us:",
    ImgUrl: "/img/Group10.png",
    Detail:
      "Our service has been utilized by over a billion users, streamlining their tasks with digital documents.",
  },
  {
    Heading: "Regular Updates and Support:",
    ImgUrl: "/img/Group11.png",
    Detail:
      "Our team is dedicated to providing regular updates to enhance functionality and address user needs.`",
  },
];

export const ALL_TOOLS = {
  convert_and_compress: [
    {
      UrlLink: "/compress-pdf",
      Image: "/img/Compress.png",
      Alt: "compress logo",
      LiName: "Compress PDF",
      BgColor: "hover:bg-[#185058]",
    },
  ],
  Organize: [
    {
      UrlLink: "/merge-pdf",
      Image: "/img/Merge.png",
      Alt: "Merge logo",
      LiName: "Merge PDF",
      BgColor: "hover:bg-[#f56767]",
    },
    {
      UrlLink: "/split-pdf",
      Image: "/img/Split.png",
      Alt: "Merge logo",
      LiName: "Split PDF",
      BgColor: "hover:bg-[#4bc5bc]",
    },
    {
      UrlLink: "/remove-pages",
      Image: "/img/remove.png",
      Alt: "Remove Pages logo",
      LiName: "Remove Pages",
      BgColor: "hover:bg-[#f0d54d]",
    },
  ],
  Convert_to_PDF: [
    {
      UrlLink: "/word-to-pdf",
      Image: "/img/WORD.png",
      Alt: "Word To Pdf logo",
      LiName: "Word To Pdf",
      BgColor: "hover:bg-[#a981ff]",
    },
    {
      UrlLink: "/excel-to-pdf",
      Image: "/img/Excel.png",
      Alt: "Excel To Pdf logo",
      LiName: "Excel To Pdf",
      BgColor: "hover:bg-[#3ab15b]",
    },
    {
      UrlLink: "/ppt-to-pdf",
      Image: "/img/Ppt.png",
      Alt: "PPT To Pdf logo",
      LiName: "PPT To Pdf",
      BgColor: "hover:bg-[#ff6161]",
    },
    {
      UrlLink: "/jpg-to-pdf",
      Image: "/img/Jpeg.png",
      Alt: "JPG To Pdf logo",
      LiName: "JPG To Pdf",
      BgColor: "hover:bg-[#f492f6]",
    },
  ],
};
export const Tools = [
  { Name: "Merge", Url: "/merge-pdf" },
  { Name: "Compress", Url: "/compress-pdf" },
  { Name: "Split", Url: "/split-pdf" },
];
export const Slider = [
  {
    bgColor: "bg-[#185058]",
    heading: "Everything",
  },
  {
    bgColor: "bg-[#f56767]",
    heading: "Your Life",
  },
  {
    bgColor: "bg-[#4bc5bc]",
    heading: "Education",
  },
  {
    bgColor: "bg-[#f492f6]",
    heading: "Business",
  },
  {
    bgColor: "bg-[#a981ff]",
    heading: "SEO",
  },
];
