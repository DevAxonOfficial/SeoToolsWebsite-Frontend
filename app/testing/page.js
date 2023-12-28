import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-none h-20 bg-gray-700">Top Area</div>
      <div className="flex flex-row">
        <div className="flex-1 bg-gray-300">Left Area</div>
        <div className="flex-2 bg-gray-400">Right Area</div>
      </div>
      <div className="flex-none h-20 bg-gray-500">Bottom Area</div>
    </div>
  );
};

export default page;
