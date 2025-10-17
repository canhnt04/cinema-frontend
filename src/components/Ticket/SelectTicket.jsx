import { Minus, Plus } from "lucide-react";
import BlurCircle from "../BlurCircle";
import { useEffect } from "react";
import { useBooking } from "./../../hooks/useBooking";
import { showToast } from "../../helper/cooldownToast";

const data = [
  {
    ticket_id: 1,
    type: "HSSV-U22",
    price: 45000,
    quantity: 0,
  },
  {
    ticket_id: 2,
    type: "Người lớn",
    price: 90000,
    quantity: 0,
  },
  {
    ticket_id: 3,
    type: "Trẻ em",
    price: 60000,
    quantity: 0,
  },
];

const SelectTicket = () => {
  const { selectedShowtime, selectedTicket, setSelectedTicket } = useBooking();
  const currency = import.meta.env.VITE_CURRENCY;
  useEffect(() => {
    setSelectedTicket(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeTicket = (id, delta) => {
    if (!selectedShowtime) {
      showToast("Vui lòng chọn khung giờ chiếu trước khi chọn vé");
      return;
    }
    const list = selectedTicket ?? data;
    const ticket = list.find((t) => t.ticket_id === id);
    if (!ticket) return;

    const newQuantity = Math.max(0, ticket.quantity + delta);
    if (newQuantity > 5) {
      showToast(`Loại vé ${ticket.type.toLowerCase()} được đặt tối đa 5 vé`);
      return;
    }

    setSelectedTicket(
      list.map((t) =>
        t.ticket_id === id ? { ...t, quantity: newQuantity } : t
      )
    );
  };

  return (
    <div className="relative">
      <BlurCircle right="40%" top="-30%" />
      <h1 className="uppercase text-3xl font-semibold text-center mt-16 md:mt-40">
        Chọn loại vé
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-6">
        {selectedTicket?.map((ticket) => (
          <div
            key={ticket.ticket_id}
            className="mt-4 md:mt-8 flex items-center w-full justify-between
           border border-gray-400 rounded overflow-hidden"
          >
            <div className="text-sm p-4 flex flex-col gap-2">
              <p>{ticket.type}</p>
              <p>
                {ticket.price.toLocaleString()} {currency}
              </p>
            </div>
            <div className="text-sm flex items-center gap-4 bg-gray-500 p-2 mx-4 my-4 rounded transition-all duration-500 hover:bg-yellow-300 hover:text-black">
              <button
                type="button"
                onClick={() => handleChangeTicket(ticket.ticket_id, -1)}
                className=" hover:bg-primary hover:rounded-2xl hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <p className="text-base">{ticket.quantity}</p>
              <button
                type="button"
                onClick={() => handleChangeTicket(ticket.ticket_id, 1)}
                className=" hover:bg-primary hover:rounded-2xl hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTicket;
