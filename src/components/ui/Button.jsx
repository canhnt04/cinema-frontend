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
    secondary: "bg-gray-400 hover:bg-gray-500 text-white",
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
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
          Đang xử lý...
        </>
      ) : (
        children
      )}
    </button>
  );
}
