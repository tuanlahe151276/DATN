import { AiOutlineCheck } from "react-icons/ai";
export default function PriceIntro() {
  return (
    <section className="w-full p-5 border-none mb-5 bg-white rounded-lg">
      <div className="w-full flex flex-col gap-y-4 text-justify">
        <p>
          ĐỪNG ĐỂ PHÒNG TRỐNG THÊM BẤT CỨ NGÀY NÀO!, đăng tin ngay tại
          PHONGTRO123.COM và tất cả các vấn đề sẽ được giải quyết một cách nhanh
          nhất.
        </p>
        <p>ƯU ĐIỂM PHONGTRO123:</p>

        <p className="flex items-center">
          <AiOutlineCheck className="text-green-500 text-[20px] min-w-10" />
          <span>
            <strong> Top đầu google</strong> về từ khóa: cho thuê phòng trọ,
            thuê phòng trọ, phòng trọ hồ chí minh, phòng trọ hà nội, thuê nhà
            nguyên căn, cho thuê căn hộ, tìm người ở ghép…với lưu lượng truy cập
            (traffic) cao nhất trong lĩnh vực.
          </span>
        </p>
        <p className="flex items-center">
          <AiOutlineCheck className="text-green-500 text-[20px] min-w-10" />
          <span>
            Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh
            vực cho thuê phòng trọ với hơn <strong> 103.348</strong> tin trên hệ
            thống và tiếp tục tăng.
          </span>
        </p>
        <p className="flex items-center">
          <AiOutlineCheck className="text-green-500 text-[20px] min-w-10" />
          <span>
            Phongtro123.com tự hào có số lượng người dùng lớn nhất trong lĩnh
            vực cho thuê phòng trọ với hơn <strong> 300.000</strong> khách truy
            cập thường xuyên và hơn <strong> 2.500.000</strong> lượt pageview
            mỗi tháng.
          </span>
        </p>
        <p className="flex items-center">
          <AiOutlineCheck className="text-green-500 text-[20px] min-w-10" />
          <span>
            Phongtro123.com tự hào được sự tin tưởng sử dụng của hơn
            <strong> 116.998 khách hàng</strong> là chủ nhà, đại lý, môi giới
            đăng tin thường xuyên tại website.
          </span>
        </p>
        <p className="flex items-center">
          <AiOutlineCheck className="text-green-500 text-[20px] min-w-10" />
          <span>
            Phongtro123.com tự hào ghi nhận <strong>88.879</strong> giao dịch
            thành công khi sử dụng dịch vụ tại web, mức độ
            <strong> hiệu quả đạt xấp xỉ 85% tổng tin đăng</strong>.
          </span>
        </p>
      </div>
    </section>
  );
}
