import Nav from "../components/Nav";
import Pitch from "../assets/imgs/positions.PNG";
import FieldList from "../components/FieldList";
import Circle from "../components/Circle";
import { useState } from "react";
import ClickArea from "../components/ClickArea";
import { useWindowWidth } from "../hooks/useWindowWidth";

const positionsPercent = [
  { top: 25, left: 18 },
  { top: 25, left: 36 },
  { top: 25, left: 53 },
  { top: 37, left: 27 },
  { top: 37, left: 45 },

  { top: 42, left: 12 },
  { top: 42, left: 61 },
  { top: 47, left: 36.5 },
  { top: 58, left: 36 },
  { top: 63, left: 48 },

  { top: 78, left: 11 },
  { top: 68, left: 61 },
  { top: 73, left: 73 },
  { top: 78, left: 89 },
  { top: 84, left: 51 },
];

// const positionsPercentSmall1 = [
//   { top: 27, left: 22 },
//   { top: 27, left: 37.5 },
//   { top: 27, left: 53 },
//   { top: 39, left: 30 },
//   { top: 39, left: 46 },

//   { top: 44, left: 18 },
//   { top: 44, left: 59.5 },
//   { top: 49, left: 38.5 },
//   { top: 59, left: 38 },
//   { top: 64, left: 49 },

//   { top: 79, left: 16.5 },
//   { top: 69, left: 59.5 },
//   { top: 74, left: 69.5 },
//   { top: 79, left: 83.5 },
//   { top: 84, left: 51 },
// ];

const positionsPercentSmall = [
  { top: 25, left: 18 },
  { top: 25, left: 36 },
  { top: 25, left: 53 },
  { top: 37, left: 27 },
  { top: 37, left: 45 },

  { top: 42, left: 12 },
  { top: 42, left: 61 },
  { top: 47, left: 36.5 },
  { top: 58, left: 36 },
  { top: 63, left: 48 },

  { top: 78, left: 11 },
  { top: 68, left: 61 },
  { top: 73, left: 73 },
  { top: 78, left: 89 },
  { top: 84, left: 51 },
];

function FiledDisplay() {
  const [positionNumber, setPositionNumber] = useState("");
  const [highlightPlayer, setHighlightPlayer] = useState("");
  const width = useWindowWidth();
  const normalScreen = width > 640;
  // const smallScreen = width > 340 && width <= 640;
  const smallScreen = width <= 640;

  const handleMouseEnterPlayerName = function (number) {
    setPositionNumber(number);
  };

  const handleMouseLeavePlayerName = function () {
    setPositionNumber("");
  };

  const handleMouseEnterOnCircle = function (index) {
    setHighlightPlayer(index + 1);
  };

  const handleMouseLeaveOnCircle = function () {
    setHighlightPlayer("");
  };

  return (
    <div className="min-h-screen w-full  bg-sky-950 text-sky-50">
      <div>
        <Nav />

        <div className="flex flex-col items-center pt-5">
          <h1 className="font-bold text-2xl">Field Display</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start  gap-3 md:gap-10">
          <div className="relative w-80 sm:w-auto flex flex-col items-center pt-5 ">
            <Circle
              positionNumber={positionNumber}
              onMouseEnter={handleMouseEnterOnCircle}
            />
            <img
              src={Pitch}
              alt="rugby pitch with players positions showed"
              className="mt-4 w-80 sm:w-[28rem] md:w-[34rem]"
            />

            {normalScreen &&
              positionsPercent.map((position, index) => (
                <ClickArea
                  position={position}
                  index={index}
                  key={index}
                  handeMouseEnter={handleMouseEnterOnCircle}
                  handeMouseLeave={handleMouseLeaveOnCircle}
                />
              ))}

            {smallScreen &&
              positionsPercentSmall.map((position, index) => (
                <ClickArea
                  position={position}
                  index={index}
                  key={index}
                  handeMouseEnter={handleMouseEnterOnCircle}
                  handeMouseLeave={handleMouseLeaveOnCircle}
                />
              ))}
          </div>

          <FieldList
            handleMouseEnter={handleMouseEnterPlayerName}
            handleMouseLeave={handleMouseLeavePlayerName}
            highlightPlayer={highlightPlayer}
          />
        </div>
      </div>
    </div>
  );
}

export default FiledDisplay;

/*
const positionsAreasSM = [
  "top-24 left-9",
  "top-24 left-23.5",
  "top-24 left-37.5",
  "top-38 left-16.5",
  "top-38 left-31",

  "top-44 left-5",
  "top-44 left-43.5",
  "top-49 left-24",
  "top-61 left-23.5",
  "top-65.5 left-33.5",

  "top-82.5 left-3.5",
  "top-71.5 left-43.5",
  "top-77 left-53",
  "top-82 left-65.5",
  "top-89 left-35.5",
];

const positionsAreas640 = [
  "top-24 left-46",
  "top-24 left-60.5",
  "top-24 left-74",
  "top-38 left-53.5",
  "top-38 left-68",

  "top-44 left-42",
  "top-44 left-80",
  "top-49 left-61",
  "top-61 left-60",
  "top-65.5 left-70",

  "top-82.5 left-41",
  "top-71.5 left-80",
  "top-77 left-90",
  "top-82 left-103",
  "top-89 left-72",
];
 */
