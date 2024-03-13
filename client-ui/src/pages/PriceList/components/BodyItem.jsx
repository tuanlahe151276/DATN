export default function BodyItem({ children, nowrap = false, style = null }) {
  return (
    <td
      style={style}
      className={`${nowrap ? "text-sm" : ""} py-[10px] px-4 border-x-[10px] border-x-white border-b border-b-[#eee] w-[12.5%] align-top text-justify`}>
      {children}
    </td>
  );
}
