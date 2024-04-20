import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image8 from "../assets/image8.jpg";



function ImageGallery() {
  const [mainImage, setMainImage] = useState("");
  const handleImageClick = (newImage) => {
    console.log(newImage);
    setMainImage(newImage);
  };

  return (
    <>
      <div className="px-5">
        {
            mainImage ?
            <img className="w-[660px] h-[300px] my-5" src={mainImage} alt="Main" />
            :
            <img
            className="w-[660px] h-[300px] my-5"
            src={image6}
            alt="Thumbnail"
          />
        }
        <div className="flex gap-3">
          <img
            className="cursor-pointer w-[100px] h-[100px]"
            src={image6}
            alt="Thumbnail"
            onClick={() => handleImageClick(image6)}
          />
          <img
            className="cursor-pointer w-[100px] h-[100px]"
            src={image1}
            alt="Thumbnail 1"
            onClick={() => handleImageClick(image1)}
          />
          <img
            className="cursor-pointer w-[100px] h-[100px]"
            src={image3}
            alt="Thumbnail 3"
            onClick={() => handleImageClick(image3)}
          />
          <img
            className="cursor-pointer w-[100px] h-[100px]"
            src={image4}
            alt="Thumbnail 4"
            onClick={() => handleImageClick(image4)}
          />
          <img
            className="cursor-pointer w-[100px] h-[100px]"
            src={image5}
            alt="Thumbnail 5"
            onClick={() => handleImageClick(image5)}
          />
          <img
            className="cursor-pointer w-[100px] h-[100px]"
            src={image8}
            alt="Thumbnail 8"
            onClick={() => handleImageClick(image8)}
          />
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
