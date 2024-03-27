import { Link, NavLink } from "react-router-dom";
import {
  isNotUserActiveStyles,
  isUserActiveStyles,
} from "../../../assets/css/styles";
import { FaRegCalendar, FaRegClipboard, FaRegFileAlt } from "react-icons/fa";
import { FiEdit, FiMessageCircle } from "react-icons/fi";
import { FaDollarSign, FaRegClock } from "react-icons/fa6";
import ROUTER from "../../../routers";
import { convertPrice } from "../../../utils/function";
export default function UserSidebar() {
  return (
    <div className="relative min-h-[calc(100vh-2rem)]">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 min-h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="p-2 pt-0 border-b-2 border-gray-300">
          <div className="flex w-full items-center gap-x-2">
            <div className="w-10 h-10 bg-center bg-cover rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-full bg-center bg-cover"
                alt="avatar"
              />
            </div>
            <div className="w-auto flex items-center">
              <div className="m-0 border-none p-0">
                <div className="text-ellipsis overflow-hidden whitespace-nowrap text-base font-bold">
                  Nguyễn Đức Nam
                </div>
                <div className="text-[#555] text-sm m-0 p-0">0399998888</div>
              </div>
            </div>
          </div>
          <ul className="text-sm">
            <li>
              <span>Mã thành viên:</span>
              <span style={{ fontWeight: 700 }}> 138346</span>
            </li>
            <li>
              <span>TK Chính:</span>{" "}
              <span className="font-bold whitespace-nowrap text-ellipsis">
                {convertPrice(1000000000)}
              </span>
            </li>
          </ul>
          <div className="flex items-center justify-center mt-2 w-full gap-x-2">
            <Link
              className="text-center inline-block font-normal border border-[#ffc107] cursor-pointer bg-[#ffc107] text-black rounded px-2 py-[2px]"
              to="nap-tien.html">
              Nạp tiền
            </Link>
            <Link
              className="text-center inline-block font-normal border border-[#dc3545] cursor-pointer bg-[#dc3545] text-white rounded px-2 py-[2px]"
              to="dang-tin-moi.html">
              Đăng tin
            </Link>
          </div>
        </div>
        <ul className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-800">
          <NavLink
            to={ROUTER.QUAN_LY_TIN_DANG}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FaRegFileAlt className="text-lg text-gray-700" />
            <span>Quản lý tin đăng</span>
          </NavLink>
          <NavLink
            to={ROUTER.THONG_TIN_CA_NHAN}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FiEdit className="text-lg text-gray-700" />
            <span>Sửa thông tin cá nhân</span>
          </NavLink>
          <NavLink
            to={ROUTER.NAP_TIEN_VAO_TAI_KHOAN}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FaDollarSign className="text-lg text-gray-700" />
            <span>Nạp tiền vào tài khoản</span>
          </NavLink>
          <NavLink
            to={ROUTER.LICH_SU_NAP_TIEN}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FaRegClock className="text-lg text-gray-700" />
            <span>Lịch sử nạp tiền</span>
          </NavLink>
          <NavLink
            to={ROUTER.LICH_SU_THANH_TOAN}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FaRegCalendar className="text-lg text-gray-700" />
            <span>Lịch sử thanh toán</span>
          </NavLink>
          <NavLink
            to={ROUTER.BANG_GIA_DICH_VU}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FaRegClipboard className="text-lg text-gray-700" />
            <span>Bảng giá dịch vụ</span>
          </NavLink>
          <NavLink
            to={ROUTER.LIEN_HE}
            className={({ isActive }) =>
              isActive ? isUserActiveStyles : isNotUserActiveStyles
            }>
            <FiMessageCircle className="text-lg text-gray-700" />
            <span>Liên hệ</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
