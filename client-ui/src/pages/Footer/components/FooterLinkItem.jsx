import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
export default function FooterLinkItem({
  href = "",
  name = "aaaaaa",
  list = null,
}) {
  const [isShowList, setIsShowList] = useState(false);

  return (
    <div className="float-left w-auto text-center relative group">
      <div className="flex items-center border-r-[1px] border-r-[#ddd] pr-5 mr-5 w-full cursor-pointer group-last:border-none">
        <Link
          className="text-sm py-2 text-[#1266dd] font-bold hover:text-[#f60]"
          to={href}
          title={name}>
          {name}
        </Link>
        <IoIosArrowDown
          className="text-[24px] font-normal ml-auto"
          onClick={() => setIsShowList((pre) => !pre)}
        />
      </div>
      {isShowList && (
        <ul className="block p-0 m-0">
          {list?.map((item, index) => (
            <li key={index} className="relative my-[10px] mx-0">
              <Link
                to={item?.href}
                title={item?.name}
                className="text-ellipsis overflow-hidden w-full whitespace-nowrap relative block text-left text-[13px] text-[#1266dd] hover:text-[#f60]">
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
