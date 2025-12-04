export const formatCurrency = (amount) => {
  // Chuyển đổi đầu vào thành số (nếu là chuỗi) và đảm bảo đó là một số hợp lệ
  const number = Number(amount);

  if (isNaN(number)) {
    // Trả về chuỗi rỗng hoặc một thông báo lỗi nếu đầu vào không hợp lệ
    return "0";
  }

  // Sử dụng Intl.NumberFormat để định dạng số theo chuẩn locale của Việt Nam
  // 'vi-VN' sử dụng dấu chấm (.) làm dấu phân cách hàng nghìn,
  // nhưng nếu muốn dùng dấu phẩy (,) như yêu cầu, ta cần thay đổi tùy chọn locale

  // Cách 1: Sử dụng locale US ('en-US') để đảm bảo dùng dấu phẩy, sau đó loại bỏ phần thập phân
  // Tuy nhiên, để đảm bảo code sạch và dễ đọc, ta dùng cách tự định dạng hoặc RegExp:

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatShortScale = (amount, decimals = 1) => {
  const number = Number(amount);

  if (isNaN(number) || number === 0) {
    return "0";
  }

  // Khai báo các đơn vị rút gọn
  const abbreviations = [
    { value: 1e12, symbol: "T" }, // Tỷ (Trillion)
    { value: 1e9, symbol: "B" }, // Tỷ (Billion)
    { value: 1e6, symbol: "M" }, // Triệu (Million)
    { value: 1e3, symbol: "k" }, // Nghìn (Kilo)
  ];

  // Tìm đơn vị lớn nhất phù hợp
  const abbreviation = abbreviations.find((abbr) => number >= abbr.value);

  if (abbreviation) {
    // Tính giá trị sau khi chia và làm tròn
    const calculatedValue = number / abbreviation.value;

    // Làm tròn số thập phân. toFixed trả về chuỗi.
    const fixedValue = calculatedValue.toFixed(decimals);

    // Loại bỏ các số 0 thừa ở cuối (ví dụ: 1.0k -> 1k)
    const formattedValue = fixedValue.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1");

    return formattedValue + abbreviation.symbol;
  }

  // Trả về số gốc nếu nhỏ hơn 1000
  return number.toString();
};
