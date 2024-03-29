import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tecnologias from "./listaTechPagesComponent";

const PageComponent = ({
  img,
  title,
  usadoCon,
  desc,
  url,
  ghUrl,
  tecnologiasPagina,
}) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          src={img}
          alt="img folie"
          className="absolute z-[1] object-cover"
          fill
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{title}</h2>
          <h3> {usadoCon}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid  md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 p-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p>{desc}</p>

          <div className="flex flex-col  mt-5 md:flex-row justify-start">
            <Link href={url} target="_blank" className="md:mr-3">
              <button className="px-8 py-2 mt-4 mr-8 w-full  ">Link</button>
            </Link>
            <Link href={ghUrl} target="_blank">
              <button className="px-8 py-2 mt-4  w-full">Code</button>
            </Link>
          </div>
        </div>
        <Tecnologias tecnologias={tecnologiasPagina} />
        <Link href="/#projects">
          <p className="underline cursor-pointer p-4">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PageComponent;
