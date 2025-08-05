import { FaCheck } from "react-icons/fa6";

import Image from 'next/image'

export default function Projects(){

  const experiencias = [
    {
      class: "row-reverse",
      titulo: "Desenvolvedor React Native",
      subtitulo: "PEA-FOCO  06/2020 - 11/2021",
      texto: "No PEA-FOCO, fui responsável por planejar e desenvolver uma aplicação mobile voltada ao cadastro e organização de dados de pessoas atendidas pela ONG. Participei desde a concepção da solução até a entrega, incluindo a criação do wireframe no Adobe XD, definição das funcionalidades e desenvolvimento da interface com foco em usabilidade e organização.",
      imagem: "/assets/peafoco.png",
      tags: ["JavaScript", "React Native", "HTML5", "CSS", "Expo", "Github", "Adobe XD", "Firebase"],
    },
  ];

  return(
    <div id="experience" className="wrapper mt-[46px]">
      <h1 className="title text-[36px] lg:text-[64px] text-center"> Projetos</h1>
      <div className="w-full">

        {experiencias.map((projeto, index) => (
          <div key={index} className="wrapper w-full flex flex-col gap-[80px] items-center justify-center mx-auto px-[15px] py-[80px] mt-[50px] bg-[#343A40]">
            
            <div className={`flex flex-col lg:flex ${projeto.class} items-center gap-[45px] lg:px-[200px]`}>
              <div className="image">
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  width={375}
                  height={375}
                  className="rounded-lg w-[180px] h-[180px] lg:min-w-[275px] lg:min-h-[275px]"
                />
              </div>
              <div className="text text-center w-full">
                <h2 className="text-[22px] lg:text-[40px]">{projeto.titulo}</h2>
                <h3 className="text-[18px] lg:text-[30px]">{projeto.subtitulo}</h3>
                <p className="text-[18px] font-josefin my-[40px]">{projeto.texto}</p>
                <div className="flex flex-wrap justify-center gap-5 mt-4 px-[60px] mx-auto md:max-w-[80%]">
                  {projeto.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center gap-2 bg-grey text-black text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      <FaCheck className="text-xs text-[#2C2C2C]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}