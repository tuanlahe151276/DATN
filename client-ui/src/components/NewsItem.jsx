import { Link } from "react-router-dom";
export default function NewsItem({ item }) {
  return (
    <article className="w-full">
      <Link
        to={item?.href}
        className="flex items-start py-2 text-[#333] border-b border-[#eee]">
        <img
          className="w-36 h-36 object-contain object-center rounded-md overflow-hidden"
          src={item?.image}
          alt=""
        />
        <div className="ml-4 flex-1 relative">
          <h6 className="text-xl font-normal text-[#055699] mb-2">
            {item?.title}
          </h6>
          <p className="text-[#8a8d91] text-justify">{item?.desc}</p>
        </div>
      </Link>
    </article>
  );
}
