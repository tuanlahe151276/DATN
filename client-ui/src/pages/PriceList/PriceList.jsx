import { PriceEx, PriceIntro, PriceService } from "./components";

export default function PriceList() {
  return (
    <div className="container mx-auto px-1 md:px-2 lg:px-0 max-w-[1280px] z-[1] relative">
      <header className="mb-4">
        <h1 className="mt-12 mb-8 text-center text-[28px] font-bold">
          Giới thiệu phongtro123.com
        </h1>
      </header>
      <PriceIntro />
      <PriceService />
      <PriceEx />
    </div>
  );
}
