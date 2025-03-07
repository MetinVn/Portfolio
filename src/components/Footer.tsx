import { Container } from "../layouts/Container";
import { Indicator } from "../layouts/Jobindicator";

function Footer() {
  return (
    <div className="w-full">
      <Container bottomLeftCorner={true} bottomLeftDegree={50} padding="p-4 sm:p-5 md:p-10">
        <div className="flex justify-between items-center">
          <h1 className="text-accentGray z-[99] text-xs lg:text-lg">Portfolio 2025</h1>
          <nav>
            <ul className="flex items-center gap-2 text-xs lg:text-lg">
              <li className="text-orange-accent cursor-pointer z-[99] hover:opacity-90 transition-opacity">X</li>
              <li className="text-whiteF cursor-pointer z-[99] hover:text-accentGray transition-colors">Instagram</li>
              <li className="text-whiteF cursor-pointer z-[99] hover:text-accentGray transition-colors">LinkedIn</li>
            </ul>
          </nav>
          <Indicator />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
