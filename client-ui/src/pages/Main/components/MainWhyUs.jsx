import { Link } from "react-router-dom";

export default function MainWhyUs() {
  return (
    <section className="mb-5 p-5 bg-white border border-[#dedede] rounded-lg text-sm">
      <div className="pt-5 px-[50px] pb-[50px] text-center">
        <h4 className="text-lg font-bold m-0 p-0">
          Tại sao lại chọn PhongTro123.com?
        </h4>
        <p className="leading-[1.5] my-[14px]">
          Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào
          là trang web đứng top google về các từ khóa:
          <Link
            to="/cho-thue-phong-tro"
            title="Cho thuê phòng trọ"
            className="text-[#1266dd] hover:text-[#f60]">
            <strong>cho thuê phòng trọ</strong>
          </Link>
          , <strong>nhà trọ</strong>,{" "}
          <Link
            to="/nha-cho-thue"
            title="Cho thuê nhà nguyên căn"
            className="text-[#1266dd]">
            <strong>thuê nhà nguyên căn</strong>
          </Link>
          ,{" "}
          <Link
            to="/cho-thue-can-ho"
            title="Cho thuê căn hộ"
            className="text-[#1266dd]">
            <strong>cho thuê căn hộ</strong>
          </Link>
          ,{" "}
          <Link
            to="/tim-nguoi-o-ghep"
            title="Tìm người ở ghép"
            className="text-[#1266dd]">
            <strong>tìm người ở ghép</strong>
          </Link>
          ,{" "}
          <Link
            to="/cho-thue-mat-bang"
            title="Cho thuê mặt bằng"
            className="text-[#1266dd]">
            <strong>cho thuê mặt bằng</strong>
          </Link>
          ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều
          khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
        </p>
        <div className="flex w-full items-center">
          <div className="basis-1/4 max-w-[25%] float-left text-center flex flex-col">
            <span className="block mb-[5px] font-bold text-[21px]">
              116.998+
            </span>
            <span className="">Thành viên</span>
          </div>
          <div className="basis-1/4 max-w-[25%] float-left text-center flex flex-col">
            <span className="block mb-[5px] font-bold text-[21px]">
              103.348+
            </span>
            <span className="">Tin đăng</span>
          </div>
          <div className="basis-1/4 max-w-[25%] float-left text-center flex flex-col">
            <span className="block mb-[5px] font-bold text-[21px]">
              300.000+
            </span>
            <span className="">Lượt truy cập/tháng</span>
          </div>
          <div className="basis-1/4 max-w-[25%] float-left text-center flex flex-col">
            <span className="block mb-[5px] font-bold text-[21px]">
              2.500.000+
            </span>
            <span className="">Lượt xem/tháng</span>
          </div>
        </div>
        <h5 className="font-bold text-lg m-0 p-0 mt-8">
          Chi phí thấp, hiệu quả tối đa
        </h5>
        <div className="flex items-center justify-center my-[10px]"></div>
        <p className="leading-[1.5] italic my-[14px]">
          "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và
          chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và
          đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết
          website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả
          khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống
          kéo dài."
          <span className="font-normal block mt-[10px]">
            Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM)
          </span>
        </p>
        <h6 className="font-bold text-lg m-0 p-0 mt-8">
          Bạn đang có phòng trọ / căn hộ cho thuê?
        </h6>
        <p className="my-[14px] leading-[1.5]">
          Không phải lo tìm người cho thuê, phòng trống kéo dài
        </p>
        <Link
          className="h-10 rounded-[5px] border border-[#f73859] font-bold inline-block justify-center items-center m-0 py-[10px] px-[30px] bg-[#f73859] hover:underline text-white"
          rel="nofollow"
          to="https://phongtro123.com/quan-ly/dang-tin-moi.html">
          Đăng tin ngay
        </Link>
      </div>
    </section>
  );
}
