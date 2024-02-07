import * as XLSX from "xlsx";

//convert image to base64
export const getBase64 = (file) => {
  const data = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  return data;
};
//Ktra co la json string khong
export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};

//

//
export const convertPrice = (price) => {
  try {
    // const result = price?.toLocaleString().replaceAll(",", ".");
    const result = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
    return result;
  } catch (error) {
    return null;
  }
};
//conert time
export const convertISOToNewFormat = (isoTime) => {
  const date = new Date(isoTime);

  // Lấy giờ, phút và giây
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Lấy ngày, tháng và năm
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lưu ý tháng bắt đầu từ 0
  const year = date.getFullYear();

  return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
};
export const getCurrentYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};
//
export const dateFormatList = [
  "DD/MM/YYYY",
  "DD/MM/YY",
  "DD-MM-YYYY",
  "DD-MM-YY",
];
export const convertDateFormat = (date) => {
  const convertDate = new Date(date);
  const day = convertDate.getDate();
  const month = convertDate.getMonth() + 1;
  const year = convertDate.getFullYear();
  return day + "-" + month + "-" + year;
};

export const isDateBeforeToday = (date) => {
  // Chuyển đổi inputDate thành đối tượng Date
  const inputDateTime = new Date(date);
  // Lấy ngày hiện tại
  const currentDate = new Date();
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(currentDate.getFullYear() - 5);
  // So sánh ngày
  return inputDateTime < fiveYearsAgo;
};

const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i);
  }
  return buf;
};

export const workbook2blob = (workbook) => {
  const wopts = {
    bookType: "xlsx",
    bookSST: false,
    type: "binary",
  };
  const wbout = XLSX.write(workbook, wopts);
  const blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream",
  });
  return blob;
};
