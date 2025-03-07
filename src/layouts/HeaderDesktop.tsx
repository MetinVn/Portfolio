import { LayoutType, useLayoutContext } from "../contexts/selected_layout";
import { desktop_svg } from "../svg/desktop_header_svg";

export default function HeaderDesktop() {
  const { layout, setLayout } = useLayoutContext();
  const menuItems: LayoutType[] = ["About", "Portfolio", "Contact"];

  return (
    <div className="w-full mt-1">
      <div className="flex items-center justify-center w-full">
        <div className="rounded-full border border-lightGray bg-gray p-1">
          <span>{desktop_svg}</span>
        </div>

        <nav className="flex items-center justify-around w-full max-w-[1200px] border border-lightGray rounded-full bg-gray h-[60px] font-semibold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setLayout(item)}
              className={`list-none cursor-pointer drop-shadow-lg px-4 py-2 rounded-lg transition-colors ${
                layout === item ? "text-orange hover:opacity-90" : "hover:text-accentGray text-whiteF"
              }`}>
              {item.toUpperCase()}
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
}
