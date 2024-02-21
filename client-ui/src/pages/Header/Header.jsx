import { LogoButton } from "../../components";
import HeaderNav from "./components/HeaderNav";

export default function Header() {
  return (
    <div className="container mx-auto px-1 md:px-2 lg:px-0 flex justify-between max-w-[1280px]">
      <LogoButton />
      <HeaderNav />
    </div>
  );
}
