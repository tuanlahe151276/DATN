import {
  AsideSection,
  ListLink,
  ListNewPost,
  NewsItem,
} from "../../components";
import {
  canCareList,
  listNews,
  newPostCatalog,
  rentalCatalog,
} from "../../utils/data";
import PaginationContent from "../Main/components/MainContent/PaginationContent";

export default function News() {
  return (
    <div className="w-full flex justify-between">
      {/* content */}
      <div className="w-[850px]">
        <section className="mb-5 p-5 bg-white border border-[#dedede] rounded-lg">
          <ul className="w-full">
            {listNews?.map((item, index) => (
              <NewsItem item={item} key={index} />
            ))}
          </ul>
          <PaginationContent />
        </section>
      </div>
      {/* aside */}
      <aside className="w-[400px]">
        <AsideSection
          children={<ListLink items={rentalCatalog} />}
          title="Danh mục cho thuê"
        />
        <AsideSection
          children={<ListNewPost items={newPostCatalog} />}
          title="Tin mới đăng"
        />
        <AsideSection
          children={<ListLink items={canCareList} />}
          title="Có thể bạn quan tâm"
        />
      </aside>
    </div>
  );
}
