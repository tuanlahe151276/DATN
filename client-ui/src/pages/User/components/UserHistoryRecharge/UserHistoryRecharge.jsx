import { Table } from "../../../../components";
import ContentNavbar from "../ContentNavbar";
import HeaderTitle from "../HeaderTitle";

export default function UserHistoryRecharge() {
  const listTitle = [
    "Ngày nạp",
    "Mã giao dịch",
    "Phương thức",
    "Số tiền",
    "Khuyến mãi",
    "Thực nhận",
    "Trạng thái",
    "Ghi chú",
  ];

  return (
    <div className="w-full relative">
      <ContentNavbar navName={"Lịch sử nạp tiền"} />
      <HeaderTitle title={"Lịch sử nạp tiền"} />
      <Table listTitle={listTitle} />
    </div>
  );
}
