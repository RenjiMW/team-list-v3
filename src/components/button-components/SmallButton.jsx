function SmallButton({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border-2 border-teal-600 rounded-sm py-0.5 px-1 cursor-pointer bg-teal-600 hover:bg-teal-500"
      >
        {children}
      </button>
    </div>
  );
}

export default SmallButton;
