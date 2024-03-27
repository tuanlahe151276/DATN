import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import * as Image from "../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setShowDropdownManageAccount } from "../../../redux/slice/show.slice";

export default function DropdownManageAccount() {
  const showDropdownManageAccount = useSelector(
    (state) => state.show.showDropdownManageAccount
  );
  const dispatch = useDispatch();
  const handleShow = (e) => {
    e.stopPropagation();
    dispatch(setShowDropdownManageAccount(!showDropdownManageAccount));
  };
  const handleLogout = () => {
    console.log("log-out");
  };
  return (
    <div className="inline-block relative">
      <button
        className="bg-transparent mr-1 border-none font-normal text-black cursor-pointer relative h-10 rounded-md inline-flex items-center px-3 m-0 gap-x-2 group"
        type="button"
        id="dropdownMenu2"
        onClick={(e) => handleShow(e)}>
        <RxDashboard className="text-base text-black" />
        <span className="group-hover:underline">Quản lý tài khoản</span>
      </button>
      <ul
        style={{
          boxShadow: "0 0 20px rgb(75 75 75 / 30%)",
        }}
        className={`${showDropdownManageAccount ? "" : "hidden"} absolute z-10 py-3 px-5 left-0 bg-white rounded-md min-w-48 font-medium transition`}
        aria-labelledby="dropdownMenu2">
        <li>
          <Link
            className="flex items-center gap-x-2 py-2 px-0 border-b border-[#eee] w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm"
            rel="nofollow"
            to="https://phongtro123.com/quan-ly/dang-tin-moi.html"
            title="Đăng tin cho thuê">
            <img
              src={Image.DashboardAddPost}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span> Đăng tin cho thuê</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 py-2 px-0 border-b border-[#eee] w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm"
            rel="nofollow"
            to="https://phongtro123.com/quan-ly/tin-dang.html"
            title="Quản lý tin đăng">
            <img
              src={Image.DashboardManagePost}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span>Quản lý tin đăng</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 py-2 px-0 border-b border-[#eee] w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm"
            rel="nofollow"
            to="https://phongtro123.com/quan-ly/nap-tien.html">
            <img
              src={Image.DashboardPayment}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span> Nạp tiền</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 py-2 px-0 border-b border-[#eee] w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm"
            rel="nofollow"
            to="https://phongtro123.com/quan-ly/lich-su-nap-tien.html">
            <img
              src={Image.DashboardPaymentHistory}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span> Lịch sử nạp tiền</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 py-2 px-0 border-b border-[#eee] w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm"
            rel="nofollow"
            to="https://phongtro123.com/quan-ly/cap-nhat-thong-tin-ca-nhan.html">
            <img
              src={Image.DashboardUser}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span>Thông tin cá nhân</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 py-2 px-0 border-b border-[#eee] w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm"
            rel="nofollow"
            to="https://phongtro123.com/tin-da-luu.html">
            <img
              src={Image.DashboardPostSaved}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span>Tin đã lưu</span>
          </Link>
        </li>
        <li>
          <span
            className="flex items-center gap-x-2 py-2 px-0 w-full whitespace-nowrap text-blue-500 hover:text-orange-500 text-sm cursor-pointer"
            onClick={handleLogout}>
            <img
              src={Image.DashboardLogout}
              alt=""
              className="w-4 h-4 object-cover object-center"
            />
            <span>Đăng xuất</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
