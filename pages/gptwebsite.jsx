import React from "react";
import Image from "next/image";
import gpt4Summarize from "@/public/assets/projects/gpt4Summarize.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import PagesComponent from "@/components/PagesComponent";

const crypto = () => {
  return (
    <div className="w-full">
      <PagesComponent
        img={gpt4Summarize}
        title="GPT AI Website"
        usadoCon="React & Vite"
        desc="This app was built on React and allows you to get a summary of any url you provide that contains text using an external api from RapidAPI. Alongside building this application, learned how to - Setup a ReactJS project using Vite - Create a responsive, beautiful UI/UX with a nice touch of glass morphism using Tailwind CSS  - Make advanced RTK query API requests
    that fire on condition - Save history using the local storage - Handle form events and catch errors - Implement copy to clipboard - Write clean code"
        url="https://kenny-aisummaryarticle.netlify.app/"
        ghUrl="https://github.com/KennySabee/AiSummarize"
        tecnologiasPagina={["RapidAPI Summarizer", "Vite", "Custom Hooks"]}
      />
    </div>
  );
};

export default crypto;
