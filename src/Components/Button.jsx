export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-800 text-stone-400 rounded-lg mt-5 px-4 py-2 cursor-pointer  hover:text-stone-300"
      {...props}
    >
      {children}
    </button>
  );
}
