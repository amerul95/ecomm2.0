import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './popular.css'



export const PopularProduct = () => {

  const images = [
    './images/image1.png',
    './images/image2.png',
    './images/image3.png',
    './images/image4.png',
    './images/image5.jpg',
    './images/image6.png',
    './images/image7.png',
    './images/image8.jpeg',
    './images/image9.jpeg',
    './images/image10.png',
    './images/image11.jpg',
    './images/image12.jpg',
    './images/image13.jpg',
    './images/image14.png',
    './images/image15.jpg'
  ];
  
  return (
    <div className='max-w-7xl px-2 mx-auto sm:px-6 lg:px-8 m-2 flex my-4 md:my-8 flex-col'>
      <div className=' '>
        <h2 className='text-3xl font-semibold'>POPULAR PRODUCTS <hr className='custom-hr'/></h2>
    </div>
    <div>
      <SimpleSlider images={images}/>
    </div>
    </div>

  )
}

function SimpleSlider({images}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="mx-auto text-center my-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Popular Product ${index + 1}`} className="mx-auto max-w-56" />
          </div>
        ))}
      </Slider>
      <hr />
      <div class="container mx-auto mt-10 flex gap-4 justify-center">
      <div class="grid grid-rows-2 grid-flow-row gap-4 w-1/2">
  <div class="row-span-1 col-span-2  shadow-lg rounded">
    <img src="./images/Mask Group 6.png" alt="" />
  </div>
  <div class="row-span-1 col-span-1 shadow-lg rounded ">
    <img src="./images/mask Group 7.png" alt="" />
  </div>
  <div class="row-span-1 col-span-1 shadow-lg rounded ">
    <img src="./images/Image 30.png" alt="" />
  </div>
</div>
<div class="grid grid-rows-2 grid-flow-row gap-4 w-1/2">
  <div class="row-span-1 col-span-1 shadow-lg rounded relative">
    <img className='absolute' src="./images/Mask Group 5.png" alt="" />

  </div>
  <div class="row-span-1 col-span-1 shadow-lg rounded">
    <img src="./images/Image 29.png" alt="" />
  </div>
  <div class="row-span-1 col-span-2 shadow-lg rounded ">
    <img src="./images/Group 658.png" alt="" />
  </div>
</div>

</div>

    </div>
  );
}