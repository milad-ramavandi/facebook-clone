import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="lds-ellipsis space-x-2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingPage;
