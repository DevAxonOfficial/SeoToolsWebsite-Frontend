export const handleDownload = () => {
  // Trigger the download using the download URL
  if (download) {
    window.open(download, "_blank"); // Open the download URL in a new tab
  }
};
