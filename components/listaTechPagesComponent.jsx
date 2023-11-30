import { RiRadioButtonFill } from "react-icons/ri";

const TecnologiaItem = ({ nombre }) => {
  return (
    <p className="text-gray-600 py-2 flex items-center ">
      <RiRadioButtonFill className="pr-1" />
      {nombre}
    </p>
  );
};

const Tecnologias = ({ tecnologias }) => {
  return (
    <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
      <div className="p-2">
        <p className="text-center font-bold pb-2">Technologies</p>
        <div className="grid grid-cols-3 md:grid-cols-1">
          {tecnologias.map((tecnologia, index) => (
            <TecnologiaItem key={index} nombre={tecnologia} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
