function ClickArea({ position, index, handeMouseEnter, handeMouseLeave }) {
  return (
    <button
      onMouseEnter={() => handeMouseEnter(index)}
      onMouseLeave={handeMouseLeave}
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full size-10 hover:bg-sky-400/85 focus:outline-none"
      style={{ top: `${position.top}%`, left: `${position.left}%` }}
      aria-label={`Pozycja ${index + 1}`}
    />
  );
}

export default ClickArea;

// function ClickArea({ position, index, handeMouseEnter, handeMouseLeave }) {
//   const baseStyles = "absolute z-100 size-10 rounded-4xl hover:border-3";

//   return (
//     <>
//       {
//         <div
//           className={`${baseStyles} ${position}`}
//           onMouseEnter={() => {
//             handeMouseEnter(index);
//           }}
//           onMouseLeave={() => {
//             handeMouseLeave();
//           }}
//         ></div>
//       }
//     </>
//   );
// }

// export default ClickArea;
