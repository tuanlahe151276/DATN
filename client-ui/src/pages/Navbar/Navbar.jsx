import { NavLink } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../../assets/css/styles";
import ROUTER from "../../routers";
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
          to={ROUTER.CHO_THUE_PHONG_TRO}>
          Cho thuê phòng trọ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={ROUTER.NHA_CHO_THUE}>
          Nhà cho thuê
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={ROUTER.CHO_THUE_CAN_HO}>
          Cho thuê căn hộ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={ROUTER.MAT_BANG}>
          Mặt bằng, văn phòng
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={ROUTER.TIM_NGUOI_O_GHEP}>
          Tìm người ở ghép
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={ROUTER.TIN_TUC}>
          Tin tức
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={ROUTER.BANG_GIA_DICH_VU}>
          Bảng giá dịch vụ
        </NavLink>
      </ul>
    </nav>
  );
}
