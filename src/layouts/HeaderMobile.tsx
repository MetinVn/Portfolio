import { useState } from "react";
import { LayoutType, useLayoutContext } from "../contexts/selected_layout";
import { header_svg } from "../svg/mobile_header_svg";
import { LuAlignJustify } from "react-icons/lu";

export default function HeaderMobile() {
  const { layout, setLayout } = useLayoutContext();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuItems: LayoutType[] = ["About", "Portfolio", "Contact"];
  const filteredItems = menuItems.filter((item) => item !== layout);

  return (
    <div className="w-full mt-10 px-4 z-[99]">
      <div className="flex items-center justify-center w-full">
        <div className="rounded-full border border-lightGray bg-gray p-2">
          <span>{header_svg}</span>
        </div>
        <div className="relative w-full max-w-[750px]">
          <div
            onClick={() => setOpenMenu((prev) => !prev)}
            className={`flex items-center pl-4 border border-lightGray  active:bg-accentDark font-semibold text-sm h-[45px] bg-gray text-orange py-[10px] px-2 ${
              openMenu ? "rounded-t-lg border-b-0 transition duration-300" : "rounded-full transition duration-300"
            }`}>
            {layout === "About" && <p>ABOUT</p>}
            {layout === "Portfolio" && <p>PORTFOLIO</p>}
            {layout === "Contact" && <p>CONTACT</p>}
            <div className="absolute z-10 top-1/2 -translate-y-1/2 right-3 p-2 rounded-full hover:bg-accentDark cursor-pointer">
              <LuAlignJustify size={20} color="white" />
            </div>
          </div>
          <div
            className={`absolute left-0 w-full transition-all ${
              openMenu ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
            }`}>
            <nav className="overflow-hidden rounded-b-lg border border-lightGray border-t-0 bg-gray">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setLayout(item);
                    setOpenMenu(false);
                  }}
                  className="list-none px-4 py-2 font-semibold hover:bg-dark cursor-pointer text-orange">
                  {item.toUpperCase()}
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
