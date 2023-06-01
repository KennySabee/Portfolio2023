import React from "react";
import Image from "next/image";
import gpt4Summarize from "@/public/assets/projects/gpt4Summarize.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          src={gpt4Summarize}
          alt="img_gptai"
          className="absolute z-[1] object-cover"
          fill
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GPT AI Website </h2>
          <h3> React & Vite</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid  md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 p-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p>
            This app was built on React and allows you to get a summary of any url you provide that contains text using an external api from RapidAPI. Alongside building this application,
            learned how to: 
            <br />
            <br />
            - Setup a ReactJS project using Vite 
            <br />
            - Create a responsive, beautiful UI/UX with a nice touch of glass
            morphism using Tailwind CSS 
            <br />
            - Make advanced RTK query API requests
            that fire on condition 
            <br />
            - Save history using the local storage 
            <br />
            - Handle form events and catch errors 
            <br />
            - Implement copy to clipboard 
            <br />
            - Write clean code
          </p>
          <div className="flex flex-col  mt-5 md:flex-row justify-start">
            <Link
              href="https://kenny-aisummaryarticle.netlify.app/"
              target="_blank"
              className="md:mr-3"
            >
              <button className="px-8 py-2 mt-4 mr-8 w-full">Link</button>
            </Link>
            <Link
              href="https://github.com/KennySabee/AiSummarize"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 w-full">Code</button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Customs Hooks
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                RapidAPI Summarizer
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer p-4">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
