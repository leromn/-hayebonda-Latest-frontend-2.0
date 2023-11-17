import React, { useEffect } from "react";

const ImageComponent = ({ imageData }) => {
  // // Create a Blob from the Uint8Array
  // const blob = new Blob([imageData.data], { type: "image/jpeg" });
  // const base64String = imageData.data.toString("base64");
  // // Create a URL for the Blob
  // const imageUrl = URL.createObjectURL(blob);
  // const dataUrl = `data:image/jpeg;base64,${imageUrl}`;
  // useEffect(() => {
  //   console.log(imageData);
  // }, []);
  return (
    <div>
      <img src={`data:image/jpeg;base64,${imageData}`} alt="Image" />
    </div>
  );
};

export default ImageComponent;
