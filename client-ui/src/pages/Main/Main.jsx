import { Route, Routes } from "react-router-dom";
import {
  MainContent,
  MainHeader,
  MainSearch,
  MainSupport,
  MainTopLocation,
  MainWhyUs,
} from "./components";
import ROUTER from "../../routers";
import News from "../News/News";
import PriceList from "../PriceList/PriceList";

export default function Main() {
  return (
    <main className="container mx-auto px-1 md:px-2 lg:px-0 max-w-[1280px] z-[1] relative min-h-screen my-[10px]">
      <Routes>
        <Route
          path={ROUTER.HOME}
          element={
            <>
              <MainSearch />
              <MainHeader
                title="Tìm kiếm chỗ thuê ưng ý"
                description="Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng."
              />
              <MainTopLocation />
              <MainContent />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route
          path={ROUTER.CHO_THUE_PHONG_TRO}
          element={
            <>
              <MainSearch />
              <MainHeader
                title="Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2024"
                description="Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2024. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam."
                navLink={ROUTER.CHO_THUE_PHONG_TRO}
                navName="Cho thuê phòng trọ"
              />
              <MainTopLocation />
              <MainContent />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route
          path={ROUTER.NHA_CHO_THUE}
          element={
            <>
              <MainSearch />
              <MainHeader
                title="Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2024"
                description="Cho thuê nhà nguyên căn, nhà riêng: giá rẻ, chính chủ, đầy đủ tiện nghi. Tìm thuê nhà với nhiều mức giá khác nhau, đa dạng loại diện tích. Đăng tin cho thuê nhà nhanh, hiệu quả tại phongtro123.com"
                navLink={ROUTER.NHA_CHO_THUE}
                navName="Cho thuê nhà"
              />
              <MainTopLocation />
              <MainContent />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route
          path={ROUTER.CHO_THUE_CAN_HO}
          element={
            <>
              <MainSearch />
              <MainHeader
                title="Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất 2024"
                description="Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau."
                navLink={ROUTER.CHO_THUE_CAN_HO}
                navName="Cho thuê căn hộ"
              />
              <MainTopLocation />
              <MainContent />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route
          path={ROUTER.MAT_BANG}
          element={
            <>
              <MainSearch />
              <MainHeader
                title="Cho Thuê Mặt Bằng, Văn Phòng Kinh Doanh, Giá Rẻ, Mới Nhất 2024"
                description="Có 3.005 tin đăng cho thuê mặt bằng, văn phòng kinh doanh. Giá rẻ, gần chợ, trường học, tiện mở quán ăn, cafe. Đăng tin mặt bằng, văn phòng hiệu quả tại Phongtro123.com"
                navLink={ROUTER.MAT_BANG}
                navName="Cho thuê mặt bằng, văn phòng"
              />
              <MainTopLocation />
              <MainContent />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route
          path={ROUTER.TIM_NGUOI_O_GHEP}
          element={
            <>
              <MainSearch />
              <MainHeader
                title="Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất 2024"
                description="Tìm người ở ghép, tìm nam ở ghép, tìm nữ ở ghép, share phòng trọ, tìm chỗ ở ghép cùng, tìm bạn ở ghép, xin ở ghép mới nhất 2024. Đăng tin ở ghép hiệu quả, nhanh chóng nhất..."
                navLink={ROUTER.TIM_NGUOI_O_GHEP}
                navName="Tìm người ở ghép"
              />
              <MainTopLocation />
              <MainContent />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route
          path={ROUTER.TIN_TUC}
          element={
            <>
              <MainHeader
                title="Tin Tức"
                navLink={ROUTER.TIN_TUC}
                navName="Tin Tức"
              />
              <News />
              <MainWhyUs />
              <MainSupport />
            </>
          }
        />
        <Route path={ROUTER.BANG_GIA_DICH_VU} element={<PriceList />} />
      </Routes>
    </main>
  );
}
