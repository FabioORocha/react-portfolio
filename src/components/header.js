import Image from 'next/image'

export default function Header(){
  return(
    <div className="w-full bg-[#343A40]">
      <div className="card w-full flex flex-col md:flex-row gap-4 md:gap-0 items-center md:justify-between max-w-[1280px] mx-auto h-[90px] px-4 py-4 lg:px-10">
        <div className="title ">
          <h1 className="headet-title text-[#ededed]">
            FÁBIO ROCHA
          </h1>
        </div>
        <div className="navigation flex gap-8 md:gap-5">
          <a href="#about" className="text-[#ededed] ">Sobre</a>
          <a href="#experience" className="text-[#ededed] ">Experiência</a>
          <a href="#contact" className="text-[#ededed] ">Contato</a>
        </div>
      </div>
    </div>
  );
}