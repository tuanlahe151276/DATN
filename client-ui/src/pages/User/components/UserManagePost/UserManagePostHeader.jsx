import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import ROUTER from "../../../../routers";
import { useState } from "react";
const dataType = [
  {
    title: "Tin Hot",
    href: "#!",
  },
  {
    title: "Tin VIP 30",
    href: "#!",
  },
  {
    title: "Tin VIP 20",
    href: "#!",
  },
  {
    title: "Tin VIP 10",
    href: "#!",
  },
  {
    title: "Tin thường",
    href: "",
  },
];
const dataStatus = [
  {
    title: "Tin đang hiển thị",
    href: "",
  },
  {
    title: "Tin hết hạn",
    href: "",
  },
  {
    title: "Tin đang ẩn",
    href: "",
  },
];
export default function UserManagePostHeader() {
  const [showType, setShowType] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const handleClickType = () => {
    setShowType((pre) => !pre);
    setShowStatus(false);
  };
  const handleClickStatus = () => {
    setShowStatus((pre) => !pre);
    setShowType(false);
  };
  return (
    <div className="pb-2 mb-4 flex-wrap md:flex-nowrap items-center justify-between flex border-b border-[#dee2e6]">
      <h1 className="w-full md:w-auto text-[28px] mb-2 font-medium">
        Quản lý tin đăng
      </h1>
      <div className="w-full md:w-auto md:mb-0 flex flex-wrap md:flex-nowrap justify-start items-center">
        <div className="relative mr-1">
          <button
            className={`${showType ? " text-white bg-[#6c757d]" : "text-[#6c757d] bg-transparent"} flex items-center font-normal whitespace-nowrap text-center border rounded text-[13px] border-[#6c757d] py-1 px-2 hover:bg-[#6c757d] hover:text-white cursor-pointer`}
            type="button"
            id="dropdownMenuButton"
            onClick={handleClickType}>
            <span>Lọc theo loại VIP</span>
            <MdArrowDropDown className="text-xl" />
          </button>
          <div
            className={`${showType ? "" : "hidden"} absolute translate-x-0 translate-y-[27px] top-0 left-0 flex flex-col right-auto bottom-auto z-20 float-left min-w-36 py-2 my-[2px] text-[#212529] text-left rounded-md border border-black/15 bg-white`}
            aria-labelledby="dropdownMenuButton">
            {dataType?.map((item, index) => (
              <Link
                key={index}
                className="block w-full py-1 px-6 font-normal text-black whitespace-nowrap border-b border-gray-200 last:border-none bg-transparent"
                to={item?.href}>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative mr-1">
          <button
            className={`${showStatus ? " text-white bg-[#6c757d]" : "text-[#6c757d] bg-transparent"} flex items-center font-normal whitespace-nowrap text-center border rounded text-[13px] border-[#6c757d] py-1 px-2 hover:bg-[#6c757d] hover:text-white cursor-pointer`}
            type="button"
            id="dropdownMenuButton"
            onClick={handleClickStatus}>
            <span>Lọc theo trạng thái</span>
            <MdArrowDropDown className="text-xl" />
          </button>
          <div
            className={`${showStatus ? "" : "hidden"} absolute translate-x-0 translate-y-[27px] top-0 left-0 flex flex-col right-auto bottom-auto z-20 float-left min-w-36 py-2 my-[2px] text-[#212529] text-left rounded-md border border-black/15 bg-white`}
            aria-labelledby="dropdownMenuButton">
            {dataStatus?.map((item, index) => (
              <Link
                key={index}
                className="block w-full py-1 px-6 font-normal text-black whitespace-nowrap border-b border-gray-200 last:border-none bg-transparent"
                to={item?.href}>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <Link
          className="hidden md:block text-white bg-[#dc3545] hover:bg-[#c82333] border-[#dc3545] cursor-pointer whitespace-nowrap text-center font-normal border px-3 py-1 text-sm rounded"
          to={ROUTER.DANG_TIN_MOI}>
          Đăng tin mới
        </Link>
        <div className="md:hidden w-full">
          <Link
            className="block w-full text-white bg-[#dc3545] hover:bg-[#c82333] border-[#dc3545] cursor-pointer mt-4 whitespace-nowrap text-center font-normal border px-3 py-[6px] text-sm rounded z-0"
            to={ROUTER.DANG_TIN_MOI}>
            Đăng tin mới
          </Link>
        </div>
      </div>
    </div>
  );
}
