import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../button/button";

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
    techs: [techs.next, techs.html],
  },
  {
    images: [require("../../assets/portfolio/WORK 2.png")],
  },
  {
    images: [require("../../assets/portfolio/WORK 3.png")],
  },
];

function Portfolio() {
  return (
    <div className="flex gap-6">
      {portfolio.map((work) => (
        <WorkCard {...work} />
      ))}
    </div>
  );
}

function WorkCard({ images, title, techs }) {
  return (
    <div className="p-6 text-left w-1/4 h-full shadow-sm bg-gray-200">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images[0]}
          objectFit="cover"
          // width="100%"
          layout="fill"
          // height="250px"
        />
      </div>
      <div>
        <h3>Furniture Store App</h3>
        <div className="flex pt-2 justify-between">
          <div className="flex gap-1"></div>
          <SecondaryButton>DEMO</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
