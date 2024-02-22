import { Link } from "react-router-dom";

export default function NewPostItem({ item }) {
  return (
    <li className="py-[10px] z-[1] border-b border-[#ddd] m-0 flex relative bg-white w-full">
      <Link to={item?.href} className="flex w-full">
        <img
          className="block w-16 h-16 relative m-0 rounded-md bg-[#f1f1f1] overflow-hidden"
          src={item?.image}
          alt={item?.title}
        />
        <div className="ml-4 flex-1 relative text-sm flex-col flex">
          <span className="block mb-2 whitespace-normal font-normal leading-[1.3] text-[#055699]">
            {item?.title?.length < 80
              ? item?.title
              : item?.title?.substring(0, 80) + "..."}
          </span>
          <div className="w-full flex items-center justify-between">
            <span className="mr-5 leading-5 mb-0 font-bold text-[#16c784]">
              {item?.price}/tháng
            </span>
            <time
              className="text-[13px] mb-0 mr-0 text-[#aaa] leading-5"
              title={item?.date}>
              {item?.date ? item?.date : " 25 phút trước"}
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
}
