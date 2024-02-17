import {
  FooterBrands,
  FooterCompany,
  FooterLink,
  FooterRow,
} from "./components";

export default function Footer() {
  return (
    <footer className="bg-white text-[#333] text-[13px] relative z-0 mt-[50px] w-full">
      <div className="w-full">
        <div className="container mx-auto px-1 md:px-2 lg:px-0 pt-[10px] pb-[50px] flex flex-col justify-between max-w-[1280px]">
          {/* Footer link */}
          <FooterLink />
          {/* Footer row */}
          <FooterRow />
          {/* footer brands */}
          <FooterBrands />
          {/* footer company */}
          <FooterCompany />
        </div>
      </div>
    </footer>
  );
}
