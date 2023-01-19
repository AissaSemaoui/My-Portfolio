import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../button/button";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const techs = {
  next: require("../../assets/Techs/next.png"),
  css: require("../../assets/Techs/css.png"),
  html: require("../../assets/Techs/html.png"),
  react: require("../../assets/Techs/react.png"),
  sass: require("../../assets/Techs/sass.png"),
  javascript: require("../../assets/Techs/javascript.png"),
  tailwindcss: require("../../assets/Techs/tailwindcss.png"),
  firebase: require("../../assets/Techs/firebase.png"),
  webpack: require("../../assets/Techs/webpack.png"),
};

const portfolio = [
  {
    title: "FURNITURE STORE APP",
    images: [require("../../assets/portfolio/WORK 1.png")],
    techs: [techs.next, techs.html, techs.firebase],
  },
  {
    title: "FURNITURE STORE APP",
    images: [require("../../assets/portfolio/WORK 2.png")],
    techs: [techs.react, techs.javascript, techs.sass],
  },
  {
    title: "FURNITURE STORE APP",
    images: [require("../../assets/portfolio/WORK 2.png")],
    techs: [techs.react, techs.javascript, techs.sass],
  },
  {
    title: "FURNITURE STORE APP",
    images: [require("../../assets/portfolio/WORK 3.png")],
    techs: [techs.javascript, techs.html, techs.tailwindcss],
  },
];

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider className="flex gap-6" {...settings}>
      {portfolio.map((work) => (
        <WorkCard {...work} />
      ))}
    </Slider>
  );
}

function WorkCard({ images, title, techs }) {
  console.log(require("../../assets/Techs/next.png"));
  return (
    <div className="left-0 p-6 text-left w-[450px] min-h-full shadow-sm hover:shadow bg-gray-200 border border-blue-light/30 hover:border-blue-light cursor-pointer">
      <div className="relative h-72 overflow-hidden">
        <Image src={images[0]} objectFit="cover" layout="fill" />
      </div>
      <div>
        <h3 className="mt-2">Furniture Store App</h3>
        <div className="justify-between">
          <div className="flex gap-2 pt-2">
            {techs.map((icon) => (
              <span>
                <Image src={icon} height={30} width={30} />
              </span>
            ))}
          </div>
          <SecondaryButton className="min-w-full">DEMO</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
