import ContentNavbar from "../ContentNavbar";
import UserListPost from "./UserListPost";
import UserManagePostHeader from "./UserManagePostHeader";

export default function UserManagePost() {
  return (
    <div className="w-full relative">
      <ContentNavbar navName={"Danh sách tin đăng"} />
      <UserManagePostHeader />
      <UserListPost />
    </div>
  );
}
