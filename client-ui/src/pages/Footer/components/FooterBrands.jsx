export default function FooterBrands() {
  const listBrands = [
    {
      href: "/",
      title: "bds123",
      src: "https://phongtro123.com/images/logo-bds123.svg",
    },
    {
      href: "/",
      title: "chothuenha",
      src: "https://phongtro123.com/images/logo-chothuenha.svg",
    },
    {
      href: "/",
      title: "thuecanho123",
      src: "https://phongtro123.com/images/logo-thuecanho.svg",
    },
    {
      href: "/",
      title: "phongtro123",
      src: "https://phongtro123.com/images/logo-phongtro.svg",
    },
  ];
  return (
    <div className="w-full border-t-[1px] border-t-[#eee] py-5 mt-[30px] flex items-center overflow-y-auto">
      <span className="min-w-[150px]">
        <strong className="font-bold mr-2">Cùng hệ thống LBKCorp:</strong>
      </span>
      {listBrands?.map((item, index) => (
        <a
          key={index}
          href={item?.href}
          rel="nofollow noreferrer"
          title=""
          target="_blank"
          className="mr-5 inline-block">
          <img
            className="object-contain h-7 block max-w-full max-h-full rounded-[3px]"
            src={item?.src}
            alt={item?.title}
          />
        </a>
      ))}
    </div>
  );
}
