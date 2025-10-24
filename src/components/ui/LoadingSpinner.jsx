const LoadingSpinner = ({ size = 40, color = "border-blue-500" }) => {
  return (
    <div
      className={`border-4 border-gray-300 ${color} border-t-transparent rounded-full animate-spin`}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
};

export default LoadingSpinner;
