import { AsideSection, ListLink } from "../../../../components";
import { priceCatalog, rentalCatalog } from "../../../../utils/data";

export default function MainContentAside() {
  return (
    <aside className="w-[400px]">
      <AsideSection
        children={<ListLink items={rentalCatalog} />}
        title="Danh mục cho thuê"
      />
      <AsideSection
        children={<ListLink items={priceCatalog} notFullWidth />}
        title="Xem theo giá"
      />
      <AsideSection
        children={<ListLink items={priceCatalog} notFullWidth />}
        title="Xem theo diện tích"
      />
    </aside>
  );
}
