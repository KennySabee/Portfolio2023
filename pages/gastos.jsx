import React from "react";
import gastosProject from "@/public/assets/projects/gastosProject.png";
import PagesComponent from "@/components/PagesComponent";

const gastos = () => {
  return (
    <div className="w-full">
      <PagesComponent
        img={gastosProject}
        title="BUDGET CONTROL"
        usadoCon="Vite"
        desc="This app was built on React it is a single page to manage a budget
      and test effects and states in React. "
        url="https://kenny-plannergastos.netlify.app/"
        ghUrl="https://github.com/KennySabee/planGastosProject"
        tecnologiasPagina={["Vite", "Local Storage"]}
      />
    </div>
  );
};

export default gastos;
