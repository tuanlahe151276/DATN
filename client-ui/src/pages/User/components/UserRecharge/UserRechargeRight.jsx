import ROUTER from "../../../../routers";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
const listItem = [
  {
    title: "Lịch sử nạp tiền",
    href: ROUTER.LICH_SU_NAP_TIEN,
  },
  {
    title: "Lịch sử thanh toán",
    href: ROUTER.LICH_SU_THANH_TOAN,
  },
  {
    title: "Bảng giá dịch vụ",
    href: ROUTER.BANG_GIA_DICH_VU,
  },
];
export default function UserRechargeRight() {
  return (
    <div className="hidden md:block md:basis-1/4 md:max-w-[25%] relative w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white border border-gray-400 rounded mb-4">
        <div className="flex-1 basis-auto p-5">
          <div>Số dư tài khoản</div>
          <h3 className="mt-0 mb-0 text-[#28a745] text-base font-medium">
            <strong>0đ</strong>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {listItem?.map((item, index) => (
          <Link
            className="flex items-center justify-center gap-x-2 w-full text-white bg-[#6c757d] border-[#6c757d] text-center font-normal whitespace-nowrap text-sm rounded border px-3 py-2"
            to={`/user/${item?.href}`}
            key={index}>
            <span>{item?.title}</span>
            <MdArrowForwardIos className="text-[12px]" />
          </Link>
        ))}
      </div>
    </div>
  );
}
