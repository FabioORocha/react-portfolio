'use client';

import { RiGithubLine } from 'react-icons/ri';
import { FiLinkedin } from "react-icons/fi";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  // Verifica se já foi enviado anteriormente
  useEffect(() => {
    const ultimoEnvio = localStorage.getItem('ultimoEnvio');

    if (ultimoEnvio) {
      const agora = new Date().getTime();
      const tempoRestante = parseInt(ultimoEnvio) + 5 * 60 * 1000 - agora;

      if (tempoRestante > 0) {
        setBloqueado(true);
        setTimeout(() => {
          setBloqueado(false);
          localStorage.removeItem('ultimoEnvio');
        }, tempoRestante);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salva o horário do envio no localStorage
    localStorage.setItem('ultimoEnvio', new Date().getTime().toString());

    setEnviado(true);
    setBloqueado(true);

    // Desbloqueia após 5 minutos
    setTimeout(() => {
      setBloqueado(false);
      localStorage.removeItem('ultimoEnvio');
    }, 5 * 60 * 1000);

    // Envia o formulário para o FormSubmit
    e.target.submit();
  };

  return (
    <div className="wrapper mt-[46px] mb-[180px]">
      <h1 className="title text-[64px] text-center">Contato</h1>
      <div className="w-full">
        <div className="wrapper w-full flex flex-col gap-[80px] items-center justify-center mx-auto px-[15px] pt-[40px] mt-[50px] bg-[#343A40]">
          <div className="flex flex-col md:flex-row items-end gap-[45px] md:px-[200px]">
            <div className="image">
              <Image
                src="/assets/contact.png"
                alt="imagem contato"
                width={353}
                height={444}
                className="rounded-md"
              />
            </div>
            <div className="wrappers-buttons p-4 pb-8">
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/fabiooliveiradarocha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[63px] h-[63px] bg-[#494f54] text-white rounded hover:bg-blue-800 transition"
                >
                  <FiLinkedin className='text-[#1f1f1f] w-11 h-11' />
                </a>
                <a
                  href="https://github.com/FabioORocha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[63px] h-[63px] bg-[#494f54] text-white rounded hover:bg-blue-800 transition"
                >
                  <RiGithubLine className='text-[#1f1f1f] w-11 h-11' />
                </a>
              </div>
            </div>
            <div className="form-wrapper w-full pb-4">
              <p className="title text-center mb-[20px] text-[24px]">Entre em contato comigo!</p>

              {enviado && (
                <div className="max-w-md mx-auto p-4">
                  <p className="message text-center text-white bg-gray-700 rounded py-4">
                    Obrigado! Sua mensagem foi enviada.
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/fabio.binho.92@gmail.com"
                method="POST"
                className="max-w-md mx-auto p-4 space-y-4 rounded"
              >
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  disabled={bloqueado}
                  className="w-full px-3 py-2 rounded bg-[#494f54] text-white"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={bloqueado}
                  className="w-full px-3 py-2 rounded bg-[#494f54] text-white"
                />

                <textarea
                  name="mensagem"
                  required
                  placeholder="Mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  disabled={bloqueado}
                  className="w-full px-3 py-2 rounded h-32 bg-[#494f54] text-white"
                />

                <input type="hidden" name="_subject" value="Nova mensagem do site" />
                <input type="hidden" name="_next" value="https://seusite.com/obrigado" />
                <input type="hidden" name="_captcha" value="false" />

                <button
                  type="submit"
                  disabled={bloqueado}
                  className={`w-[257px] px-4 py-2 rounded transition text-white ${
                    bloqueado
                      ? 'bg-[#494f54] cursor-not-allowed'
                      : 'bg-gray-500 hover:bg-[#5a6268]'
                  }`}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
