import { NavLink } from "react-router-dom";

export default function NavbarItem({
  children,
  href = "",
  name = "",
  src = "",
}) {
  return (
    <NavLink
      className="bg-transparent m-0 border-none text-[#333] font-normal relative flex items-center px-[10px] justify-center hover:underline rounded-[5px] h-10"
      to={href}>
      {children}
      {name}
      {src && <img src={src} className="w-10" alt={name} />}
    </NavLink>
  );
}
