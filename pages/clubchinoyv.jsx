import React from "react";
import clubChinoYv from "@/public/assets/projects/clubChinoYv.png";
import PagesComponent from "@/components/PagesComponent"


const property = () => {
  return (
    <div className="w-full">
      <PagesComponent
        img={clubChinoYv}
        title="Static Web Site"
        usadoCon="Next Js & Tailwind CSS"
        desc="Static Web Site about a chinese academy in Ecuador to try out design, and help the academy to have a digital presence, this was my first project made for my chinese teacher. "
        url="https://clubchinoyv.netlify.app/"
        ghUrl="https://github.com/KennySabee/chinoYV"
        tecnologiasPagina={["Next JS", "Tailwind CSS"]}
      />
    </div>
  );
};

export default property;
