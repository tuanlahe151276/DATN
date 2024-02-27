import { NavLink } from "react-router-dom";
import {
  isActiveNavStyles,
  isNotActiveNavStyles,
} from "../../../../assets/css/styles";
import { PostItem } from "../../../../components";
import { listPost } from "../../../../utils/data";
import PaginationContent from "./PaginationContent";

export default function MainContentLeft({ list = null }) {
  return (
    <div className="w-[850px]">
      <section className="mb-5 p-5 bg-white border border-[#dedede] rounded-lg">
        <div className="mt-0 mb-[15px]">
          <span className="text-lg font-bold m-0 p-0">
            Tổng 120.227 kết quả
          </span>
        </div>
        <div className="mb-[10px] text-[13px] flex items-center">
          <span>Sắp xếp: </span>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveNavStyles : isNotActiveNavStyles
            }
            to={"/"}>
            Mặc định
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveNavStyles : isNotActiveNavStyles
            }
            to={"/orderby=moi-nhat"}>
            Mới nhất
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveNavStyles : isNotActiveNavStyles
            }
            to={"/orderby=video"}>
            Có video
          </NavLink>
        </div>

        <ul className="w-full">
          {listPost?.map((item, index) => (
            <PostItem item={item} key={index} />
          ))}
        </ul>
        <PaginationContent />
      </section>
    </div>
  );
}
