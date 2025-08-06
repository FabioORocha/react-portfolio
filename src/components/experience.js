import { FaCheck } from "react-icons/fa6";

import Image from 'next/image'

export default function Experience(){

  const experiencias = [
    {
      class: "row-reverse",
      titulo: "Desenvolvedor Front-End",
      subtitulo: "Agência Oásis  01/2025 - 05/2025",
      texto: "Na Oásis, atuei como desenvolvedor front-end em projetos voltados para e-commerce, colaborando em melhorias e novas implementações em interfaces web. Trabalhei com foco em desempenho, organização do código e entregas dentro de prazos curtos, além de apoiar o time de QA na identificação e ajuste de bugs. Apesar do período breve, foi uma experiência intensa de colaboração com equipe multidisciplinar.",
      imagem: "/assets/oasis.png",
      tags: ["JavaScript", "React.js", "HTML5", "CSS3", "Next.js", "Tailwind", "Github", "Nuvemshop", "Wake Commerce", "Scriban", "Figma", "Twig", "Git"],
    },
    {
      class: "row",
      titulo: "Desenvolvedor Front-End",
      subtitulo: "Vnda Ecommerce  12/2021 - 11/2023",
      texto: "Na Vnda, atuei como desenvolvedor front-end em um time responsável por implementar e manter interfaces de lojas virtuais em produção. Colaborei diretamente com o time de design para traduzir layouts em código e garantir experiências fluidas, acessíveis e alinhadas com o design system da empresa. Também participei de revisões de código e trabalhei com múltiplos clientes ao mesmo tempo, sempre priorizando clareza e organização nas entregas.",
      imagem: "/assets/vnda.png",
      tags: ["JavaScript", "React.js", "HTML5", "SCSS", "Liquid", "Tailwind", "Github", "Olist Vnda", "Git", "Figma"],
    },
  ];

  return(
    <div id="experience" className="wrapper mt-[46px]">
      <h1 className="title text-[36px] lg:text-[64px] text-center text-[#ededed]"> Experiências</h1>
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
                <h2 className="text-[22px] lg:text-[40px] text-[#ededed]">{projeto.titulo}</h2>
                <h3 className="text-[18px] lg:text-[30px] text-[#ededed]">{projeto.subtitulo}</h3>
                <p className="text-[18px] font-josefin my-[40px] text-[#ededed]">{projeto.texto}</p>
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