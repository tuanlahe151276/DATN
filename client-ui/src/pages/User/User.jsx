import { UserContent, UserNavbar, UserSidebar } from "./components";

export default function User() {
  return (
    <div className="w-full h-full min-h-screen relative">
      <UserNavbar />
      <div className="flex w-full">
        <UserSidebar />
        <UserContent />
      </div>
    </div>
  );
}
