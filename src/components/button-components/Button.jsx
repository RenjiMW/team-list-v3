function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border-2 border-teal-600 rounded-sm py-1 px-3 cursor-pointer bg-teal-600 hover:bg-teal-500"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
