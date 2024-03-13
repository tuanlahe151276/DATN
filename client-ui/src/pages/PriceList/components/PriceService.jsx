import { IconTickGreen, IconXRed } from "../../../assets/images";
import { ButtonPrimary } from "../../../components";
import BodyItem from "./BodyItem";
import TitleItem from "./TitleItem";

export default function PriceService() {
  return (
    <div className="w-full ">
      <section className="py-12 px-0 border-none mb-5 rounded-lg bg-transparent">
        <div className="mt-0 mb-4">
          <div className="text-center mb-0 text-[28px] font-bold m-0 p-0">
            Bảng giá dịch vụ
          </div>
          <p className="mt-0 mb-8 text-center">Áp dụng từ ngày 19/01/2024</p>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="w-full my-0 text-center flex flex-col gap-y-4">
            <p>
              Phongtro123 xin quý khách hàng thân thương được phép điều chỉnh
              giá dịch vụ.
            </p>
            <p>
              VÌ - Giờ đây sau hơn 7 năm chúng tôi mong mỏi hơn sự đồng lòng,
              thấu hiểu từ phía khách hàng thân thương. Chúng tôi luôn mong muốn
              đem lại trải nghiệm tốt hơn, hoàn hảo hơn cho quý khách hàng trong
              suốt thời gian gắn bó. Chúng tôi quyết định điều chỉnh giá, để tồn
              tại và trên cả là phục vụ hết mình vì quý khách hàng đã, đang và
              sẽ đồng hành tại website.
            </p>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-white border-none w-[12.5%] text-left py-[10px] px-4" />
                <TitleItem
                  className="bg-[#E13427]"
                  title="Tin VIP nổi bật"
                  star={5}
                />
                <TitleItem
                  className="bg-[#ea2e9d]"
                  title="Tin VIP 1"
                  star={4}
                />
                <TitleItem
                  className="bg-[#FF6600]"
                  title="Tin VIP 2"
                  star={3}
                />
                <TitleItem
                  className="bg-[#007BFF]"
                  title="Tin VIP 3"
                  star={2}
                />
                <TitleItem className="bg-[#055699]" title="Tin thường" />
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <BodyItem children={<strong>Ưu điểm</strong>} />
                <BodyItem
                  children={
                    <>
                      <p>
                        - Lượt xem nhiều gấp <strong>30 lần</strong> so với tin
                        thường
                      </p>
                      <p>
                        - Ưu việt, tiếp cận <strong>tối đa</strong> khách hàng.
                      </p>
                      <p>
                        - Xuất hiện vị trí <strong>đầu tiên ở trang chủ</strong>
                      </p>
                      <p>
                        - Đứng <strong>trên tất cả</strong> các loại tin VIP
                        khác
                      </p>
                      <p>
                        - Xuất hiện <strong>đầu tiên</strong> ở mục tin nổi bật
                        xuyên suốt khu vực chuyên mục đó.{" "}
                        <a target="_blank" href="#!">
                          <img
                            style={{ display: "inline-block" }}
                            src=""
                            width={15}
                            height={15}
                            alt=""
                          />
                        </a>
                      </p>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <p>
                        - Lượt xem nhiều gấp <strong>15 lần</strong> so với tin
                        thường
                      </p>
                      <p>
                        - Tiếp cận <strong>rất nhiều</strong> khách hàng.{" "}
                      </p>
                      <p>
                        - Xuất hiện <strong>sau VIP NỔI BẬT</strong> và{" "}
                        <strong>trước Vip 2, Vip 3, tin thường</strong>.
                      </p>
                      <p>
                        - Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực
                        chuyên mục đó.{" "}
                        <a target="_blank" href="#!">
                          <img
                            style={{ display: "inline-block" }}
                            src=""
                            width={15}
                            height={15}
                            alt=""
                          />
                        </a>
                      </p>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <p>
                        - Lượt xem nhiều gấp <strong>10 lần</strong> so với tin
                        thường
                      </p>
                      <p>
                        - Tiếp cận khách hàng <strong>rất tốt</strong>.
                      </p>
                      <p>
                        - Xuất hiện <strong>sau VIP 1</strong> và{" "}
                        <strong>trước VIP 3, tin thường</strong>.
                      </p>
                      <p>
                        - Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực
                        chuyên mục đó.{" "}
                        <a target="_blank" href="#!">
                          <img
                            style={{ display: "inline-block" }}
                            src=""
                            width={15}
                            height={15}
                            alt=""
                          />
                        </a>
                      </p>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <p>
                        - Lượt xem nhiều gấp <strong>5 lần</strong> so với tin
                        thường
                      </p>
                      <p>
                        - Tiếp cận khách hàng <strong>tốt</strong>.
                      </p>
                      <p>
                        - Xuất hiện <strong>sau VIP 2</strong> và{" "}
                        <strong>trước tin thường</strong>.
                      </p>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <p>
                        - Tiếp cận khách hàng <strong>khá tốt</strong>.
                      </p>
                      <p>
                        - Xuất hiện <strong>sau các loại tin VIP</strong>.
                      </p>
                    </>
                  }
                />
              </tr>
              <tr className="text-[13px]">
                <BodyItem children={<strong>Phù hợp</strong>} nowrap />
                <BodyItem
                  children={
                    <p>
                      - Phù hợp khách hàng là công ty/cá nhân sở hữu hệ thống
                      lớn có từ 15-20 căn phòng/nhà trở lên hoặc phòng trống quá
                      lâu, thường xuyên đang cần <strong>cho thuê gấp</strong>.
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      - Phù hợp khách hàng cá nhân/môi giới có 10-15 căn
                      phòng/nhà đang trống thường xuyên, cần{" "}
                      <strong>cho thuê nhanh nhất</strong>.
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      - Phù hợp khách hàng cá nhân/môi giới có lượng căn trống
                      thường xuyên, cần <strong>cho thuê nhanh hơn</strong>.
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      - Phù hợp loại hình phòng trọ chung chủ, KTX ở ghép hay
                      khách hàng có 1-5 căn phòng/nhà cần cho thuê nhanh,{" "}
                      <strong>tiếp cận khách hàng tốt hơn</strong>.
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      - Phù hợp tất cả các loại hình tuy nhiên lượng tiếp cận{" "}
                      <strong>khách hàng thấp hơn</strong> và{" "}
                      <strong>cho thuê chậm hơn so</strong> với tin VIP.
                    </p>
                  }
                />
              </tr>
              <tr>
                <BodyItem children={<strong>Giá ngày</strong>} nowrap />
                <BodyItem
                  children={
                    <>
                      <span className="text-[21px] font-bold">80.000đ</span>
                      <span style={{ display: "block", fontSize: "0.8rem" }}>
                        (Tối thiểu 5 ngày)
                      </span>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <span className="text-[21px] font-bold">40.000đ</span>
                      <span style={{ display: "block", fontSize: "0.8rem" }}>
                        (Tối thiểu 5 ngày)
                      </span>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <span className="text-[21px] font-bold">20.000đ</span>
                      <span style={{ display: "block", fontSize: "0.8rem" }}>
                        (Tối thiểu 5 ngày)
                      </span>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <span className="text-[21px] font-bold">10.000đ</span>
                      <span style={{ display: "block", fontSize: "0.8rem" }}>
                        (Tối thiểu 5 ngày)
                      </span>
                    </>
                  }
                />
                <BodyItem
                  children={
                    <>
                      <span className="text-[21px] font-bold">2.000đ</span>
                      <span style={{ display: "block", fontSize: "0.8rem" }}>
                        (Tối thiểu 5 ngày)
                      </span>
                    </>
                  }
                />
              </tr>
              <tr>
                <BodyItem
                  children={<strong>Giá tuần (7 ngày)</strong>}
                  nowrap
                />
                <BodyItem
                  children={<span className="text-lg font-bold">560.000đ</span>}
                />
                <BodyItem
                  children={<span className="text-lg font-bold">280.000đ</span>}
                />
                <BodyItem
                  children={<span className="text-lg font-bold">140.000đ</span>}
                />
                <BodyItem
                  children={<span className="text-lg font-bold">70.000đ</span>}
                />
                <BodyItem
                  children={<span className="text-lg font-bold">14.000đ</span>}
                />
              </tr>
              <tr>
                <BodyItem
                  children={
                    <>
                      <strong>Giá tháng (30 ngày)</strong>
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.8rem",
                          color: "#4caf50",
                        }}>
                        Rẻ hơn 10% so với giá ngày
                      </span>
                    </>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <>
                      <span
                        style={{
                          display: "block",
                          textDecoration: "line-through",
                          color: "red",
                        }}>
                        2.400.000đ
                      </span>
                      <span style={{ display: "block", color: "#4caf50" }}>
                        Giảm 25% chỉ còn
                      </span>
                      <span className="text-base font-bold">1.800.000đ</span>
                    </>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <>
                      <span
                        style={{
                          display: "block",
                          textDecoration: "line-through",
                          color: "red",
                        }}>
                        1.200.000đ
                      </span>
                      <span style={{ display: "block", color: "#4caf50" }}>
                        Giảm 25% chỉ còn
                      </span>
                      <span className="text-base font-bold">900.000đ</span>
                    </>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <>
                      <span
                        style={{
                          display: "block",
                          textDecoration: "line-through",
                          color: "red",
                        }}>
                        600.000đ
                      </span>
                      <span style={{ display: "block", color: "#4caf50" }}>
                        Giảm 25% chỉ còn
                      </span>
                      <span className="text-base font-bold">450.000đ</span>
                    </>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <>
                      <span
                        style={{
                          display: "block",
                          textDecoration: "line-through",
                          color: "red",
                        }}>
                        300.000đ
                      </span>
                      <span style={{ display: "block", color: "#4caf50" }}>
                        Giảm 25% chỉ còn
                      </span>
                      <span className="text-base font-bold">225.000đ</span>
                    </>
                  }
                  nowrap
                />
                <BodyItem
                  nowrap
                  children={
                    <>
                      <span
                        style={{
                          display: "block",
                          textDecoration: "line-through",
                          color: "red",
                        }}>
                        60.000đ
                      </span>
                      <span style={{ display: "block", color: "#4caf50" }}>
                        Giảm 25% chỉ còn
                      </span>
                      <span className="text-base font-bold">45.000đ</span>
                    </>
                  }
                />
              </tr>
              <tr>
                <BodyItem children={<strong>Giá đẩy tin</strong>} nowrap />
                <BodyItem children={<>40.000 đ</>} nowrap />
                <BodyItem children={<>25.000 đ</>} nowrap />
                <BodyItem children={<>15.000 đ</>} nowrap />
                <BodyItem children={<>10.000 đ</>} nowrap />
                <BodyItem children={<>2.000 đ</>} nowrap />
              </tr>
              <tr>
                <BodyItem
                  children={<strong>Màu sắc tiêu đề</strong>}
                  nowrap
                  style={{ verticalAlign: "middle" }}
                />
                <BodyItem
                  children={
                    <p>
                      <span style={{ color: "#E13427", fontWeight: "bold" }}>
                        TIÊU ĐỀ MÀU ĐỎ, IN HOA
                      </span>
                    </p>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <p>
                      <span style={{ color: "#ea2e9d", fontWeight: "bold" }}>
                        TIÊU ĐỀ MÀU HỒNG, IN HOA
                      </span>
                    </p>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <p>
                      <span style={{ color: "#FF6600", fontWeight: "bold" }}>
                        TIÊU ĐỀ MÀU CAM, IN HOA
                      </span>
                    </p>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <p>
                      <span style={{ color: "#007BFF", fontWeight: "bold" }}>
                        TIÊU ĐỀ MÀU XANH, IN HOA
                      </span>
                    </p>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <p>
                      <span style={{ color: "#055699", fontWeight: "bold" }}>
                        Tiêu đề màu mặc định, viết thường
                      </span>
                    </p>
                  }
                  nowrap
                />
              </tr>
              <tr>
                <BodyItem
                  children={<strong>Tự động duyệt</strong>}
                  nowrap
                  style={{ verticalAlign: "middle" }}
                />
                <BodyItem
                  children={
                    <p>
                      <img
                        style={{ margin: "0 auto" }}
                        src={IconTickGreen}
                        alt=""
                      />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img
                        style={{ margin: "0 auto" }}
                        src={IconTickGreen}
                        alt=""
                      />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img
                        style={{ margin: "0 auto" }}
                        src={IconTickGreen}
                        alt=""
                      />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img
                        style={{ margin: "0 auto" }}
                        src={IconTickGreen}
                        alt=""
                      />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />
              </tr>
              <tr className="text-sm">
                <BodyItem
                  children={
                    <strong>
                      Hiển thị số điện thoại
                      <br /> ở trang danh sách
                    </strong>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img
                        style={{ margin: "0 auto" }}
                        src={IconTickGreen}
                        alt=""
                      />
                    </p>
                  }
                />{" "}
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />{" "}
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />{" "}
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />
              </tr>
              <tr className="text-sm">
                <BodyItem
                  children={<strong>Huy hiệu nổi bật</strong>}
                  style={{ verticalAlign: "middle" }}
                />
                <BodyItem
                  children={
                    <p>
                      <img
                        style={{ margin: "0 auto" }}
                        src={IconTickGreen}
                        alt=""
                      />
                    </p>
                  }
                  nowra
                />
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                  nowrap
                />
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />
                <BodyItem
                  children={
                    <p>
                      <img style={{ margin: "0 auto" }} src={IconXRed} alt="" />
                    </p>
                  }
                />
              </tr>
              <tr>
                <BodyItem
                  style={{ background: "#fff", borderBottom: 0 }}
                  children={<></>}
                />

                <BodyItem
                  style={{ background: "#fff", borderBottom: 0 }}
                  children={
                    <ButtonPrimary title="Xem demo" href="#item-type-5" />
                  }
                />
                <BodyItem
                  style={{ background: "#fff", borderBottom: 0 }}
                  children={<ButtonPrimary title="Xem demo" href="" />}
                />
                <BodyItem
                  style={{ background: "#fff", borderBottom: 0 }}
                  children={<ButtonPrimary title="Xem demo" href="" />}
                />
                <BodyItem
                  style={{ background: "#fff", borderBottom: 0 }}
                  children={<ButtonPrimary title="Xem demo" href="" />}
                />
                <BodyItem
                  style={{ background: "#fff", borderBottom: 0 }}
                  children={<ButtonPrimary title="Xem demo" href="" />}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
