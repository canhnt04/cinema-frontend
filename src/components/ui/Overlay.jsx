const Overlay = ({ children, onClose, className = "" }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 ${className}`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Overlay;
