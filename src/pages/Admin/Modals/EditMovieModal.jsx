import { XIcon } from "lucide-react";
import Overlay from "../../../components/ui/Overlay";
import { useState } from "react";

const EditMovieModal = ({ movie, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: movie.title,
    genre: movie.genre,
    director: movie.director,
    cast: movie.cast,
    duration: movie.duration,
    description: movie.description,
    release_date: movie.release_date,
    poster_url: movie.poster_url,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave({ ...movie, ...formData });
    onClose();
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded-full cursor-pointer"
        >
          <XIcon className="w-5 h-5 text-gray-300" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-primary text-center">
          THAY ĐỔI THÔNG TIN PHIM
        </h2>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm">Tên phim</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Thể loại</label>
            <input
              type="text"
              value={formData.genre}
              onChange={(e) => handleChange("genre", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Đạo diễn</label>
            <input
              type="text"
              value={formData.director}
              onChange={(e) => handleChange("director", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Diễn viên</label>
            <input
              type="text"
              value={formData.cast}
              onChange={(e) => handleChange("cast", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Thời lượng (phút)</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">
              Ngày khởi chiếu (dd/mm/yyyy)
            </label>
            <input
              type="date"
              value={formData.release_date}
              onChange={(e) => handleChange("release_date", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Poster</label>
            <input
              type="text"
              value={formData.poster_url}
              onChange={(e) => handleChange("poster_url", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
            {formData.poster_url && (
              <img
                src={formData.poster_url}
                alt="poster"
                className="w-32 mt-2 rounded"
              />
            )}
          </div>
        </div>
        <div className="mt-4">
          <label className="text-gray-400 text-sm">Mô tả</label>
          <textarea
            type="text"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            rows="3"
          />
        </div>
      </div>
    </Overlay>
  );
};

export default EditMovieModal;
