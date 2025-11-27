import { XIcon } from "lucide-react";
import Overlay from "../../../../components/ui/Overlay";
import { useRef, useState } from "react";
import Button from "../../../../components/ui/Button";

const AddMovieModal = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    cast: "",
    duration: "",
    description: "",
    release_date: "",
    poster_url: "",
  });
  const descriptionRef = useRef(null);

  const handleDescriptionChange = (e) => {
    setFormData((prev) => ({ ...prev, description: e.target.value }));
    descriptionRef.current.style.height = "auto";
    descriptionRef.current.style.height =
      descriptionRef.current.scrollHeight + "px";
  };

  const handleDescriptionBlur = () => {
    descriptionRef.current.style.height = "";
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, poster_url: previewUrl }));

    // Upload lên Cloudinary
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "cinema-web");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvthcg6hz/image/upload",
      { method: "POST", body: data }
    );
    const fileData = await res.json();
    setFormData((prev) => ({ ...prev, poster_url: fileData.secure_url }));
  };

  const handleAdd = () => {
    onAdd(formData); // truyền dữ liệu mới lên component cha
    onClose(); // đóng modal
  };

  return (
    <Overlay>
      <div className="relative bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded-full cursor-pointer"
        >
          <XIcon className="w-5 h-5 text-gray-300" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-primary text-center">
          THÊM PHIM MỚI
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
            <label className="text-gray-400 text-sm">Ngày khởi chiếu</label>
            <input
              type="date"
              value={formData.release_date}
              onChange={(e) => handleChange("release_date", e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm mr-2">Poster</label>
            {formData.poster_url && (
              <img
                src={formData.poster_url}
                alt="poster"
                className="w-32 mt-2 rounded"
              />
            )}
            <input
              id="fileInputAdd"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="fileInputAdd"
              className="inline-block w-32 px-4 py-1.5 text-center bg-gray-300 hover:bg-gray-400 text-black rounded cursor-pointer active:scale-95 transition mt-2"
            >
              Chọn ảnh
            </label>
          </div>
          <div>
            <label className="text-gray-400 text-sm">Mô tả</label>
            <textarea
              ref={descriptionRef}
              value={formData.description}
              onChange={handleDescriptionChange}
              onBlur={handleDescriptionBlur}
              className="w-full p-2 rounded bg-gray-800 text-white mt-1 border border-gray-700 focus:border-primary transition outline-none"
              rows="1"
            />
          </div>

          <div className="flex justify-end gap-4 mt-2 col-span-2">
            <Button
              variant="primary"
              onClick={handleAdd}
              className="px-4 py-2 !rounded"
            >
              Thêm phim
            </Button>
            <Button
              variant="secondary"
              onClick={onClose}
              className="px-4 py-2 !rounded"
            >
              Đóng
            </Button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default AddMovieModal;
