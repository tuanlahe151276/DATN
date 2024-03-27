import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaRegBell, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import ROUTER from "../../../routers";
const navigation = [
  { name: "Trang chủ", href: ROUTER.TRANG_CHU },
  { name: "Phòng trọ", href: ROUTER.CHO_THUE_PHONG_TRO },
  { name: "Nhà cho thuê", href: ROUTER.NHA_CHO_THUE },
  { name: "Căn hộ", href: ROUTER.CHO_THUE_CAN_HO },
  { name: "Mặt bằng", href: ROUTER.MAT_BANG },
  { name: "Ở ghép", href: ROUTER.TIM_NGUOI_O_GHEP },
  { name: "Bảng giá dịch vụ", href: ROUTER.BANG_GIA_DICH_VU },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function UserNavbar() {
  return (
    <Disclosure as="nav" className="bg-[#055699]">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-[#055699] hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaXmark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:justify-start w-full">
                <Link className="flex flex-shrink-0 items-center" to={"/"}>
                  <img
                    className="h-8 w-auto"
                    src="https://phongtro123.com/images/logo-phongtro.svg"
                    alt="Your Logo"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#f9ff00] rounded-md px-3 py-2 text-base font-medium"
                            : "text-white hover:text-[#f9ff00] rounded-md px-3 py-2 text-base font-medium"
                        }>
                        {item.name}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative rounded-full bg-[#055699] p-1 text-white hover:text-gray-400 hover:cursor-pointer">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <FaRegBell className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 w-full">
                  <div className="w-full">
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none h-8 w-8 overflow-hidden">
                      <img
                        className="w-full rounded-full bg-center bg-cover"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Cá nhân
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Quản lý
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Đăng xuất
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  }>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
