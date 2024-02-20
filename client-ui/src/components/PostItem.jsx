import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Star } from "../assets/images";
export default function PostItem({ item = null }) {
  // border-[#E13427] bg-[##fff9f3] z-[5]
  // border-[##ea2e9d] bg-[##fff9f3] z-[4]
  return (
    <li className="flex pt-4 px-0 border-t border-[#ddd] bg-[#fff] relative z-0 w-full">
      <div className="w-2/5 relative">
        <a
          href="/"
          className="block relative pt-[56.25%] object-cover rounded-lg w-full group overflow-hidden">
          <img
            className="absolute h-full w-full object-cover top-0 left-0"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/04/06/img-0881_1680780295.jpg"
            alt=""
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
            className="text-[#E13427] uppercase no-underline hover:underline"
            to="/phong-share-tro-chung-cu-quan-7-pr596546.html">
            <span
              className="inline-block mr-1 h-[17px] bg-[length:14px_14px]"
              style={{
                width: 70,
                backgroundImage: `url("${Star}")`,
                backgroundPositionX: "left",
                backgroundPositionY: "center",
                backgroundRepeat: "repeat-x",
              }}
            />
            Chính chủ cho thuê phòng riêng Chung cư Era Town Đức Khải , Quận 7
          </Link>
        </h3>
        <div className="mb-[10px] flex items-center leading-5 text-[#333] text-sm">
          <span className="text-base font-bold text-[#16c784] mr-5">
            1.5 triệu/tháng
          </span>
          <span className="mr-5">15m²</span>
          <span className="mr-5">
            <Link
              className="no-underline w-full block overflow-hidden max-w-[250px] text-ellipsis whitespace-nowrap hover:underline"
              to="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-7"
              title="Cho thuê phòng trọ Quận 7, Hồ Chí Minh">
              Quận 7, Hồ Chí Minh
            </Link>
          </span>
          <time
            className="mr-0 text-[#aaa] text-[13px]"
            title="Thứ 3, 08:11 20/02/2024">
            Hôm nay
          </time>
        </div>
        <div className="mb-[10px]">
          <p className="mt-[10px] text-gray-500 text-sm">
            Chính chủ cho thuê phòng trọ trong căn hộ Chung cư Era Town Đức
            Khải.Khu chung cư rộng rãi, thoáng mát, an ninh, tiện ích đầy đủ,
            tổng diện tích hơn 10ha…
          </p>
        </div>
        <div className="mb-0 flex items-center">
          <div className="inline-flex items-center mr-[10px]">
            <img
              src="https://phongtro123.com/images/default-user.png"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full overflow-hidden mr-[5px]"
            />
            <span className="text-[#535457]">Lê Tú</span>
          </div>
          <a
            rel="nofollow noreferrer"
            target="_blank"
            href="tel:0815777735"
            className="inline-block px-2 py-1 border border-[#1266dd] bg-[#1266dd] cursor-pointer ml-auto text-white rounded-md">
            Gọi 0815777735
          </a>
          <a
            rel="nofollow noreferrer"
            target="_blank"
            href="https://zalo.me/0815777735"
            className="inline-block px-2 py-1 border border-[#1266dd] cursor-pointer ml-1 text-[#1266dd] rounded-md">
            Nhắn Zalo
          </a>
        </div>
      </div>
    </li>
  );
}
