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
    <div className="wrapper mt-[46px]">
      <h1 className="title text-[64px] text-center"> Experiências</h1>
      <div className="w-full">

        {experiencias.map((projeto, index) => (
          <div key={index} className="wrapper w-full flex flex-col gap-[80px] items-center justify-center mx-auto px-[15px] py-[80px] mt-[50px] bg-[#343A40]">
            
            <div className={`flex flex-col md:flex ${projeto.class} items-center gap-[45px] md:px-[200px]`}>
              <div className="image">
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  width={375}
                  height={375}
                  className="rounded-md"
                />
              </div>
              <div className="text text-center w-full">
                <h2 className="text-[40px]">{projeto.titulo}</h2>
                <h3 className="text-[30px]">{projeto.subtitulo}</h3>
                <p className="text-[18px] font-josefin my-[40px]">{projeto.texto}</p>
                <div className="flex flex-wrap justify-center gap-5 mt-4 px-[60px] mx-auto md:max-w-[80%]">
                  {projeto.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center gap-2 bg-grey text-black text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3333 1L4.99999 8.33333L1.66666 5" stroke="#2C2C2C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
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