import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "./Rating";
export default function PostItem({ item = null }) {
  return (
    <li
      className={`${item?.type === 5 ? "border-[#E13427] -mx-5 px-5 bg-[#fff9f3] z-[5]" : item?.type === 4 ? "border-[#ea2e9d] bg-[#fff9f3] z-[4]" : "border-[#ddd] bg-[#fff] w-full z-0"} flex py-4 px-0 border-t  relative `}>
      <div className="w-2/5 relative">
        <a
          href={item?.href}
          className="block relative pt-[56.25%] object-cover rounded-lg w-full group overflow-hidden">
          <img
            className="absolute h-full w-full object-cover top-0 left-0"
            src={item?.image}
            alt={item?.title}
          />
        </a>
        <span className="absolute bottom-6 left-2 bg-black/50 py-[3px] px-[5px] text-[13px] pointer-events-none text-white rounded font-semibold">
          16 Ảnh
        </span>
        <FaHeart className="absolute bottom-6 right-2 text-[30px] flex justify-center items-center cursor-pointer z-[1] text-gray-100/60 hover:text-red-400 font-semibold" />
      </div>
      <div className="ml-4 flex-1 relative w-full min-w-[395px]">
        <h3 className="text-sm leading-normal font-bold block whitespace-normal mb-[10px]">
          <Link
            className={`${item?.type === 5 ? "text-[#E13427]" : item?.type === 4 ? "text-[#ea2e9d]" : "text-[#3763e0]"}  uppercase no-underline hover:underline`}
            to="/phong-share-tro-chung-cu-quan-7-pr596546.html">
            <Rating star={item?.type} height={14} />
            {item?.title}
          </Link>
        </h3>
        <div className="mb-[10px] flex items-center leading-5 text-[#333] text-sm">
          <span className="text-base font-bold text-[#16c784] mr-5">
            {item?.price}/tháng
          </span>
          <span className="mr-5">{item?.acreage}m²</span>
          <span className="mr-5">
            <Link
              className="no-underline w-full block overflow-hidden max-w-[250px] text-ellipsis whitespace-nowrap hover:underline"
              to="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-7"
              title="Cho thuê phòng trọ Quận 7, Hồ Chí Minh">
              {item?.address}
            </Link>
          </span>
          <time
            className="mr-0 text-[#aaa] text-[13px]"
            title="Thứ 3, 08:11 20/02/2024">
            {item?.date ? item?.date : "Hôm nay"}
          </time>
        </div>
        <div className="mb-[10px]">
          <p className="mt-[10px] text-gray-500 text-sm">{item?.desc}</p>
        </div>
        <div className="mb-0 flex items-center">
          <div className="inline-flex items-center mr-[10px]">
            <img
              src={item?.avatar}
              alt={item?.userName}
              className="w-[30px] h-[30px] object-cover rounded-full overflow-hidden mr-[5px]"
            />
            <span className="text-[#535457]">{item?.userName}</span>
          </div>
          <a
            rel="nofollow noreferrer"
            target="_blank"
            href={`tel:${item?.phone}`}
            className="inline-block px-2 py-1 border border-[#1266dd] bg-[#1266dd] cursor-pointer ml-auto text-white rounded-md">
            Gọi {item?.phone}
          </a>
          <a
            rel="nofollow noreferrer"
            target="_blank"
            href={item?.zalo}
            className="inline-block px-2 py-1 border border-[#1266dd] cursor-pointer ml-1 text-[#1266dd] rounded-md">
            Nhắn Zalo
          </a>
        </div>
      </div>
    </li>
  );
}
