import { Table } from "../../../../components";
import ContentNavbar from "../ContentNavbar";
import HeaderTitle from "../HeaderTitle";
const listTitle = [
  "Thời gian",
  "Loại hoạt động",
  "Mã tin đăng",
  "Loại tin",
  "Số dư",
  "Phí",
  "Còn lại",
  "Trạng thái",
];

export default function UserHistoryPayment() {
  return (
    <div className="w-full relative">
      <ContentNavbar navName={"Lịch sử thanh toán"} />
      <HeaderTitle title={"Lịch sử thanh toán"} />
      <Table listTitle={listTitle} />
    </div>
  );
}
