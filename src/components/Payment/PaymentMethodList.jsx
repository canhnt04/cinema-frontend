import { useEffect, useState } from "react";
import momo from "../../assets/momo.png";
import vnpay from "../../assets/vnpay.png";
import { Check } from "lucide-react";

const methods = [
  {
    id: "momo",
    name: "Thanh toán qua Momo",
    img: momo,
    isChoose: 1,
  },
  { id: "vnpay", name: "Thanh toán qua VNPay", img: vnpay, isChoose: 2 },
];

const PaymentMethodList = () => {
  const [choose, setChoose] = useState(0);
  useEffect(() => {}, [choose]);
  return (
    <div className="flex flex-col gap-4">
      {methods.map((m) => (
        <div
          key={m.id}
          onClick={() => setChoose(m.isChoose)}
          className={`w-[95%] p-4 md:p-6 border-2 border-primary/50 rounded-lg shadow-xl cursor-pointer transition hover:bg-gray-700 ${
            choose == m.isChoose ? "bg-gray-700" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Placeholder cho Logo Momo */}
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center mr-4">
                <img src={m.img} alt="" className="w-full h-full" />
              </div>

              {/* Text */}
              <span className="text-lg font-semibold text-gray-200">
                {m.name}
              </span>
            </div>
            {choose == m.isChoose ? (
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check size={16} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodList;
