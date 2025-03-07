import React, { useState } from "react";
import { Container } from "./Container";
import { Indicator } from "./Jobindicator";
import { BsCheckCircle } from "react-icons/bs";
import { useLayoutContext } from "../contexts/selected_layout";
import { useRef } from "react";
import { AboutProps } from "../types/AboutTypes";

const AboutDesktop: React.FC<AboutProps> = ({ profile, PlusSign, CopySign, jobTitle, about, description }) => {
  const [copied, setCopied] = useState(false);
  const { setLayout } = useLayoutContext();

  const handleCopyEmail = async () => {
    try {
      if (copyTimeout.current) {
        clearTimeout(copyTimeout.current);
      }
      await navigator.clipboard.writeText("misaxanli@gmail.com");
      setCopied(true);
      copyTimeout.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  const copyTimeout = useRef<number | null>(null);

  return (
    <div className="hidden md:w-full md:flex md:justify-center md:items-center">
      <Container>
        <div className="w-full flex justify-between items-center">
          <p className="text-lg text-accentGray">{jobTitle}</p>
          <div className="w-[21%] flex justify-center">
            <Indicator />
          </div>
        </div>

        <div className="mt-14 w-full flex justify-between items-center">
          <div className="flex flex-col items-start space-y-2 text-whiteF">
            <h1 className="text-xl text-whiteF">{about}</h1>
            <p className="text-lg text-accentGray">{description}</p>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => setLayout("Contact")}
                className="bg-orange hover:bg-[#E4643F] rounded-lg flex items-center shadow-[0px_0px_10px_3px_rgba(228,100,63,0.3)] transition-colors">
                <div className="p-2 flex items-center">
                  <span>Hire me</span>
                </div>
                <div className="w-[2px] bg-gray h-full"></div>
                <div className="flex p-2 items-center">
                  <PlusSign size={15} color="white" />
                </div>
              </button>

              <button
                onClick={handleCopyEmail}
                className="bg-[#161616] border text-[#C0C0C0] group border-[#262626] hover:text-whiteF hover:border-[#3F3E3E] active:bg-[#1C1C1C] rounded-lg flex items-center transition-colors">
                <div className="p-2 flex items-center">
                  <span>{copied ? "Copied!" : "Copy Email"}</span>
                </div>
                <div className="w-[2px] bg-[#262626] group-hover:bg-[#3F3E3E] h-full"></div>
                <div className="flex p-2 items-center transition-transform duration-300">
                  {copied ? <BsCheckCircle size={20} /> : <CopySign size={20} />}
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-end items-center p-2">
            <div className="w-fit h-auto bg-gray border p-2 border-lightGray rounded-full">
              <img src={profile} alt="profile photo" className="w-52 h-auto" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutDesktop;
