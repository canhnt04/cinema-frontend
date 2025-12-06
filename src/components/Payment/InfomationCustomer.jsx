import { useState } from "react";

const InfomationCustomer = ({ onChangeInfo, user }) => {
  const [name, setName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const updateInfo = (field, value) => {
    const newInfo = {
      name: name,
      email: email,
      phone: phone,
      [field]: value,
    };
    onChangeInfo(newInfo); // gửi data lên cha
  };
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <span className="text-sm font-normal">Họ và tên</span>
          <span className="text-sm font-normal text-red-500">*</span>
        </div>
        <input
          onChange={(e) => {
            setName(e.target.value);
            updateInfo("name", e.target.value);
          }}
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
          onChange={(e) => {
            setPhone(e.target.value);
            updateInfo("phone", e.target.value);
          }}
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
          onChange={(e) => {
            setEmail(e.target.value);
            updateInfo("email", e.target.value);
          }}
          value={email}
          type="email"
          className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
        />
      </div>
    </form>
  );
};

export default InfomationCustomer;
