import FooterLinkItem from "./FooterLinkItem";

export default function FooterLink() {
  return (
    <div className="w-full mb-5 border-b-[1px] border-b-[#ddd] py-5 flex justify-between">
      <FooterLinkItem
        name="Cho thuê phòng trọ, nhà trọ"
        list={[
          { href: "aaa", name: "Cho thuê phòng trọ Hồ Chí Minh" },
          { href: "aaa", name: "Cho thuê phòng trọ Hồ Chí Minh" },
        ]}
      />
      <FooterLinkItem name="Cho thuê nhà nguyên căn" />
      <FooterLinkItem name="Cho thuê căn hộ" />
      <FooterLinkItem name="Cho thuê mặt bằng" />
      <FooterLinkItem name="Tìm người ở ghép" />
    </div>
  );
}
