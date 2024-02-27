import { Link } from "react-router-dom";
import ROUTER from "../../../routers";

export default function MainHeader({
  title = "",
  description = "",
  navLink = "",
  navName = "",
}) {
  return (
    <header className="mb-4 text-[#333]">
      {navLink && (
        <div className="flex items-center text-sm gap-x-1 mb-1">
          <Link
            to={ROUTER.HOME}
            className="text-blue-600 hover:text-orange-600">
            Trang chủ
          </Link>
          <span>&gt;</span>
          <Link to={navLink} className="text-black hover:text-orange-600">
            {navName}
          </Link>
        </div>
      )}
      <h1
        className={`${navLink ? "text-left" : "text-center"} text-[28px] leading-[1.2] mb-[5px] font-semibold`}>
        {title}
      </h1>
      <p
        className={`${navLink ? "text-left" : "text-center"} text-sm font-normal leading-[1.5] m-0 text-[#65676b] w-full`}>
        {description}
      </p>
    </header>
  );
}
