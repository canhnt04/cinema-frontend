import LoadingSpinner from "./LoadingSpinner";

export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "rounded-full font-semibold transition-colors duration-150 flex items-center justify-center cursor-pointer";
  const variants = {
    primary: "bg-primary hover:bg-primary-dull text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    outline: "border border-gray-400 hover:bg-gray-100 text-gray-900",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className} ${
        loading ? "opacity-60 cursor-not-allowed" : ""
      }`}
      {...props}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
}
