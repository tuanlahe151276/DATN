export default function Table({ children = null, listTitle, listItem }) {
  return (
    <table className="w-full max-w-full text-[13px] border-none mb-4">
      <thead className="font-bold m-0 border-none">
        <tr>
          {listTitle?.map((item, index) => (
            <th
              className="border border-b-2 border-[#dee2e6] p-3 whitespace-nowrap text-center"
              key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {!listItem && children}
        {listItem &&
          listItem?.map((item, index) => (
            <tr>
              <td className="w-auto border border-[#dee2e6] p-3" key={index}>
                {item}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
