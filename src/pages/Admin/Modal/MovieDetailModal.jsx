import { XIcon } from "lucide-react";
import Overlay from "../../../components/ui/Overlay";
import { timeFormatReleaseDate } from "../../../helper/timeFormat";

const MovieDetailModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const infoMovieDetails = [
    { title: "Tên phim", dataIndex: "title" },
    { title: "Thể loại", dataIndex: "genre" },
    { title: "Đạo diễn", dataIndex: "director" },
    { title: "Diễn viên", dataIndex: "cast" },
    {
      title: "Thời lượng",
      dataIndex: "duration",
      render: (time) => `${time} phút`,
    },
    { title: "Mô tả", dataIndex: "description" },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "release_date",
      render: (date) => `${timeFormatReleaseDate(date)}`,
    },
    {
      title: "Poster",
      dataIndex: "poster_url",
      render: (img) => <img src={img} className="w-12 rounded" />,
    },
  ];

  return (
    <Overlay onClose={onClose}>
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded-full cursor-pointer"
        >
          <XIcon className="w-5 h-5 text-gray-300" />
        </button>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2 text-primary text-center">
          THÔNG TIN CHI TIẾT PHIM
        </h2>
        <table className="w-full border-collapse">
          <tbody>
            {infoMovieDetails.map((info) => (
              <tr key={info.dataIndex} className="border-b border-gray-700">
                <td className="font-medium py-2 pr-4 text-gray-400 w-40">
                  {info.title}
                </td>
                <td className="py-2 text-wrap">
                  {info.render
                    ? info.render(movie[info.dataIndex])
                    : movie[info.dataIndex] || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Overlay>
  );
};

export default MovieDetailModal;
