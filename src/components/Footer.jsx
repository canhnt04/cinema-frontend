import { MailIcon, PhoneIcon } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-36 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/50 pb-6">
        <div className="md:max-w-96">
          <div className="flex items-center gap-2 select-none">
            <img src={assets.logo} alt="" className="w-12 h-12 rounded-full" />
            <p className="text-2xl font-bold text-white/70">Cinema</p>
          </div>
          <p className="mt-4 text-sm">
            Đây là nền tảng đặt vé xem phim trực tuyến nhanh chóng, tiện lợi,
            giúp bạn dễ dàng lựa chọn xuất chiếu và chỗ ngồi yêu thích chỉ với
            vài thao tác.
          </p>
        </div>

        <div className="flex flex-1 items-start  md:justify-end gap-40">
          <div>
            <h2 className="font-semibold mb-5 text-white/60 text-lg">
              Thông tin
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="">Trang chủ</a>
              </li>
              <li>
                <a href="">Giới thiệu</a>
              </li>
              <li>
                <a href="">Chính sách</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-white/60 text-lg">
              Liên hệ
            </h2>
            <div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4.5 h-4.5" />
                <p>0123456789</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <MailIcon className="w-4.5 h-4.5" />
                <p>teamBCP@gmail.com</p>
              </div>
              {/* <div className="flex items-center gap-2 mt-2">
                <MapPinIcon className="w-4.5 h-4.5 flex-shrink-0" />
                <p>
                  273 An Dương Vương, Phường Chợ Quán, Quận 5, TP. Hồ Chí Minh.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5 select-none">
        Copyright 2025 © TeamBCP. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
