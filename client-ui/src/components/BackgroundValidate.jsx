import { BgValidate } from "../assets/images";

export default function BackgroundValidate() {
  return (
    <div className="relative hidden items-center justify-center h-full lg:flex w-[546px]">
      <img
        src={BgValidate}
        className="w-full object-contain object-center"
        alt=""
      />
    </div>
  );
}
