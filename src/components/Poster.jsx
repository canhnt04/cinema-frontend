import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Poster() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.1)),url("assets/poster.jpg")] bg-cover h-screen`}
      >
        <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
          Money Heist
        </h1>
        <div className="flex items-center gap-4 text-gray-300">
          <span>Hành động | Thám hiểm</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4.5 h-4.5" /> 2025
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4.5 h-4.5" /> 120 phút
          </div>
        </div>
        <p className="max-w-md text-gray-300">
          Tám tên cướp khống chế các con tin trong Xưởng in tiền Hoàng gia Tây
          Ban Nha trong khi kẻ chủ mưu thao túng cảnh sát để thực hiện kế hoạch
          của hắn.
        </p>
        <button
          className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull
        transition rounded-full font-medium cursor-pointer"
          onClick={() => navigate("/movies")}
        >
          Khám phá ngay
          <ArrowRight className="w-5 h-5 hover:translate-x-0.5" />
        </button>
      </div>
    </>
  );
}
