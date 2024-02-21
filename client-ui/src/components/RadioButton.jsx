export default function RadioButton({
  name = "",
  items = [],
  value = "",
  onChange,
}) {
  return (
    <>
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex items-center border-b border-[#ddd] relative text-[15px] py-3 pr-[10px] cursor-pointer">
          <input
            id={name + index}
            type="radio"
            name={name}
            value={item?.value}
            checked={value === item?.value}
            className="h-4 w-4 border-gray-300 focus:ring-2 focus:text-[#007aff] cursor-pointer"
            onChange={(e) => onChange(e.target.value)}
          />
          <label
            htmlFor={name + index}
            className={`${value === item?.value ? "font-bold text-[#007aff]" : "font-normal text-gray-900"} ml-2 block cursor-pointer`}>
            {item?.value}
          </label>
        </div>
      ))}
    </>
  );
}
