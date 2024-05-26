import { useState } from "react";
import "./slider.scss";
const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex != null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="big_img" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt="arrow"
              onClick={() => changeSlide("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="big_image" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`small_img-${index}`}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
