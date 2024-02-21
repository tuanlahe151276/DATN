import * as Image from "../../../assets/images";
import { Link } from "react-router-dom";
export default function MainSupport() {
  const user = {
    tel: "0902657123",
  };
  return (
    <section className="mb-5 w-full bg-white border-[7px] border-dashed border-[#e8eefc] p-[30px] mt-[30px] rounded-lg">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={Image.SupportBG}
          alt=""
          className="h-[150px] object-contain w-full"
        />
        <div className="w-full text-center px-[10px] mt-[30px]">
          <div className="text-base mb-5 text-[#233762]">
            Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
          </div>
          <div className="w-full flex mb-6">
            <div className="basis-1/4 max-w-[25%] float-left flex flex-col gap-y-[5px]">
              <span className="text-base block text-[#f60] uppercase font-bold">
                Hỗ trợ đăng tin
              </span>
              <a
                rel="nofollow noreferrer"
                href={`tel:${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Điện thoại: {user?.tel}
              </a>
              <a
                rel="nofollow noreferrer"
                target="_blank"
                href={`https://zalo.me/${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Zalo: {user?.tel}
              </a>
            </div>
            <div className="basis-1/4 max-w-[25%] float-left flex flex-col gap-y-[5px]">
              <span className="text-base block text-[#f60] uppercase font-bold">
                Hỗ trợ đăng tin
              </span>
              <a
                rel="nofollow noreferrer"
                href={`tel:${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Điện thoại: 0901424123
              </a>
              <a
                rel="nofollow noreferrer"
                target="_blank"
                href={`https://zalo.me/${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Zalo: {user?.tel}
              </a>
            </div>
            <div className="basis-1/4 max-w-[25%] float-left flex flex-col gap-y-[5px]">
              <span className="text-base block text-[#f60] uppercase font-bold">
                Hỗ trợ đăng tin
              </span>
              <a
                rel="nofollow noreferrer"
                href={`tel:${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Điện thoại: {user?.tel}
              </a>
              <a
                rel="nofollow noreferrer"
                target="_blank"
                href={`https://zalo.me/${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Zalo: {user?.tel}
              </a>
            </div>
            <div className="basis-1/4 max-w-[25%] float-left flex flex-col gap-y-[5px]">
              <span className="text-base block text-[#f60] uppercase font-bold">
                Phản ánh/khiếu nại
              </span>
              <a
                rel="nofollow noreferrer"
                href={`tel:${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Điện thoại: {user?.tel}
              </a>
              <a
                rel="nofollow noreferrer"
                target="_blank"
                href={`https://zalo.me/${user?.tel}`}
                className="block text-[#233762] text-lg font-bold">
                Zalo: {user?.tel}
              </a>
            </div>
          </div>
          <Link
            className="h-10 rounded-[5px] border border-[#3961fb] font-bold inline-flex justify-center items-center m-0 py-[10px] px-[30px] bg-[#3961fb] hover:underline text-white"
            rel="nofollow noreferrer"
            to="/lien-he">
            Gửi liên hệ
          </Link>
        </div>
      </div>
    </section>
  );
}
