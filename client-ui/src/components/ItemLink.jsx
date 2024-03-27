import { MdKeyboardArrowRight } from "react-icons/md";

export default function ItemLink({ item, sub = false, notFullWidth = false }) {
  return (
    <li
      className={`${sub ? "ml-4 " : ""}relative flex items-center pl-5 border-b border-dashed border-[#eee] justify-between ${notFullWidth ? "w-1/2" : "w-full"}`}>
      <MdKeyboardArrowRight className="absolute left-0 text-gray-400" />
      <h2 className="m-0 p-0 inline-flex w-full">
        <a
          href={item?.href}
          title={item?.title}
          className="w-full text-sm font-normal text-[#333] items-center py-[5px] hover:text-[#f60]">
          {item?.title}
        </a>
      </h2>
      {item?.count && (
        <span className="ml-[5px] text-[13px] text-[#aaa] ">
          ({item?.count})
        </span>
      )}
    </li>
  );
}
