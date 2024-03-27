import { Link } from "react-router-dom";
import { Table } from "../../../../components";

export default function UserListPost() {
  const listTitle = [
    "Mã tin",
    "Ảnh đại diện",
    "Tiêu đề",
    "Giá",
    "Ngày bắt đầu",
    "Ngày hết hạn",
    "Trạng thái",
  ];
  return (
    <div className="hidden md:block">
      <div className="block w-full overflow-x-auto">
        <Table
          listTitle={listTitle}
          children={
            <tr className="w-full">
              <td className="border border-[#dee2e6] p-3" colSpan={7}>
                Bạn chưa có tin đăng nào. Bấm{" "}
                <Link
                  to="https://phongtro123.com/quan-ly/dang-tin-moi.html"
                  className="text-[#007bff]">
                  vào đây
                </Link>{" "}
                để bắt đầu đăng tin
              </td>
            </tr>
          }
        />
      </div>
    </div>
  );
}
