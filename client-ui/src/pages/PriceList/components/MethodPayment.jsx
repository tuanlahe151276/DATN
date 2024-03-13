import { PaymentMethodItem } from "../../../components";
import { paymentList } from "../../../utils/data";

export default function MethodPayment() {
  return (
    <section className="p-0 border-none mb-20 rounded-md bg-white w-full">
      <div className="text-center mb-12 text-[28px] font-bold">
        Phương thức thanh toán
      </div>
      <div className="w-full flex flex-wrap -mx-[15px]">
        {paymentList?.map((item, index) => (
          <PaymentMethodItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
