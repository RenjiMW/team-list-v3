import { useWindowWidth } from "../hooks/useWindowWidth";

// Circle.jsx
function Circle({ positionNumber }) {
  const width = useWindowWidth();

  // te same wartości co w ClickArea – w %
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

  const pos =
    typeof positionNumber === "number" &&
    positionNumber >= 1 &&
    positionNumber <= positionsPercent.length
      ? positionsPercent[positionNumber - 1]
      : null;

  const base =
    // z-100 w Tailwind nie jest standardem; jeśli chcesz 100, użyj z-[100]
    "absolute z-[100] size-10 border-7 border-sky-400 rounded-4xl -translate-x-1/2 -translate-y-1/2";

  return pos ? (
    <div
      className={base}
      style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
      aria-hidden
    />
  ) : null;
}

export default Circle;

// function Circle({ positionNumber }) {
//   const position1 = "top-24 left-9";
//   const position2 = "top-24 left-23.5";
//   const position3 = "top-24 left-37.5";
//   const position4 = "top-38 left-16.5";
//   const position5 = "top-38 left-31";

//   const position6 = "top-44 left-5";
//   const position7 = "top-44 left-43.5";
//   const position8 = "top-49 left-24";
//   const position9 = "top-61 left-23.5";
//   const position10 = "top-65.5 left-33.5";

//   const position11 = "top-82.5 left-3.5";
//   const position12 = "top-71.5 left-43.5";
//   const position13 = "top-77 left-53";
//   const position14 = "top-82 left-65.5";
//   const position15 = "top-89 left-35.5";

//   let position;

//   switch (positionNumber) {
//     case 1:
//       position = position1;
//       break;

//     case 2:
//       position = position2;
//       break;

//     case 3:
//       position = position3;
//       break;

//     case 4:
//       position = position4;
//       break;

//     case 5:
//       position = position5;
//       break;

//     case 6:
//       position = position6;
//       break;

//     case 7:
//       position = position7;
//       break;

//     case 8:
//       position = position8;
//       break;

//     case 9:
//       position = position9;
//       break;

//     case 10:
//       position = position10;
//       break;

//     case 11:
//       position = position11;
//       break;

//     case 12:
//       position = position12;
//       break;
//     case 13:
//       position = position13;
//       break;

//     case 14:
//       position = position14;
//       break;

//     case 15:
//       position = position15;
//       break;
//   }

//   const baseStyles =
//     "absolute z-100 size-10 border-7 shadow-lg shadow-sky-100 border-sky-400 rounded-4xl";

//   return <>{position && <div className={`${baseStyles} ${position}`}></div>}</>;
// }
// export default Circle;
