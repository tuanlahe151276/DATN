import ItemLink from "./ItemLink";
export default function ListLink({ items, notFullWidth = false }) {
  return (
    <ul className={`${notFullWidth ? "" : "flex-col"} w-full flex flex-wrap`}>
      {items?.map((item, index) =>
        !item?.list?.length > 0 ? (
          <ItemLink item={item} key={index} notFullWidth={notFullWidth} />
        ) : (
          <>
            <ItemLink item={item} key={index} notFullWidth={notFullWidth} />
            {item?.list?.map((lis, index) => (
              <ItemLink
                item={lis}
                key={`${lis?.title}${index}`}
                sub
                notFullWidth={notFullWidth}
              />
            ))}
          </>
        )
      )}
    </ul>
  );
}
