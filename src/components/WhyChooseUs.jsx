import React from "react";
import bgImg from "../assets/images/bg-img.jpg";
// import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon8 } from "../assets/svgs/SEO-Friendly.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Mobile-First, Responsive Design.svg";

const content = [
  {
    icon: icon5,
    title: "Creativity",
    desc: "At CodeCrestAI, creativity fuels our drive to innovate, crafting digital experiences that transcend the ordinary.",
  },
  {
    icon: icon2,
    title: "Collaboration",
    desc: "We believe that the best solutions arise from diverse perspectives. At CodeCrestAI, collaboration is the cornerstone of our creative process.",
  },
  {
    icon: icon1,
    title: "Impact",
    desc: "Driven by passion and purpose, CodeCrestAI is committed to creating transformative digital solutions that make a lasting impact.",
  },
  {
    icon: icon8,
    title: "Innovation",
    desc: "Innovation is at the heart of everything we do. We harness emerging technologies and trends to keep your brand at the forefront of the digital world.",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center bg-cover min-h-[50vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-black/20"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl overflow-hidden bg-right bg-cover relative"
          // style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full bg-primary/5"></div>
          <div className="py-[3rem] px-5 bg-black/10 rounded-xl backdrop-blur-sm text-primary_text relative z-10">
            <h1
              data-aos="fade-up"
              className="heading-2 max-w-[60rem] mx-auto text-center !text-white"
            >
              The fire that fuels our passion.
            </h1>
            <h2 className="sub-heading text-center max-w-[60rem] mt-3 mx-auto !text-white">
              At CodeCrestAI, we believe in the power of:
            </h2>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex shadow-inner shadow-primary/40 flex-col group items-center gap-1 bg-secondary/10 rounded-xl p-5 transition-all duration-200"
                >
                  <div className="flex justify-between items-center w-full">
                    <p className="text-center text-2xl mt-2 font-semibold text-white">
                      {item.title}
                      <span className="text-5xl text-white">.</span>
                    </p>
                    <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full bg-secondary">
                      <item.icon className="w-[2rem] fill-white h-[2rem] transition-all duration-200" />
                    </div>
                  </div>
                  <p className="text-start leading-tight mt-4 desc !text-white">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
