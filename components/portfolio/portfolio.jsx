import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../button/button";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const techs = {
  next: "/content/techs/next.png",
  css: "/content/techs/css.png",
  html: "/content/techs/html.png",
  react: "/content/techs/react.png",
  sass: "/content/techs/sass.png",
  javascript: "/content/techs/javascript.png",
  tailwindcss: "/content/techs/tailwindcss.png",
  firebase: "/content/techs/firebase.png",
  webpack: "/content/techs/webpack.png",
};

const portfolio = [
  {
    title: "Furniture Store App",
    images: ["/content/portfolio/WORK 1.png"],
    techs: [techs.next, techs.html, techs.firebase],
  },
  {
    title: "Furniture Store App",
    images: ["/content/portfolio/WORK 1.png"],
    techs: [techs.react, techs.javascript, techs.sass],
  },
  {
    title: "Furniture Store App",
    images: ["/content/portfolio/WORK 2.png"],
    techs: [techs.react, techs.javascript, techs.sass],
  },
  {
    title: "Furniture Store App",
    images: ["/content/portfolio/WORK 3.png"],
    techs: [techs.javascript, techs.html, techs.tailwindcss],
  },
  {
    title: "Furniture Store App",
    images: ["/content/portfolio/WORK 2.png"],
    techs: [techs.javascript, techs.html, techs.tailwindcss],
  },
];

function Portfolio({ setShowProjectModal }) {
  const settings_3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="flex gap-6" draggable {...settings_3}>
      {portfolio.map((work, index) => (
        <WorkCard
          key={index}
          product={work}
          setShowProjectModal={setShowProjectModal}
        />
      ))}
    </Slider>
  );
}

function WorkCard({ product, setShowProjectModal }) {
  const { title, images, techs } = product;

  const handleOpen = () => setShowProjectModal({ state: true, data: product });

  return (
    <div className="left-0 p-2 lg:p-4 text-left w-[330px] max-w-[95%] h-full border-blue-light/20 hover:border-blue-light/50 bg-gray-100 border cursor-pointer">
      <div className="relative h-40 overflow-hidden">
        <Image src={images[0]} objectFit="cover" layout="fill" alt={title} />
      </div>
      <div>
        <h3 className="mt-2 max-md:leading-none max-md:py-1">{title}</h3>
        <div className="justify-between">
          <div className="flex gap-2 pt-2">
            {techs.map((icon) => (
              <span key={icon}>
                <Image
                  src={icon}
                  height={30}
                  width={30}
                  alt="Used technologies"
                />
              </span>
            ))}
          </div>
          <SecondaryButton className="min-w-full py-2" onClick={handleOpen}>
            Demo
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
