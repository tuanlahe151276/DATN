import { Link } from "react-router-dom";

export default function PaymentMethodUserItem({ item }) {
  return (
    <div className="basis-full md:basis-1/3 max-w-full md:max-w-[100%/3] px-4 relative">
      <div className="mr-0 mb-8 border border-[#ddd] overflow-hidden rounded-md group hover:border-[#0074e4] hover:shadow-methodItem">
        <Link
          to="https://phongtro123.com/quan-ly/nap-tien/chuyen-khoan.html"
          className="block w-full h-full text-center text-black">
          <div className="md:h-[120px] xl:h-36 flex items-center justify-center border-b-0 p-[10px]">
            <img
              className="max-w-40 max-h-20"
              src={
                item?.image ||
                "https://phongtro123.com/images/bank-transfer.png"
              }
              alt={item?.description || "Chuyển khoản trực tiếp"}
            />
          </div>
          <div className="group-hover:bg-[#0074e4] group-hover:text-white text-center py-[10px] border-t-0 font-bold bg-white">
            {item?.title || "Chuyển khoản"}
          </div>
        </Link>
      </div>
    </div>
  );
}
