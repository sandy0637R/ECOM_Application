import React, { useEffect, useState } from 'react';
import './ImageSlider.css'; // Ensure you have the CSS styles in this file

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: 'https://via.placeholder.com/300x150/33FF57/FFFFFF?text=Product+1', alt: 'Image 1', caption: 'Caption Text 1' },
    { src: 'https://via.placeholder.com/300x150/33FF57/FFFFFF?text=Product+2', alt: 'Image 2', caption: 'Caption Text 2' },
    { src: 'https://via.placeholder.com/300x150/3357FF/FFFFFF?text=Product+3', alt: 'Image 3', caption: 'Caption Text 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const showSlides = (n) => {
    setSlideIndex(n);
  };

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div className={`mySlides fade ${index === slideIndex ? 'active' : ''}`} key={index}>
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={image.src} alt={image.alt} className="slide-image" />
          <div className="text">{image.caption}</div>
        </div>
      ))}

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span className="dot" key={index} onClick={() => showSlides(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
