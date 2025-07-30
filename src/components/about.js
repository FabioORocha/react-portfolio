import Image from 'next/image'

export default function About(){

  const images = [
    '/assets/html.png',
    '/assets/css.png',
    '/assets/javascript.png',
    '/assets/typescript.png',
    '/assets/react.png',
    '/assets/next.png',
    '/assets/tailwind.png',
    '/assets/sass.png',
    '/assets/vue.png',
    '/assets/liquid.png',
    '/assets/twig.png',
    '/assets/github.png',
    '/assets/gitlab.png',
    '/assets/figma.png',
    '/assets/git.png',
    '/assets/firebase.png',
  ];

  return(
    <div className="w-full bg-[#343A40] mt-[80px]">
      <div className="card w-full flex flex-col gap-[80px] items-center justify-center max-w-[978px] mx-auto px-[15px] py-[80px]">
        <div className="text text-center">
          <h1 className='font-semibold text-[64px] mb-[40px]'>Sobre</h1>
          <p className='text-[18px] font-josefin'>
            Sou desenvolvedor front-end com mais de três anos de experiência em projetos web e mobile. Trabalho com JavaScript, HTML5, CSS3, React.js e React Native, construindo interfaces responsivas, acessíveis e com boa performance. 
            Tenho experiência com Next.js, Tailwind CSS, Twig, LIQUID, jQuery, Bootstrap e integração com APIs REST, além de conhecimentos em plataformas de e-commerce como NuvemShop, Wake Commerce e Olist Vnda. 
            Já colaborei com times multidisciplinares em todo o ciclo de desenvolvimento — desde a leitura do layout até a entrega e manutenção da aplicação — com foco em organização, clareza e código limpo.
            No momento, estou aprendendo TypeScript para escrever códigos mais seguros, organizados e alinhados com as boas práticas do ecossistema React.
          </p>
        </div>
        <div className="image-container flex flex-wrap justify-center gap-[20px] max-w-[738px]">
          {images.map((src,index)=> (
            <Image
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              width={60}
              height={60}
              className=''
            />
          ))}
        </div>
      </div>
    </div>
  );
}