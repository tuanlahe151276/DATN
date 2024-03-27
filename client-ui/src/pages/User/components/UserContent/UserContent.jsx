import { Route, Routes } from "react-router-dom";
import ROUTER from "../../../../routers";
import {
  UserManagePost,
  UserProfile,
  UserRecharge,
  UserHistoryRecharge,
  UserHistoryPayment,
  UserContact,
} from "../../components";
export default function UserContent() {
  return (
    <main className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 min-h-[calc(100vh-2rem)] w-full py-4 px-12 shadow-xl shadow-blue-gray-900/5">
      <Routes>
        <Route path={ROUTER.QUAN_LY_TIN_DANG} element={<UserManagePost />} />
        <Route path={ROUTER.THONG_TIN_CA_NHAN} element={<UserProfile />} />
        <Route
          path={ROUTER.NAP_TIEN_VAO_TAI_KHOAN}
          element={<UserRecharge />}
        />
        <Route
          path={ROUTER.LICH_SU_NAP_TIEN}
          element={<UserHistoryRecharge />}
        />
        <Route
          path={ROUTER.LICH_SU_THANH_TOAN}
          element={<UserHistoryPayment />}
        />
        <Route path={ROUTER.LIEN_HE} element={<UserContact />} />
      </Routes>
    </main>
  );
}
