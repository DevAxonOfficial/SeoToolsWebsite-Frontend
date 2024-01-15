import { readFileAsBuffer } from "../Buffered File";
export const handleDrop = async (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  const fileList = Array.from(files); // Corrected line

  // Rest of the code remains the same
  for (const file of fileList) {
    const buffer = await readFileAsBuffer(file);
    console.log(`File Name: ${file.name}, Buffer Size: ${buffer.byteLength}`);
    if (file) {
      try {
        const buffer = await readFileAsBuffer(file);
        const fileName = file.name.split(".").slice(0, -1).join(".") + number;
        console.log(fileName);
        // Now 'buffer' contains the file data as a buffer
        const downloadUrl = await uploadToS3(buffer, fileName);
        setDownload(downloadUrl);

        // const url = await uploadToS3(buffer);
        // setDownloadUrl(url); // Upload the buffer to S3 (modify your upload function accordingly)
      } catch (error) {
        console.error("Error reading file:", error);
        // Handle error (e.g., show error message to the user)
      }
    }
  }

  setSelectedFiles((prevFiles) => [...prevFiles, ...fileList]);
};
