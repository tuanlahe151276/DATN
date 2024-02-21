import { Link } from "react-router-dom";

export default function MainTopLocation() {
  const listTopLocation = [
    {
      href: "/",
      name: "Hồ Chí Minh",
      src: "https://phongtro123.com/images/location_hcm.jpg",
    },
    {
      href: "/",
      name: "Hồ Chí Minh",
      src: "https://phongtro123.com/images/location_hcm.jpg",
    },
    {
      href: "/",
      name: "Hồ Chí Minh",
      src: "https://phongtro123.com/images/location_hcm.jpg",
    },
  ];
  return (
    <section className="flex w-full items-center justify-center border-none rounded-lg mb-5 bg-transparent p-0">
      <div className="w-full flex justify-center items-center">
        {listTopLocation?.map((item, index) => (
          <Link
          key={index}        
            className="inline-block w-[220px] rounded-[10px] overflow-hidden shadow-topLocation mx-[10px] bg-[#f1f1f1] relative text-[#1266dd]"
            to={item?.href}
            title={item?.name}>
            <div className="pt-[56.25%] object-cover relative w-full group ">
              <img
                className="h-full w-full absolute object-cover top-0 left-0"
                src={item?.src}
                alt={item?.name}
              />
            </div>
            <span className="py-3 px-[10px] block font-bold bg-white whitespace-nowrap overflow-ellipsis w-full overflow-hidden">
              Phòng trọ <span className="">{item?.name}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
