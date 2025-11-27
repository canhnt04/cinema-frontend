import { useState } from "react";
import { showtimes } from "../../assets/mockData"; // giả sử có data suất chiếu
import { EyeIcon, SettingsIcon, Trash2Icon } from "lucide-react";
import Toolbar from "../../components/ui/Toolbar";
import AddShowModal from "./Modals/Shows/AddShowModal.jsx";
import EditShowModal from "./Modals/Shows/EditShowModal";
import DetailShowModal from "./Modals/Shows/DetailShowModal";
import FullPageSpinner from "../../components/ui/FullPageSpinner";
import BlurCircle from "../../components/BlurCircle.jsx";

const ListShows = () => {
  const [loading] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [viewShow, setViewShow] = useState(null);
  const [editShow, setEditShow] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => setSearchValue(value);

  const filteredShows = showtimes.filter(
    (show) =>
      show.showtime_id.toLowerCase().includes(searchValue.toLowerCase()) ||
      show.movie_id.toLowerCase().includes(searchValue.toLowerCase())
  );

  const infoHeaders = [
    { title: "STT" },
    { title: "Phim" },
    { title: "Phòng" },
    { title: "Giờ chiếu" },
    { title: "Ngày chiếu" },
    { title: "Giá vé" },
    { title: "Thao tác" },
  ];

  return !loading ? (
    <>
      <div className="relative w-full mt-6">
        <BlurCircle top="0" left="0" />
        <Toolbar
          onSearch={handleSearch}
          onAdd={() => setAddShow(true)}
          title="Thêm suất chiếu"
        />

        <table className="w-full border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              {infoHeaders.map((h) => (
                <th key={h.title} className="p-2 font-medium first:pl-10">
                  {h.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {filteredShows.map((show, index) => (
              <tr
                key={show.id}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 pl-10">{index + 1}</td>
                <td className="p-2">{show.movie_title}</td>
                <td className="p-2">{show.room_name}</td>
                <td className="p-2">{show.time}</td>
                <td className="p-2">
                  {/* {new Date(show.date).toLocaleDateString("vi-VN")} */}
                </td>
                <td className="p-2">{show.price.toLocaleString("vi-VN")}đ</td>
                <td className="p-2 flex gap-4">
                  <span
                    className="cursor-pointer active:scale-95"
                    onClick={() => setViewShow(show)}
                  >
                    <EyeIcon className="w-6 h-6" />
                  </span>
                  <span
                    className="cursor-pointer active:scale-95"
                    onClick={() => setEditShow(show)}
                  >
                    <SettingsIcon className="w-6 h-6" />
                  </span>
                  <span className="cursor-pointer active:scale-95 text-red-500">
                    <Trash2Icon className="w-6 h-6" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {addShow && <AddShowModal onClose={() => setAddShow(false)} />}
      {viewShow && (
        <DetailShowModal show={viewShow} onClose={() => setViewShow(null)} />
      )}
      {editShow && (
        <EditShowModal show={editShow} onClose={() => setEditShow(null)} />
      )}
    </>
  ) : (
    <FullPageSpinner />
  );
};

export default ListShows;
