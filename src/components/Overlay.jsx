import React from "react";

export default function Overlay({ onClose }) {
  return <div onClick={onClose} className="absolute inset-0 bg-black/20"></div>;
}
