import { Container } from "../layouts/Container";
import pointer from "../images/majesticons_arrow-up-line.png";
import aiMusic from "../images/ai-music-product.png";
import mockup from "../images/Mockup-Iphone.png";
import map from "../images/Map-mockup.png";

interface WorkItemsProps {
  title: string;
  timeSpan: string;
  tech: string;
  first?: boolean;
}
const WorkItems = ({ tech, timeSpan, title, first }: WorkItemsProps) => {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <div>
        <h1 className={`text-lg ${first ? "text-orange" : "text-whiteF"} `}>{title}</h1>
        <span className="text-accentGray">{timeSpan}</span>
      </div>
      <span className="text-accentGray">{tech}</span>
    </div>
  );
};

interface ShowCaseProps {
  title: string;
  description: string;
  iconSource: string;
  imgSource: string;
  padding?: string;
}

const ShowCase = ({ description, iconSource, imgSource, title, padding }: ShowCaseProps) => {
  return (
    <>
      <div className={`flex items-center justify-between w-full ${padding ? padding : ""}`}>
        <div>
          <h1 className="text-lg text-whiteF">{title}</h1>
          <span className=" text-accentGray">{description}</span>
        </div>
        <img src={iconSource} className="h-12 w-12" alt="icon" />
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img src={imgSource} alt="product img" />
      </div>
    </>
  );
};

function Hero() {
  return (
    <div className="flex flex-col md:flex-row lg:gap-5 justify-between w-full text-whiteF">
      <div className="w-full flex flex-col ">
        <Container padding="p-10">
          <div className="flex flex-col items-start">
            <li className="mb-5 list-disc text-lg text-accentGray">Recent Work</li>
            <WorkItems tech="Figma" timeSpan="2023 - Present" title="Product designer" first={true} />
            <WorkItems tech="Google" timeSpan="2021 - 2022" title="UI/UX Designer" />
            <WorkItems tech="Figma" timeSpan="2023 - Present" title="Product designer" />
            <WorkItems tech="Figma" timeSpan="2023 - Present" title="Product designer" />
          </div>
        </Container>
        <div className="w-full hidden md:block">
          <Container padding="px-5">
            <ShowCase padding="py-5" title="IOS Mobile app" description="Product develop" iconSource={pointer} imgSource={mockup} />
          </Container>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full">
          <Container textCenter={true} topRightDegree={220} topRightCorner={true} padding="p-10">
            <h1 className="text-lg">Web Design</h1>
          </Container>
        </div>
        <div className="flex w-full gap-3">
          <Container textCenter={true} topRightCorner={true} topRightWidth={20} padding="p-10">
            <h1 className="text-lg"> User Experience</h1>
          </Container>
          <Container textCenter={true} bottomLeftCorner={true} padding="p-10">
            <h1 className="text-lg"> User Interface</h1>
          </Container>
        </div>
        <div className="w-full block md:hidden">
          <Container padding="px-5">
            <ShowCase padding="py-5" title="IOS Mobile app" description="Product develop" iconSource={pointer} imgSource={mockup} />
          </Container>
        </div>
        <Container>
          <ShowCase title="AI Music product" description="UX Case Study" iconSource={pointer} imgSource={aiMusic} />
        </Container>
        <Container>
          <ShowCase title="AI Map redesign" description="UX Case Study" iconSource={pointer} imgSource={map} />
        </Container>
      </div>
    </div>
  );
}

export default Hero;
