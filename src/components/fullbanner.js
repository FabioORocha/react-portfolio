import Image from 'next/image'

export default function Fullbanner(){
  return(
    <div className="w-full bg-[#343A40] mt-[80px]">
      <div className="card w-full flex items-center justify-between max-w-[1280px] mx-auto h-[590px] px-[15px]">
        <div className="text">
          <h2 className='font-semibold text-[40px]'>Olá, eu sou</h2>
          <h1 className='font-semibold text-[60px]'>Fábio Rocha</h1>
          <h2 className='font-semibold text-[40px]'>Desenvolvedor Front-End</h2>
        </div>
        <div className="image-container flex relative w-[484px] h-full">
          <Image
            src='/assets/fullbanner.png'
            alt='imagem fullbanner'
            width={484}
            height={726}
            className='absolute bottom-0 left-0'
          />
        </div>
      </div>
    </div>
  );
}