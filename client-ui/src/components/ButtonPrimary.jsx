import { Link } from "react-router-dom";
export default function ButtonPrimary({ title = "", href = "" }) {
  return (
    <Link
      to={href}
      className="h-10 rounded-md border border-[#3961fb] bg-[#3961fb] text-white font-bold inline-flex items-center justify-center no-underline cursor-pointer py-0 px-3 m-0 w-full text-sm hover:underline">
      {title}
    </Link>
  );
}
