import Image from 'next/image'

export default function Fullbanner(){
  return(
    <div className="w-full bg-[#343A40] mt-[80px]">
      <div className="card w-full flex items-center justify-between max-w-[1280px] mx-auto h-[590px] px-4 lg:px-10 relative">
        <div className="text h-full flex flex-col items-start justify-center">
          <h2 className='font-semibold text-[18px] lg:text-[40px] text-[#ededed]'>Olá, eu sou</h2>
          <h1 className='font-semibold text-[36px] lg:text-[60px] text-[#ededed]'>Fábio Rocha</h1>
          <h2 className='font-semibold text-[18px] lg:text-[40px] text-[#ededed]'>Desenvolvedor Front-End</h2>
        </div>
        <div className="image-container flex md:relative  md:w-[484px] md:h-full">
          <Image
            src='/assets/fullbanner.png'
            alt='imagem fullbanner'
            width={484}
            height={726}
            className='absolute bottom-0 left-[60%] md:left-0 w-[160px] md:w-[484px]'
          />
        </div>
      </div>
    </div>
  );
}