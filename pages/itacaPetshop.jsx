import React from "react";
import PagesComponent from "@/components/PagesComponent";
import itacaPetShop from "@/public/assets/projects/itacaPetShop.png";

const prueba = () => {
  return (
    <div className="w-full">
      <PagesComponent
        img={itacaPetShop}
        title="ECOMMERCE APP"
        usadoCon="NextJs / Tailwind UI"
        desc="This app was built on Next JS. Users are able to buy wood-bed dogs, selecting the quantity and clicking to their link to whatsapp, it is a very simple ecommerce app about a pet store to try out front-end with the framework of react NextJs. "
        url="https://itacamobiliario.com/"
        ghUrl="https://github.com/KennySabee/itacaPetShop"
        tecnologiasPagina={["Next JS", "Tailwind UI"]}
      />
    </div>
  );
};

export default prueba;
