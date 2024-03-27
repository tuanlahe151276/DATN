import ContentNavbar from "../ContentNavbar";
import HeaderTitle from "../HeaderTitle";
import UserRechargeLeft from "./UserRechargeLeft";
import UserRechargeRight from "./UserRechargeRight";

export default function UserRecharge() {
  return (
    <div className="w-full relative">
      <ContentNavbar navName={"Nạp tiền"} />
      <HeaderTitle title={"Nạp tiền vào tài khoản"} />
      <div className="flex flex-wrap -mx-4">
        <UserRechargeLeft />
        <UserRechargeRight />
      </div>
    </div>
  );
}
