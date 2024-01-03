import React from "react";

const AdContainer = ({width,height}) => {
  return (
    <div className={`bg-[#D9D9D9] ${width} ${height} my-10 flex  justify-center items-center` }>
      
        <p className="font-bold">Ad</p>
     
    </div>
  );
};

export default AdContainer;
