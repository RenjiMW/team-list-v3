function ClickArea({ position, index, handeMouseEnter, handeMouseLeave }) {
  const baseStyles = "absolute z-100 size-10 rounded-4xl hover:border-3";

  return (
    <>
      {
        <div
          className={`${baseStyles} ${position}`}
          onMouseEnter={() => {
            handeMouseEnter(index);
          }}
          onMouseLeave={() => {
            handeMouseLeave();
          }}
        ></div>
      }
    </>
  );
}

export default ClickArea;
