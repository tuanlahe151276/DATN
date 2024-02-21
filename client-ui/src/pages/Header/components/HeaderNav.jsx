import { NavbarItem } from "../../../components";
import { LiaHandHoldingUsdSolid, LiaHeart } from "react-icons/lia";
import { LuUserPlus2, LuPlusCircle } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import ButtonNewNews from "./ButtonNewNews";
export default function HeaderNav() {
  return (
    <nav className="flex items-center justify-center gap-3 sm:ml-auto md:gap-6 lg:gap-8">
      <ul className="hidden sm:flex items-center justify-center gap-x-1">
        <NavbarItem
          href=""
          name="Khuyến mãi"
          children={<LiaHandHoldingUsdSolid className="text-xl mr-[5px]" />}
          src="https://phongtro123.com/images/hot.gif"
        />
        <NavbarItem
          name="Yêu thích"
          href=""
          children={<LiaHeart className="text-xl mr-[5px]" />}
        />
        <NavbarItem
          name="Đăng ký"
          href="/signup"
          children={<LuUserPlus2 className="text-xl mr-[5px]" />}
        />
        <NavbarItem
          name="Đăng nhập"
          href="/login"
          children={<IoIosLogIn className="text-xl mr-[5px]" />}
        />
        <ButtonNewNews
          name="Đăng tin mới"
          href="/login"
          children={<LuPlusCircle className="text-xl ml-1 text-gray-200" />}
        />
      </ul>
    </nav>
  );
}
