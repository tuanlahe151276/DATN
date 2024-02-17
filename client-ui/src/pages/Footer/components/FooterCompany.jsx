import * as Image from "../../../assets/images";

export default function FooterCompany() {
  return (
    <div className="text-center border-t-[1px] border-t-[#ddd] pt-5 flex flex-col gap-y-[13px]">
      <p>
        <strong>CÔNG TY TNHH LBKCORP</strong>
      </p>
      <p>
        <strong>Tổng đài CSKH: 0917686101</strong>
      </p>
      <p>Copyright © 2015 - 2024 Phongtro123.com</p>
      <p>Email: cskh.phongtro123@gmail.com</p>
      <p>
        Địa chỉ: LD - 02.06, Toà nhà Lexington Residence, Số 67 Mai Chí Thọ,
        Phường An Phú, Quận 2, Tp. Hồ Chí Minh
      </p>
      <p>
        Giấy phép đăng ký kinh doanh số 0313588502 do Sở kế hoạch và Đầu tư
        thành phố Hồ Chí Minh cấp ngày 24 tháng 12 năm 2015.
      </p>
      <div className="w-full flex items-center justify-center">
        <a
          href="/"
          rel="nofollow noreferrer"
          title=""
          target="_blank"
          className="mx-[5px] inline-block w-[133px] h-[50px]">
          <img
            className="object-contain block max-w-full max-h-full rounded-[3px]"
            src={Image?.LogoBCT}
            alt={"bo cong thuong"}
          />
        </a>
        <a
          href="/"
          rel="nofollow noreferrer"
          title=""
          target="_blank"
          className="mx-[5px] inline-block w-[133px] h-[50px]">
          <img
            className="object-contain block max-w-full max-h-full rounded-[3px]"
            src={Image?.DMCABadge}
            alt={"DMCA"}
          />
        </a>
      </div>
    </div>
  );
}
