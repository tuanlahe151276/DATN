import { NavLink } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../../assets/css/styles";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1266dd]">
      <ul className="container mx-auto px-1 md:px-2 lg:px-0 flex justify-center max-w-[1300px]">
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/"}>
          Trang chủ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/a"}>
          Cho thuê phòng trọ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/b"}>
          Nhà cho thuê
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/c"}>
          Cho thuê căn hộ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/d"}>
          Mặt bằng, văn phòng
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/e"}>
          Tìm người ở ghép
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/f"}>
          Tin tức
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/g"}>
          Bảng giá dịch vụ
        </NavLink>
      </ul>
    </nav>
  );
}
