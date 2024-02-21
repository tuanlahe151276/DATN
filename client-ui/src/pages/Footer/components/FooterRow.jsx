import { Link } from "react-router-dom";
import { LogoButton } from "../../../components";
import * as Image from "../../../assets/images";
export default function FooterRow() {
  const listAbout = [
    {
      href: "/",
      title: "Trang chủ",
    },
    {
      href: "/",
      title: "Giới thiệu",
    },
    {
      href: "/",
      title: "Blog",
    },
    {
      href: "/",
      title: "Quy chế hoạt động",
    },
    {
      href: "/",
      title: "Quy định sử dụng",
    },
    {
      href: "/",
      title: "Chính sách bảo mật",
    },
    {
      href: "/",
      title: "Liên hệ",
    },
  ];
  const listSupport = [
    {
      href: "/",
      title: "Câu hỏi thường gặp",
    },
    {
      href: "/",
      title: "Hướng dẫn đăng tin",
    },
    {
      href: "/",
      title: "Bảng giá dịch vụ",
    },
    {
      href: "/",
      title: "Quy định đăng tin",
    },
    {
      href: "/",
      title: "Giải quyết khiếu nại",
    },
  ];
  return (
    <div className="w-full">
      <div className="float-left pr-5 w-[34%]">
        <LogoButton className="flex items-center gap-1 justify-left" />
        <p className="leading-[1.3]">
          Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh
          vực cho thuê phòng trọ.
        </p>
      </div>
      <div className="float-left pr-5 w-[22%]">
        <span className="mb-[10px] font-bold block w-full">
          Về PHONGTRO123.COM
        </span>
        <ul className="w-full">
          {listAbout?.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={item?.href}
                className="my-[5px] py-[5px] text-[#333] hover:underline block w-full">
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="float-left pr-5 w-[22%]">
        <span className="mb-[10px] font-bold block w-full">
          Hỗ trợ khách hàng
        </span>
        <ul className="w-full">
          {listSupport?.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={item?.href}
                className="my-[5px] py-[5px] text-[#333] hover:underline block w-full">
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="float-left pr-5 w-[22%] flex-col">
        <span className="mb-[10px] font-bold block w-full">
          Liên hệ với chúng tôi
        </span>
        {/* social */}
        <div className="w-full flex items-center gap-x-1 mb-[10px]">
          <a
            href="/"
            target="_blank"
            rel="nofollow"
            className="w-9 h-9 rounded-full overflow-hidden block">
            <img
              src={Image.IconFacebook}
              alt="facebook"
              className="w-full h-full"
            />
          </a>
          <a
            href="/"
            target="_blank"
            rel="nofollow"
            className="w-9 h-9 rounded-full overflow-hidden block">
            <img
              src={Image.IconYoutube}
              alt="youtube"
              className="w-full h-full"
            />
          </a>
          <a
            href="/"
            target="_blank"
            rel="nofollow"
            className="w-9 h-9 rounded-full overflow-hidden block">
            <img src={Image.IconZalo} alt="zalo" className="w-full h-full" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="nofollow"
            className="w-9 h-9 rounded-full overflow-hidden block">
            <img
              src={Image.IconTwitter}
              alt="twitter"
              className="w-full h-full"
            />
          </a>
        </div>
        <span className="mb-[10px] font-bold block w-full">
          Phương thức thanh toán
        </span>
        {/* payment */}
        <div className="w-full flex flex-wrap gap-y-1 items-center justify-between">
          <span className="w-12 h-8 overflow-hidden rounded-sm border bg-no-repeat bg-payment bg-paymentSize bg-[-112px_0]"></span>
          <span className="w-12 h-8 overflow-hidden rounded-sm border bg-no-repeat bg-payment bg-paymentSize bg-[-164px_0]"></span>
          <span className="w-12 h-8 overflow-hidden rounded-sm border bg-no-repeat bg-payment bg-paymentSize bg-[-56px_0]"></span>
          <span className="w-12 h-8 overflow-hidden rounded-sm border bg-no-repeat bg-payment bg-paymentSize bg-[-216px_0]"></span>
          <span className="w-12 h-8 overflow-hidden rounded-sm border bg-no-repeat bg-payment bg-paymentSize bg-[-273px_0]"></span>
          <span className="w-12 h-8 overflow-hidden rounded-sm border bg-no-repeat bg-payment bg-paymentSize bg-[-2px_0]"></span>
        </div>
      </div>
    </div>
  );
}
