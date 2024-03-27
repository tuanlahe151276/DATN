import { PaymentMethodUserItem } from "../../../../components";

export default function UserRechargeLeft() {
  return (
    <div className="basis-full max-w-full md:basis-3/4 md:max-w-[75%] px-4 relative min-h-1">
      <h3 className="mb-4 mt-12 text-lg font-medium">
        Mời bạn chọn phương thức nạp tiền
      </h3>
      <div className="w-full flex flex-wrap m-0 p-0 border-none -mx-4">
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
        <PaymentMethodUserItem />
      </div>
    </div>
  );
}
