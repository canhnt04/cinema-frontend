import { Minus, Plus } from "lucide-react";
import BlurCircle from "../BlurCircle";
import { useBooking } from "../../context/BookingContext";
import { useEffect } from "react";

const data = [
  {
    ticket_id: 1,
    type: "HSSV-U22",
    price: 45000,
    quantity: 10,
  },
  {
    ticket_id: 2,
    type: "Người lớn",
    price: 90000,
    quantity: 10,
  },
  {
    ticket_id: 3,
    type: "Trẻ em",
    price: 60000,
    quantity: 10,
  },
];

const SelectTicket = () => {
  const { selectedTicket, setSelectedTicket } = useBooking();

  useEffect(() => {
    const getTicket = async () => {
      setSelectedTicket(data);
    };
    getTicket();
  }, [selectedTicket, setSelectedTicket]);

  const handleChangeTicket = (id, delta) => {
    setSelectedTicket((prev) => {
      return prev.map((ticket) =>
        ticket.ticket_id === id
          ? { ...ticket, quantity: ticket.quantity + delta }
          : ticket
      );
    });
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
              <p>{ticket.price.toLocaleString()}đ</p>
            </div>
            <div className="text-sm flex items-center gap-4 bg-gray-500 p-2 mx-4 my-4 rounded transition-all duration-500 hover:bg-yellow-300 hover:text-black">
              <Minus
                onClick={() => handleChangeTicket(ticket.ticket_id, -1)}
                className="w-4 h-4 hover:bg-primary hover:rounded-2xl hover:text-white transition-all duration-300 cursor-pointer"
              ></Minus>
              <p className="text-base">{ticket.quantity}</p>
              <Plus
                onClick={() => handleChangeTicket(ticket.ticket_id, 1)}
                className="w-4 h-4 hover:bg-primary hover:rounded-2xl hover:text-white transition-all duration-300 cursor-pointer"
              ></Plus>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTicket;
