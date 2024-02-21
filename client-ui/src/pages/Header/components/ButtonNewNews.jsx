import { NavLink } from "react-router-dom";

export default function ButtonNewNews({ children, href = "", name = "" }) {
  return (
    <NavLink
      className="bg-[#f73859] m-0 border-none text-white font-normal relative flex items-center px-[10px] justify-center hover:underline ml-[10px] rounded-[5px] h-10"
      to={href}>
      {name}
      {children}
    </NavLink>
  );
}
