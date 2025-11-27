import { useState } from "react";
import Overlay from "./../../../../components/ui/Overlay";
import { XIcon } from "lucide-react";
import Button from "../../../../components/ui/Button";

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // if (!formData.name || !formData.email || !formData.password) {
    //   toast.error("Please fill in all required fields");
    //   return;
    // }
    // setLoading(true);
    // try {
    //   const response = await fetch("/api/users", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     const newUser = await response.json();
    //     onAddUser(newUser);
    //     showToast("User added successfully");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       password: "",
    //       role: "user",
    //     });
    //     onClose();
    //   } else {
    //     toast.error("Failed to add user");
    //   }
    // } catch (error) {
    //   toast.error("Error adding user");
    // } finally {
    //   setLoading(false);
    // }
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <div className="relative bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full min-w-[460px] max-w-4xl mx-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded-full cursor-pointer"
        >
          <XIcon className="w-5 h-5 text-gray-300" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-primary text-center">
          THÊM NGƯỜI DÙNG MỚI
        </h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Họ và tên *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
              placeholder="Nhập họ và tên"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition transition outline-none"
              placeholder="Nhập email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition transition outline-none"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Mật khẩu *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Xác nhận mật khẩu *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>

          <div className="mb-4 cursor-pointer">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Vai trò *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="px-4 py-2 !rounded"
            >
              {loading ? "Đang thêm..." : "Thêm người dùng"}
            </Button>
            <Button
              variant="secondary"
              onClick={onClose}
              className="px-4 py-2 !rounded"
            >
              Đóng
            </Button>
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default AddUserModal;
