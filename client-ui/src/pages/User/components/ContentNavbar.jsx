import { Link } from "react-router-dom";
import ROUTER from "../../../routers";

export default function ContentNavbar({ navName }) {
  return (
    <div className="flex items-center text-sm gap-x-1 mb-5">
      <Link to={ROUTER.HOME} className="text-blue-700 hover:underline">
        Trang chủ
      </Link>
      <span>&gt;</span>
      <Link to={ROUTER.USER} className="text-blue-700 hover:underline">
        Người dùng
      </Link>
      <span>&gt;</span>
      <span className="text-gray-700">{navName}</span>
    </div>
  );
}
