import { PaginationNumber } from "../../../../components";

export default function PaginationContent() {
  return (
    <ul className="mt-5 mb-12 p-0 text-center flex w-full items-center justify-center">
      <PaginationNumber number={0} href={"/"} page={"« Trang trước"} />
      <PaginationNumber number={1} href={"/"} page={"1"} />
      <PaginationNumber number={2} href={"/"} page={"2"} />
      <PaginationNumber number={3} href={"/"} page={"3"} />
      <PaginationNumber number={4} href={"/"} page={"4"} />
      <PaginationNumber number={null} href={"/"} page={"..."} />
      <PaginationNumber number={6014} href={"/"} page={"»»"} />
      <PaginationNumber number={2} href={"/"} page={"Trang sau »"} />
    </ul>
  );
}
