import Nav from "../components/Nav";
import Pitch from "../assets/imgs/positions.PNG";
import FieldList from "../components/FieldList";
import Circle from "../components/Circle";
import { useState } from "react";
import ClickArea from "../components/ClickArea";

const positionsAreas = [
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

function FiledDisplay() {
  const [positionNumber, setPositionNumber] = useState("");
  const [highlightPlayer, setHighlightPlayer] = useState("");

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
          {/* <h3 className="mt-5">🚧 This page is under construction 🚧</h3>
          <p className="mt-10 w-xl">
            This page will allow you to display the players in your starting
            lineup in a classic rugby layout, showing their positions on the
            pitch.
          </p>
          <p className="mt-8 text-center">
            This is just a preview 🧐, <br /> but don't worry, it will get much
            better 😎
          </p> */}
        </div>

        <div className="flex justify-center gap-10">
          <div className="relative flex flex-col items-center pt-5 ">
            <Circle
              positionNumber={positionNumber}
              onMouseEnter={handleMouseEnterOnCircle}
            />
            <img
              src={Pitch}
              alt="rugby pitch with players positions showed"
              className="mt-4 w-80"
            />
            {positionsAreas.map((position, index) => (
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
        {/* <h3 className="mt-10 text-center">
          🚧 This page is under construction 🚧
        </h3> */}
      </div>
    </div>
  );
}

export default FiledDisplay;
