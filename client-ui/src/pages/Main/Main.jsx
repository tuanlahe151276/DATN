import MainContent from "./components/MainContent";
import MainHeader from "./components/MainHeader";
import MainSearch from "./components/MainSearch";
import MainSupport from "./components/MainSupport";
import MainTopLocation from "./components/MainTopLocation";
import MainWhyUs from "./components/MainWhyUs";

export default function Main() {
  return (
    <main className="container mx-auto px-1 md:px-2 lg:px-0 max-w-[1280px] z-[1] relative min-h-screen">
      <MainSearch />
      <MainHeader />
      <MainTopLocation />
      <MainContent />
      <MainWhyUs />
      <MainSupport />
    </main>
  );
}
