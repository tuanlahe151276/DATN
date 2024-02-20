import MainContentAside from "./MainContentAside";
import MainContentLeft from "./MainContentLeft";

export default function MainContent() {
  return (
    <div className="w-full flex justify-between">
      <MainContentLeft />
      <MainContentAside />
    </div>
  );
}
