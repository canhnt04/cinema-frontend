import { useState } from "react";

const InfomationCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <span className="text-sm font-normal">Họ và tên</span>
          <span className="text-sm font-normal text-red-500">*</span>
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <span className="text-sm font-normal">Số điện thoại</span>
          <span className="text-sm font-normal text-red-500">*</span>
        </div>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
          className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <span className="text-sm font-normal">Email</span>
          <span className="text-sm font-normal text-red-500">*</span>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
        />
      </div>
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          className="w-4 h-4 accent-primary cursor-pointer"
        />
        <span>Đồng ý với điều khoản của BCP Cinema.</span>
      </div>
    </form>
  );
};

export default InfomationCustomer;
