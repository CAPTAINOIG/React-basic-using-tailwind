import React from 'react';
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image8 from "../assets/image8.jpg";

const images = [
  { src: image1, name: 'Img 1' },
  { src: image3, name: 'Img 3' },
  { src: image4, name: 'Img 4' },
  { src: image5, name: 'Img 5' },
  { src: image6, name: 'Img 6' },
  { src: image8, name: 'Img 8' },
];

const ImageStack = () => {
  return (
    <div className="relative w-32 h-64">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute w-full justify-center items-center transition-transform duration-300"
          style={{ top: `${index * 15}px`, zIndex: index }}
        >
          <div className="group cursor-pointer relative w-16 h-16">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover rounded-full shadow-md group-hover:scale-110 transform transition-transform duration-300"
            />
            <div className="absolute inset-0 items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
              <span className="text-white text-sm">{image.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
