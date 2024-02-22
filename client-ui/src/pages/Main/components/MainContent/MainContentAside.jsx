import { AsideSection, ListLink, ListNewPost } from "../../../../components";
import {
  acreageCatalog,
  canCareList,
  newPostCatalog,
  newPostList,
  priceCatalog,
  rentalCatalog,
} from "../../../../utils/data";

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
        children={<ListLink items={acreageCatalog} notFullWidth />}
        title="Xem theo diện tích"
      />
      <AsideSection
        children={<ListNewPost items={newPostCatalog} />}
        title="Tin mới đăng"
      />
      <AsideSection
        children={<ListLink items={newPostList} />}
        title="Bài viết mới"
      />
      <AsideSection
        children={<ListLink items={canCareList} />}
        title="Có thể bạn quan tâm"
      />
    </aside>
  );
}
