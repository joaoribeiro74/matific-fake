import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    window.history.pushState({}, '', '/bra/pt-br/home/'); 
  }, []);

  return (
    <div className="bg-auto bg-center bg-no-repeat bg-[url('https://www.matific.com/home/resources/media/filer_public/ac4b253fca6bf2b829b726d2dc3e5235/matific_pattern_13x.png')] pb-24">
      <nav className="bg-white border-b shadow-lg z-10 fixed w-full top-0 left-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-5 flex items-center justify-between h-16">
          {/* Logo e Bandeira */}
          <div className="flex items-center space-x-9">
            {/* Logo (Clicável) */}
            <a href="/" className="flex items-center">
              <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
            </a>

            {/* Bandeira e PT (Clicáveis) */}
            <a href="/pt" className="flex items-center space-x-2">
              <div className="flag flag-bra pt-br"></div>
              <span className="text-gray-800 font-medium text-xs">PT</span>
            </a>
          </div>

          {/* Menu e Botões */}
          <div className="flex items-center">
            <div className="space-x-6 text-sm montserrat">
              <a
                href="#"
                className="text-gray-800 hover:text-[#ff6a00] font-extrabold"
              >
                Para professores
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#ff6a00] font-extrabold"
              >
                Para pais ou responsáveis
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#ff6a00] font-extrabold"
              >
                Atividades
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#ff6a00] font-extrabold"
              >
                Produto
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#ff6a00] font-extrabold"
              >
                Fale com a gente
              </a>
            </div>

            <div className>
              <a href="/login">
                <button className="mr-5 ml-12 bg-white text-sm text-[#ff6a00] px-6 py-2 montserrat rounded hover:opacity-70 border border-2 border-[#ff6a00]">
                  Login
                </button>
              </a>

              {/* Botão Experimente Grátis */}
              <button className="mx-3 bg-[#ff6a00] text-white text-sm px-4 py-2.5 montserrat rounded hover:opacity-70">
                Experimente grátis
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center pt-28 pb-12">
        <div className="flex flex-row gap-10 items-center max-w-[1504px]">
          {/* Texto */}
          <div className="w-2/5 flex-grow text-black space-y-8">
            <h1 className="montserrat text-[43px] leading-[52px] text-[#162736]">
              Líder mundial em aprendizagem matemática com inteligência artificial
            </h1>
            <p className="text-[14px] leading-[26px] mb-[15px] font-medium">
              Atividades gamificadas alinhadas ao seu currículo, com pedagogia
              premiada e desenvolvidas por especialistas em Educação.
              <br />
              <br />
              Quer fazer uma degustação gratuita da plataforma?
            </p>
            <div className="pt-[15px]">
              <button className="bg-[#ff6a00] text-white text-sm px-14 py-2.5 montserrat rounded hover:opacity-70">
                Experimente grátis
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex items-center relative">
            <div className="m-auto w-full shadow-lg border-white border-[16px] rounded-[30px]">
              <picture className="w-full h-full">
                <img
                  src="https://www.matific.com/home/resources/media/images-2/video-thum/v-thum-24.png"
                  className="w-[800px] rounded-[15px] cursor-pointer"
                  alt="Imagem de vídeo"
                />
              </picture>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-[#ff6a00] text-black p-5 rounded-full shadow-md"
                  aria-label="Fake Pause Button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-12 h-12"
                  >
                    <polygon points="6,2 21,12 6,21" />
                  </svg>
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <section className="flex items-center justify-center">
        <div className="max-w-[1504px] py-6 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-18 montserrat">App do aluno</h3>
            <p className="text-[#ff6a00] text-[13px] mt-2 montserrat">
              Inteligente & Divertido
            </p>
            <p className="text-[13px] mt-4 mb-4 font-medium">
            Matific é expert em tornar a matemática divertida. Os alunos progridem em seu caminho de aprendizado personalizado, completam as atividades atribuídas e aprendem através de práticas variadas.
            </p>
            <a href='#' className="text-[#0058cc] text-[15px] montserrat hover:text-[#ff6a00] hover:underline transition-colors duration-200">
              Jogue como aluno
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-18 montserrat">Atividades Matemáticas do Ensino Infantil e Ensino Fundamental k-6.</h3>
            <p className="text-[#ff6a00] text-[13px] mt-2 montserrat">
              O Melhor do Mundo
            </p>
            <p className="text-[13px] mt-4 mb-4 font-medium">
              Milhares de atividades de matemática que cobrem o currículo do ensino básico da Educação Infantil e Ensino Fundamental k-6, criado por especialistas em educação. Da compreensão de conceitos até à fluência, a Matific tem tudo que é necessário.
            </p>
            <a href='#' className="text-[#0058cc] text-[15px] montserrat hover:text-[#ff6a00] hover:underline transition-colors duration-200">
              Explorar atividades
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-18 montserrat">Ferramentas do Professor e Pais</h3>
            <p className="text-[#ff6a00] text-[13px] mt-2 montserrat">
              Simples mas Poderoso
            </p>
            <p className="text-[13px] mt-4 mb-4 font-medium">
              Educadores e pais têm acesso a ferramentas poderosas que proporcionam controle, ideias e permitem a intervenção quando necessária.
            </p>
            <a href='#' className="text-[#0058cc] text-[15px] montserrat hover:text-[#ff6a00] hover:underline transition-colors duration-200"
            >
              Ver Funcionalidades
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
