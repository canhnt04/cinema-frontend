import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import FullPageSpinner from "../components/ui/FullPageSpinner";
import BlurCircle from "../components/BlurCircle";
import { assets } from "../assets/assets";
import Button from "../components/ui/Button";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return !loading ? (
    <div className="relative pt-30 px-6 md:px-16 lg:px-24 xl:px-44 select-none">
      <BlurCircle top="50px" left="0px" />
      <h2 className="text-2xl font-semibold mb-4">THÔNG TIN CÁ NHÂN</h2>
      <div className="flex items-center bg-primary/8 border border-primary/20 rounded-lg mt-4 p-6 w-full max-w-3xl">
        <div className="flex flex-col items-center border-r border-gray-400 pr-6 mr-6">
          <img
            src={user.avatar || assets.avatar}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <input type="file" id="avatar" className="hidden" />
          <label
            htmlFor="avatar"
            className="cursor-pointer text-sm underline mt-2 px-4 py-2"
          >
            Thay đổi ảnh đại diện
          </label>
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-lg font-semibold text-balance mb-2">
            Họ và tên: {user.name}
          </p>
          <p className="text-lg font-semibold text-balance mb-2">
            Email: {user.email}
          </p>
          <p className="text-lg font-semibold text-balance mb-2">
            Số điện thoại: {user.phone || "Chưa cập nhật"}
          </p>
          <Button
            variant="primary"
            className="px-12 py-1.5 active:scale-95 mt-4 w-max"
          >
            Cập nhật thông tin
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <FullPageSpinner />
  );
};

export default Profile;
