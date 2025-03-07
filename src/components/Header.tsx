import HeaderDesktop from "../layouts/HeaderDesktop";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Header() {
  return (
    <>
      <div className="md:hidden w-full flex justify-center">
        <HeaderMobile />
      </div>
      <div className="hidden w-full md:flex md:justify-center">
        <HeaderDesktop />
      </div>
    </>
  );
}
