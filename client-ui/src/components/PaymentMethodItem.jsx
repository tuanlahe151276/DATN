import { Link } from "react-router-dom";

export default function PaymentMethodItem({ item }) {
  return (
    <div className="mb-6 px-[15px] basis-1/2 max-w-[50%] md:basis-1/3 md:max-w-[100%/3] xl:basis-1/4 xl:max-w-[25%]">
      <div className="p-5 rounded-lg shadow bg-white">
        <Link
          className="flex items-center justify-center flex-wrap w-full h-[120px] text-center text-black"
          href={
            item?.href ||
            "https://phongtro123.com/quan-ly/nap-tien/atm-internet-banking.html"
          }>
          <div className="w-full h-[70px] flex items-center justify-center border-b-0 p-[10px]">
            <img
              className="max-h-16 max-w-40 rounded"
              src={
                item?.image ||
                "https://phongtro123.com/images/payment-method.svg"
              }
              alt={item?.description || "Nạp tiền bằng ATM Internet Banking"}
            />
          </div>
          <div className="text-center py-[10px] border-t-0 font-semibold">
            {item?.name || "Thẻ ATM Internet Banking"}
          </div>
        </Link>
      </div>
    </div>
  );
}
