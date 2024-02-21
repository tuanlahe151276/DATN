import {
  MainContent,
  MainHeader,
  MainSearch,
  MainSupport,
  MainTopLocation,
  MainWhyUs,
} from "./components";

export default function Main() {
  return (
    <main className="container mx-auto px-1 md:px-2 lg:px-0 max-w-[1280px] z-[1] relative min-h-screen my-[10px]">
      <MainSearch />
      <MainHeader />
      <MainTopLocation />
      <MainContent />
      <MainWhyUs />
      <MainSupport />
    </main>
  );
}
