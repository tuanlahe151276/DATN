import { BackTopButton } from "../../components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full relative">
      <Header />
      <Navbar />
      <Main />
      <Footer />
      <BackTopButton />
    </div>
  );
}
