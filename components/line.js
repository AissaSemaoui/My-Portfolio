import { useEffect, useRef } from "react";

function Line({ tailwindRotation = "-rotate-2" }) {
  const lineRef = useRef(null);

  const fillLine = (e, index) => {
    console.log(index % 2 === 0);
    if (index % 2 === 0) {
      return "SEMAOUI AISSA";
    }
    return "WEB DEVELOPER";
  };

  useEffect(() => {
    const moveLine = () => {
      let limits = window.innerWidth;
      console.log(limits);
      let currentPosition = -limits;
      setInterval(() => {
        lineRef.current.style.left = `${currentPosition}px`;
        currentPosition += 1;
        if (currentPosition >= 0) {
          currentPosition = -limits;
        }
      }, 10);
    };
    moveLine();
    return clearInterval(() => {
      lineRef.current.style.left = `${currentPosition}px`;
      currentPosition += 1;
      if (currentPosition >= 0) {
        currentPosition = -limits;
      }
    });
  }, []);

  return (
    <div
      className={`absolute translate-y-1/2  -translate-x-1/2 bottom-0 left-1/2 w-[105vw] h-20  bg-blue text-white ${tailwindRotation}`}
    >
      <div
        className="line-wrapper h-full w-[200vw] whitespace-nowrap gap-8 flex justify-between items-center"
        ref={lineRef}
      >
        {Array.from({ length: 20 }, fillLine).map((content) => {
          return (
            <span className="font-semibold text-2xl text-white">{content}</span>
          );
        })}
      </div>
    </div>
  );
}

export default Line;
