import { NavLink } from "react-router-dom";

export default function LogoButton({ className = "" }) {
  return (
    <NavLink
      to={"/"}
      className={`${className ? className : "flex items-center gap-1 justify-center"}`}>
      <img
        src={"https://phongtro123.com/images/logo-phongtro.svg"}
        alt="Logo"
        className="w-[240px] h-[70px]"
      />
    </NavLink>
  );
}
