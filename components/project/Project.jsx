import Image from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";

// Import icons
import { IoCloseSharp } from "react-icons/io5";

function Project({ showProjectModal, setShowProjectModal }) {
  const { title, images, techs } = showProjectModal.data;
  const handleClose = () =>
    setShowProjectModal({
      state: false,
      data: {
        title: "",
        images: [],
        techs: [],
      },
    });

  useEffect(() => {
    document.body.style.overflow = showProjectModal.state ? "hidden" : "auto";
  }, [showProjectModal]);

  return (
    <div
      className={`h-[90vh] fixed overflow-hidden bottom-0 left-0 right-0 z-20 rounded-t-3xl shadow-2xl bg-slate-100 border-t border-gray-200 transition-all ease-in-out duration-300 ${
        showProjectModal.state
          ? "opacity-100 -traslate-y-0"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="relative w-full h-full overflow-y-scroll">
        <div className="absolute top-3 right-4 z-30 translate-y-1/2 -translate-x-1/2 hover:text-white text-lg">
          <button
            className="bg-slate-50 hover:bg-white rounded-md"
            onClick={handleClose}
          >
            <IoCloseSharp className="" size={24} />
          </button>
        </div>
        <div className="relative w-full h-1/3 overflow-hidden shadow">
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-light to-blue-dark transition ease-in-out duration-300"></div>
          <img
            className="h-full w-full object-cover opacity-75 transition-transform duration-300 ease-in-out hover:scale-125"
            src={images[0]}
            alt="cover"
            loading="lazy"
          />
          {/* <p className="absolute bottom-0 left-0 p-4 text-white text-sm font-medium">
            Image caption goes here
          </p> */}
        </div>

        <div className="h-full px-4 lg:px-10 py-4 lg:py-8">
          <div>
            <h2>{title}</h2>
            <p className="text-base text-blue">
              Developed by me, designed by dribble designer{" "}
              <span className="text-blue-light">19 dec 2023</span>
            </p>
            <div className="flex gap-2 p-1 mt-2 bg-white shadow-sm rounded-md w-max h-max">
              {techs.map((technology) => {
                return (
                  <img
                    key={technology}
                    src={technology}
                    alt="technology"
                    loading="lazy"
                    className="w-8 md:w-10"
                  />
                );
              })}
            </div>
            <p className="pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              nulla impedit deserunt consequatur quisquam, maiores ab harum
              neque atque pariatur facilis sunt hic corporis, voluptatem magnam.
              Quam a velit quas?
            </p>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

//* --------------------------------- Slider --------------------------------- */

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = useRef();

  const images = [
    "/content/images/techno1.png",
    "/content/images/techno (2).png",
    "/content/images/techno (3).png",
  ];

  const handlePrevious = useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }, [images.length, setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }, [images.length, setCurrentIndex]);

  useEffect(() => {
    intervalId.current = setInterval(() => handleNext(), 3000);
    return () => clearInterval(intervalId.current);
  }, []);

  const handleClick = useCallback(
    (state) => {
      // Clear the interval
      clearInterval(intervalId.current);
      // If the state is next, go to the next slide, otherwise go to the previous slide
      state === "next" ? handleNext() : handlePrevious();
      // Set the interval again
      intervalId.current = setInterval(() => handleNext(), 3000);
    },
    [handleNext, handlePrevious]
  );

  return (
    <div className="relative h-1/3 md:h-2/3 w-full overflow-hidden bg-gray-800 border border-slate-300 shadow-sm my-4">
      <div className="relative h-full">
        <div
          className="absolute flex h-full w-max transition-all duration-500 ease-in-out"
          style={{
            left: `-${currentIndex * 100}%`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-full bg-slate-200 w-full">
              <div className="w-full h-full overflow-y-scroll">
                <div className="h-full">
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="w-full h-full"
                    alt="Project overview"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p>{currentIndex}</p>
      </div>
      <div className="text-white absolute top-1/2 -translate-y-1/2 w-full flex justify-between p-2">
        <button
          className="bg-gray-600 p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => handleClick("prev")}
        >
          &larr;
        </button>
        <button
          className="bg-gray-600 p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={() => handleClick("next")}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Project;
