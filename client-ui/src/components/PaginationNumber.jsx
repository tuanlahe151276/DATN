export default function PaginationNumber({
  number = null,
  href = "/",
  page,
  currentNumber = 1,
}) {
  return (
    <li className="inline-block mr-1 mb-1 cursor-pointer">
      {Boolean(number) ? (
        <a
          className={`${currentNumber === number ? "text-[#fff] bg-[#e13427] border-[#e13427]" : "bg-white border-[#f1f1f1]"} block py-4 px-5 text-[#333] rounded-md no-underline border hover:bg-[#ddd] hover:border-[#ddd] font-semibold text-sm`}
          href={`${href}?page=${number}`}>
          {page}
        </a>
      ) : (
        <span
          className={`block py-4 px-5 text-[#333] rounded-md no-underline border border-[#f1f1f1] bg-white hover:bg-[#ddd] font-semibold text-sm hover:border-[#ddd]`}>
          {page}
        </span>
      )}
    </li>
  );
}
