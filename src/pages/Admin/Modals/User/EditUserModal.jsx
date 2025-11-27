import { useEffect, useState } from "react";
import Overlay from "./../../../../components/ui/Overlay";
import { XIcon } from "lucide-react";
import Button from "../../../../components/ui/Button";

const EditUserModal = ({ isOpen, onClose, user, onUpdateUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  // Khi mở modal → fill dữ liệu user
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        role: user.role || "user",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // Validate
    if (formData.password && formData.password !== formData.confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp");
      return;
    }

    // Fake API + demo:
    // setLoading(true);
    // try {
    //   const response = await fetch(`/api/users/${user.id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     const updatedUser = await response.json();
    //     onUpdateUser(updatedUser);
    //     toast.success("Cập nhật thành công!");
    //     onClose();
    //   } else {
    //     toast.error("Cập nhật thất bại");
    //   }
    // } catch (e) {
    //   toast.error("Lỗi khi cập nhật");
    // } finally {
    //   setLoading(false);
    // }
  };

  if (!isOpen || !user) return null;

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
          CHỈNH SỬA NGƯỜI DÙNG
        </h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Name */}
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
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
            />
          </div>

          {/* Change Password (OPTIONAL) */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Mật khẩu mới (không bắt buộc)
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
              placeholder="Để trống nếu không đổi mật khẩu"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 font-medium mb-1">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded focus:border-primary transition outline-none"
            />
          </div>

          {/* Role */}
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

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="px-4 py-2 !rounded"
            >
              {loading ? "Đang lưu..." : "Lưu thay đổi"}
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

export default EditUserModal;
