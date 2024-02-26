import React from "react";
import './BlackSliderComponent.css'
const BalckSliderImages = [
    {
        imageUrl:"https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2FBlack%20Slider%2FCase%20study%201.png?alt=media&token=f53a590f-125a-4435-8e07-80383c1e8c43"

    },
    {
        imageUrl:"https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2FBlack%20Slider%2FCase%20study%203.png?alt=media&token=7e2c3eeb-76bd-4505-9ce8-22163ddf064e"
    },
    {
        imageUrl:"https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2FBlack%20Slider%2FCase%20study%202.png?alt=media&token=2bba2bc2-7f13-4b37-b07d-7fa2728effb1"
    }
]
const BlackSliderComponent = () => {
  return <div className="BlackSliderContainer">
  <h2 className="BlackSliderContainerHeading">Our previous experience.</h2>
  <div className="BlackSliderImagesContainer">
  {BalckSliderImages.map((image, index) => (
    <div key={index} className={`BlackSliderImageDiv ${index === 1 ? 'secondImage' : 'otherImages'}`}>
      <img src={image.imageUrl} alt={`Case Study ${index + 1}`} className="BlackSliderImage" />
    </div>
  ))}
  </div>
  </div>;
};

export default BlackSliderComponent;
