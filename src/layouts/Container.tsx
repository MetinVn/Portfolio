import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  topRightWidth?: number;
  topRightDegree?: number;
  topRightCorner?: boolean;
  bottomLeftWidth?: number;
  bottomLeftDegree?: number;
  bottomLeftCorner?: boolean;
  padding?: string;
  textCenter?: boolean;
}

export const Container = ({
  children,
  bottomLeftWidth = 30,
  bottomLeftDegree = 60,
  bottomLeftCorner = false,
  topRightWidth = 30,
  topRightDegree = 240,
  topRightCorner = false,
  padding,
  textCenter,
}: ContainerProps) => {
  return (
    <div className="w-full mt-3 drop-shadow-xl relative z-[50]">
      <div className={`rounded-lg ${padding ? padding : "p-5"} bg-dark border-[1px] border-lightGray`}>
        <div className={`z-10 ${textCenter ? "text-center" : ""} `}>{children}</div>
        {topRightCorner && (
          <>
            <div
              className="absolute top-0 right-0 md:right-0 w-[20%] h-[70%] rounded-r-lg mix-blend-saturation"
              style={{
                backgroundImage: "linear-gradient(240deg, #F29F74 0%, #F29F74CC 0%, transparent 60%)",
              }}
            />
            <div
              className={`absolute top-0 right-0 w-[${topRightWidth}%] h-full rounded-r-lg mix-blend-overlay`}
              style={{
                backgroundImage: `linear-gradient(${topRightDegree}deg, #F29F74 22%, #F29F74CC 10%, transparent 50%)`,
              }}
            />
          </>
        )}

        {bottomLeftCorner && (
          <>
            <div
              className="absolute bottom-0 left-0 w-[30%] h-[70%] rounded-l-lg mix-blend-saturation"
              style={{
                backgroundImage: "linear-gradient(40deg, #F29F74 0%, #F29F74CC 0%, transparent 50%)",
              }}
            />
            <div
              className={`absolute bottom-0 left-0 w-[${bottomLeftWidth}%] h-full rounded-l-lg mix-blend-overlay`}
              style={{
                backgroundImage: `linear-gradient(${bottomLeftDegree}deg, #F29F74 22%, #F29F74CC 20%, transparent 50%)`,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};
