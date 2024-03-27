import { NavbarItem } from "../../../components";
import { LiaHandHoldingUsdSolid, LiaHeart } from "react-icons/lia";
import { LuUserPlus2, LuPlusCircle } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import ButtonNewNews from "./ButtonNewNews";
import ROUTER from "../../../routers";
import DropdownManageAccount from "./DropdownManageAccount";
import { useSelector } from "react-redux";
import { AvatarDefault, HotImg } from "../../../assets/images";
export default function HeaderNav() {
  const user = useSelector((state) => state.auth.user);
  return (
    <nav className="flex items-center justify-center gap-3 sm:ml-auto md:gap-6 lg:gap-8">
      <ul className="hidden sm:flex items-center justify-center gap-x-1">
        <NavbarItem
          name="Khuyễn mãi"
          href={ROUTER.PROMOTION}
          children={<LiaHandHoldingUsdSolid className="text-xl mr-[5px]" />}
          src={HotImg}
        />
        <NavbarItem
          name="Yêu thích"
          href={ROUTER.FAVOURITED}
          children={<LiaHeart className="text-xl mr-[5px]" />}
        />
        {!user?.account ? (
          <>
            <NavbarItem
              name="Đăng ký"
              href={ROUTER.SIGNUP}
              children={<LuUserPlus2 className="text-xl mr-[5px]" />}
            />
            <NavbarItem
              name="Đăng nhập"
              href={ROUTER.LOGIN}
              children={<IoIosLogIn className="text-xl mr-[5px]" />}
            />
          </>
        ) : (
          <DropdownManageAccount />
        )}
        <ButtonNewNews
          name="Đăng tin mới"
          href={ROUTER.NEWPOST}
          children={<LuPlusCircle className="text-xl ml-1 text-gray-200" />}
        />
        {user?.userName && (
          <div className="flex items-center gap-x-2 ml-2 relative">
            <span className="ml-auto">
              Xin chào, <strong>{user?.userName || ""}</strong>
            </span>
            <img
              src={user?.avatar || AvatarDefault}
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover object-center"
            />
            {/* <span style={{ fontSize: "0.9rem" }}>
              Mã tài khoản: <strong>138346</strong>
              <br /> TK Chính: <strong>0 VNĐ</strong>
            </span> */}
          </div>
        )}
      </ul>
    </nav>
  );
}
