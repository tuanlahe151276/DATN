import { Link } from "react-router-dom";
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
import ROUTER from "../../routers";
import { useState } from "react";

export default function NewsDetail() {
  const [post, setPost] = useState(null);
  return (
    <div className="w-full flex justify-between">
      {/* content */}
      <div className="w-[850px]">
        <article className="mb-12 text-base rounded-lg p-5 border border-[#dedede]">
          <header className="mb-4 text-[#333]">
            <div className="flex items-center text-sm gap-x-1 mb-1">
              <Link
                to={ROUTER.HOME}
                className="text-blue-600 hover:text-orange-600">
                Trang chủ
              </Link>
              <span>&gt;</span>
              <Link
                to={ROUTER.TIN_TUC}
                className="text-blue-600 hover:text-orange-600">
                Tin tức
              </Link>
              <span>&gt;</span>
              <Link
                to={post?.href}
                className="text-blue-600 hover:text-orange-600">
                {post?.title}
              </Link>
            </div>
          </header>
        </article>
        <section className="mb-5 p-5 bg-white border border-[#dedede] rounded-lg">
          <div className="mt-0 mb-4">
            <span className="text-lg font-bold">Có thể bạn quan tâm</span>
          </div>
          <ul className="w-full">
            {listNews?.slice(0, 5)?.map((item, index) => (
              <NewsItem item={item} key={index} />
            ))}
          </ul>
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
