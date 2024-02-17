import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
export default function BackTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollUp}
      className={`${
        backToTopButton ? "fixed " : "hidden "
      }flex justify-center items-center bg-[#f83859] rounded-full bg-center z-[10] bottom-10 right-6 w-14 h-14 cursor-pointer`}>
      <IoIosArrowRoundUp className="text-white text-[30px]" />
    </div>
  );
}
