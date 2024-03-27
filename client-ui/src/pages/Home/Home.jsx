import { useDispatch, useSelector } from "react-redux";
import { BackTopButton } from "../../components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import { setShowDropdownManageAccount } from "../../redux/slice/show.slice";

export default function Home() {
  const showDropdownManageAccount = useSelector(
    (state) => state.show.showDropdownManageAccount
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    showDropdownManageAccount && dispatch(setShowDropdownManageAccount(false));
  };
  return (
    <div className="w-full relative" onClick={handleClick}>
      <Header />
      <Navbar />
      <Main />
      <Footer />
      <BackTopButton />
    </div>
  );
}
