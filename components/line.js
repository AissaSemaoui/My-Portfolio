import { useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

function Line({ tailwindRotation = "-rotate-2", className, textClass }) {
  const lineRef = useRef(null);

  const fillLine = (e, index) => {
    console.log(index % 2 === 0);
    if (index % 2 === 0) {
      return "SEMAOUI AISSA";
    }
    return "WEB DEVELOPER";
  };

  useEffect(() => {
    const limits = window.innerWidth;
    let animationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    let currentPosition = -limits;
    const animate = () => {
      lineRef.current.style.left = `${currentPosition}px`;
      currentPosition += 1;
      if (currentPosition >= 0) {
        currentPosition = -limits;
      }
      if (animationFrame) {
        animationFrame(animate);
      } else {
        setTimeout(animate, 16);
      }
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      className={twMerge(
        "absolute z-10 translate-y-1/2 -translate-x-1/2 bottom-0 left-1/2 w-[100vw] h-14 md:h-16 lg:h-20 bg-blue text-white overflow-x-hidden",
        tailwindRotation,
        className
      )}
    >
      <div
        className="line-wrapper h-full w-[200vw] whitespace-nowrap gap-8 flex justify-between items-center"
        ref={lineRef}
      >
        {Array.from({ length: 20 }, fillLine).map((content, index) => {
          return (
            <span
              key={index}
              className={`font-semibold text-lg md:text-xl lg:text-2xl text-white ${textClass}`}
            >
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Line;
