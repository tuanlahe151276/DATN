import NewPostItem from "./NewPostItem";

export default function ListNewPost({ items }) {
  return (
    <ul className="flex flex-col w-full ">
      {items?.map((item, index) => (
        <NewPostItem item={item} key={index} />
      ))}
    </ul>
  );
}
