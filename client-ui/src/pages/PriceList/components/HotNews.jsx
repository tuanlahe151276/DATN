import { Rating } from "../../../components";

export default function HotNews() {
  return (
    <section className="py-12 border-none bg-transparent mb-5">
      <div className="mt-0 mb-4">
        <div className="font-bold text-center mb-12 text-[28px] m-0 p-0">
          Minh họa tin đăng
        </div>
      </div>
      <div className="w-full">
        <div className="mt-0 mx-auto mb-12" id="item-type-5">
          <div className="w-full flex flex-col gap-y-3">
            <div className="m-0 p-0 font-bold text-lg ">
              Tin VIP nổi bật
              <Rating star={5} />
            </div>
            <p>
              <span style={{ color: "#E13427", fontWeight: "bold" }}>
                TIÊU ĐỀ IN HOA MÀU ĐỎ
              </span>
              , gắn biểu tượng 5 ngôi sao màu vàng và hiển thị to và nhiều hình
              hơn các tin khác. Nằm trên tất cả các tin khác, được hưởng nhiều
              ưu tiên và hiệu quả giao dịch cao nhất.
            </p>
            <p>
              Đồng thời xuất hiện đầu tiên ở mục tin nổi bật xuyên suốt khu vực
              chuyên mục đó
            </p>
          </div>
          <img
            src="https://phongtro123.com/images/demo-vipnoibat.jpg"
            alt="Tin VIP nổi bật"
          />
        </div>
        <div className="mt-0 mx-auto mb-12" id="item-type-4">
          <div className="w-full flex flex-col gap-y-3">
            <div className="m-0 p-0 font-bold text-lg">
              Tin VIP 1 <Rating star={4} />
            </div>
            <p>
              <span className="text-[#ea2e9d] font-bold uppercase">
                TIÊU ĐỀ IN HOA MÀU HỒNG
              </span>
              , gắn biểu tượng 4 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị
              sau tin VIP nổi bật, Tin VIP 1 và trên các tin khác.
            </p>
          </div>
          <img
            src="https://phongtro123.com/images/demo-vip1.jpg"
            alt="Tin VIP 1"
          />
        </div>
        <div className="mt-0 mx-auto mb-12" id="item-type-3">
          <div className="w-full flex flex-col gap-y-3">
            <div className="m-0 p-0 font-bold text-lg">
              Tin VIP 2<Rating star={3} />
            </div>
            <p>
              <span className="text-[#FF6600] font-bold uppercase">
                TIÊU ĐỀ IN HOA MÀU CAM
              </span>
              , gắn biểu tượng 3 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị
              sau tin VIP nổi bật, Tin VIP 1, Tin VIP 2 và trên các tin khác.
            </p>
          </div>
          <img
            src="https://phongtro123.com/images/demo-vip2.jpg"
            alt="Tin VIP 2"
          />
        </div>
        <div className="mt-0 mx-auto mb-12" id="item-type-2">
          <div className="w-full flex flex-col gap-y-3">
            <div className="m-0 p-0 font-bold text-lg">
              Tin VIP 3 <Rating star={2} />
            </div>
            <p>
              <span className="text-[#007BFF] font-bold uppercase">
                TIÊU ĐỀ IN HOA MÀU XANH
              </span>
              , gắn biểu tượng 2 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị
              sau tin VIP nổi bật, Tin VIP 1, Tin VIP 2, Tin VIP 3 và trên các
              tin khác.
            </p>
          </div>
          <img
            src="https://phongtro123.com/images/demo-vip3.jpg"
            alt="Tin VIP 3"
          />
        </div>
        <div className="mt-0 mx-auto mb-12" id="item-type-1">
          <div className="w-full flex flex-col gap-y-3">
            <div className="m-0 p-0 font-bold text-lg">Tin thường</div>
            <p>
              <span className="text-[#055699] font-bold uppercase">
                Tiêu đề màu mặc định
              </span>
              . Hiển thị sau các tin VIP.
            </p>
          </div>
          <img
            src="https://phongtro123.com/images/demo-tinthuong.jpg"
            alt="Tin thường"
          />
        </div>
      </div>
    </section>
  );
}
