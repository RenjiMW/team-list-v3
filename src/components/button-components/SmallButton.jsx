function SmallButton({ children, onClick, className = "" }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`border-2 border-teal-600 rounded-sm py-0.5 px-1 cursor-pointer bg-teal-600 hover:bg-teal-500 ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default SmallButton;
