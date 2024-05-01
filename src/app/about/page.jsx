import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { applySocialIcons } from "@/helpers/index";
import QRCodePage from "./QRCodePage";

const LinkComponent = ({ href, type, text, username, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="border rounded-full p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        {applySocialIcons(type)}
        <h4 className="font-semibold">
          {text} <span className="text-sm text-gray-600">(@{username})</span>
        </h4>
      </div>
      <FaArrowRightLong />
    </a>
  );
};

export const metadata = {
  title: "About Anbuselvan Annamalai | Social links",
  description:
    "Anbuselvan Annamalai is the Founder & CEO of CyberDude Networks Private Limited, company and is a passionate advocate for technology education, bringing over 10 years of experience in the tech industry. With a strong background in programming and a dedication to mentorship, Anbuselvan Annamalai has empowered countless individuals through teaching and guiding them in the world of software development. Anbuselvan is known for CM Awards, District Collector Awards and teaching more than 10 Million students around the world.He has delivered more than 25+ Guest lectures in various institutions. Anbuselvan Annamalai is the participant, Industry mentor and evaluator of Smart India Hackathon.",
  keywords: "Anbuselvan Annamalai, Anbuselvan Rocky, Anbu Tutorials,",
};

const AboutPage = (props) => {
  return (
    <main className="bg-white flex flex-col justify-center items-center p-10 sm:h-screen">
      <div className="text-center space-y-4  mx-auto">
        <Image
          src="https://github.com/anburocky3.png"
          width={100}
          height={100}
          priority
          alt="Anbuselvan Annamalai"
          className="rounded-full shadow-2xl  mx-auto"
        />
        <div className="text-center space-y-2 ">
          <h4 className="font-semibold text-xl relative " title="Verified user">
            <span>Anbuselvan Annamalai </span>
            {/* <span className="absolute right-2 top-1 w-2 h-2 bg-green-500 rounded-full"></span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              className="ml-1 -mt-1 stroke-current text-green-500 inline-block"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
              ></path>
            </svg>
          </h4>
          <p className="text-sm ">
            Founder/CEO of CyberDude - Tech Enthusiast, Mentor & Teacher
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
        <div className="flex-1">
          <ul className="space-y-4 my-10  sm:w-[450px]">
            <LinkComponent
              href="https://facebook.com/anburocky3"
              type="facebook"
              text={"Facebook"}
              username={"anburocky3"}
            />
            <LinkComponent
              href="https://instagram.com/anbuselvanrocky"
              type="instagram"
              text={"Instagram"}
              username={"anbuselvanrocky"}
            />
            <LinkComponent
              href="https://linkedin.com/in/anburocky3"
              type={"linkedin"}
              text={"Linkedin"}
              username={"anburocky3"}
            />
            <LinkComponent
              href="https://twitter.com/anbuselvanrocky"
              type={"twitter"}
              text={"Twitter"}
              username={"anbuselvanrocky"}
            />
            <LinkComponent
              href="https://github.com/anburocky3"
              type={"github"}
              text={"Github"}
              username={"anburocky3"}
            />
          </ul>
          {/* <button
            type="button"
            className="mx-auto hover:text-orange-500 text-sm"
          >
            Show QR Code
          </button> */}
        </div>
        <div className="p-10 bg-orange-50 rounded">
          <QRCodePage />
        </div>
      </div>
    </main>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
