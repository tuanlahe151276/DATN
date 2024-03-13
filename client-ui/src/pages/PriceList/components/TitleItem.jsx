import { Rating } from "../../../components";

export default function TitleItem({ className = "", title = "", star }) {
  return (
    <th
      className={`${className} text-white py-[10px] px-4 border-x-[10px] border-x-white border-b border-b-[#eee] text-left w-[12.5%]`}>
      <span>{title}</span>
      {star && <Rating star={star} />}
    </th>
  );
}
