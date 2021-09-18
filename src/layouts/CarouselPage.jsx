import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../components/CarouselItem";

const CarouselPage = () => {
  //places the data of the different carousel pages as an object in an array as they are easier to map.
  const therapistData = [
    {
      heading: "Your Therapist",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: "https://snipboard.io/1ENWKt.jpg",
    },
    {
      heading: "Your Therapist",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: "https://snipboard.io/1gF5ma.jpg",
    },
    {
      heading: "Your Therapist",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: "https://snipboard.io/gTrIAX.jpg",
    },
  ];
  //pass nav and prev buttons manually, making prev not visble and styling next to the bottom center of page, also add a loader around the buttons.
  return (
    <Carousel
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "black",
          height: "74px",
          width: "74px",
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      className="pt-4 px-4"
      // PrevIcon={null}
    >
      {therapistData.map((i, indx) => (
        <CarouselItem
          key={indx}
          heading={i.heading}
          text={i.text}
          image={i.image}
        />
      ))}
    </Carousel>
  );
};

export default CarouselPage;
