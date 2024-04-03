import React from "react";
import brainsWave from "@/public/assets/projects/brainWave.png";
import PagesComponent from "@/components/PagesComponent"


const property = () => {
  return (
    <div className="w-full">
      <PagesComponent
        img={brainsWave}
        title="Static Web Site"
        usadoCon="Vite & Tailwind CSS"
        desc="Static Web Site about an AI app, perhaps with a style of games NFT, this project I have made to show my development on frontend skills and add this future scene, also use some animations. "
        url="https://komzbrainfrontend.netlify.app/"
        ghUrl="https://github.com/KennySabee/FrontEndBrain"
        tecnologiasPagina={["Vite", "Tailwind CSS"]}
      />
    </div>
  );
};

export default property;
