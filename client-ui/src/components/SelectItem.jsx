export default function SelectItem({ text = "", onClick ,selected=false, }) {
  return (
    <li
      onClick={onClick}
      className={`${selected?"bg-[#007aff] border-[#007aff] text-white" : "bg-[#f1f1f1] border-[#f1f1f1]"} py-[5px] px-[15px] rounded-[5px] m-[5px] inline-block border cursor-pointer`}>
      {text}
    </li>
  );
}
