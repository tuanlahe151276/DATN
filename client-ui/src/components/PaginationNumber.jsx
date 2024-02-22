import { Link } from "react-router-dom";

export default function PaginationNumber({
  number = null,
  href = "/",
  page,
  currentNumber = 1,
  onClick,
}) {
  return (
    <li className="inline-block mr-1 mb-1 cursor-pointer" onClick={onClick}>
      {Boolean(number) ? (
        <Link
          className={`${currentNumber === number ? "text-[#fff] bg-[#e13427] border-[#e13427]" : "bg-white border-[#f1f1f1]"} block py-4 px-5 text-[#333] rounded-md no-underline border hover:bg-[#ddd] hover:border-[#ddd] font-semibold text-sm`}
          to={`${href}?page=${number}`}>
          {page}
        </Link>
      ) : (
        <span
          className={`block py-4 px-5 text-[#333] rounded-md no-underline border border-[#f1f1f1] bg-white hover:bg-[#ddd] font-semibold text-sm hover:border-[#ddd]`}>
          {page}
        </span>
      )}
    </li>
  );
}
