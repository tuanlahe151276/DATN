import { useEffect, useState } from "react";
import { PaginationNumber } from "../../../../components";
import { useParams } from "react-router-dom";

export default function PaginationContent({ href = "" }) {
  const { page } = useParams();
  const [currentNumber, setCurrentNumber] = useState(1);
  useEffect(() => {
    setCurrentNumber(setCurrentNumber(page));
  }, [page]);
  return (
    <ul className="mt-5 mb-12 p-0 text-center flex w-full items-center justify-center">
      <PaginationNumber
        number={currentNumber - 1}
        href={href}
        page={"« Trang trước"}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={1}
        href={href}
        page={"1"}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={2}
        href={href}
        page={"2"}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={3}
        href={href}
        page={"3"}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={4}
        href={href}
        page={"4"}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={null}
        href={href}
        page={"..."}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={6014}
        href={href}
        page={"»»"}
        currentNumber={currentNumber}
      />
      <PaginationNumber
        number={2}
        href={href}
        page={"Trang sau »"}
        currentNumber={currentNumber}
      />
    </ul>
  );
}
