import React from 'react';
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image8 from "../assets/image8.jpg";

const images = [
  { src: image1, name: 'Image 1' },
  { src: image3, name: 'Image 3' },
  { src: image4, name: 'Image 4' },
  { src: image5, name: 'Image 5' },
  { src: image6, name: 'Image 6' },
  { src: image8, name: 'Image 8' },
];

const ImageInset = () => {
  return (
    <div className="relative w-32">
      {images.map((image, index) => (
        <div key={index} className="group relative">
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-auto mb-2 rounded-md shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <span className="text-white text-sm">{image.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageInset;
