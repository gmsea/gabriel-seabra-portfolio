export default function home() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="w-full bg-black text-white p-4 flex justify-end items-center">

        <nav className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Início</a>
          <a href="#" className="hover:text-gray-400">Sobre</a>
          <a href="#" className="hover:text-gray-400">Projetos</a>
          <a href="#" className="hover:text-gray-400">Skills</a>
          <a href="#" className="hover:text-gray-400">Redes</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center gap-16 pt-24 pb-16">

        {/* TEXTO */}
        <div>
          <p className="text-2xl text-white">
            Site de
          </p>

          <h2 className="text-5xl mt-3 font-bold leading-tight">
            Gabriel Seabra
          </h2>

          <p className="text-2xl mt-3 text-gray-500">
            Desenvolvedor Full Stack
          </p>
        </div>

        {/* IMAGEM */}
        <div className="animate-bounce">
          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" width={220} />
        </div>

      </section>

      {/* SOBRE */}
      <section className="min-h-screen flex items-center justify-center bg-gray-10 px-20">

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">

          {/*BLOCO ESQUERDO*/}
          <div className="flex items-center justify-center p-8 rounded-xl  w-full md:w-1/2">

            <img src="/coding.svg" alt="Ilustração programador" className="w-123 h-auto" />

          </div>

          {/*BLOCO DIREITO*/}

          <div className="p-8 rounded-xl w-full md:w-1/2">

            <h2 className="text-4xl font-bold mb-2">
              Sobre Mim
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              Olá! Meu nome é Gabriel Seabra e estou em transição para a área de
              desenvolvimento Full Stack. Atualmente estudo tecnologias como
              HTML, CSS, JavaScript, React e Next.js, desenvolvendo projetos
              práticos para aprimorar minhas habilidades.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Tenho experiência profissional em outras áreas, o que me trouxe
              disciplina, responsabilidade e foco em resolver problemas.
              Meu objetivo é conquistar minha primeira oportunidade como
              desenvolvedor e evoluir constantemente na área de tecnologia.
            </p>

          </div>
        </div>

      </section>

      {/* PROJETOS */}
      <section className="min-h-screen px-8 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projetos
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {/* CARD 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">

            <img src="/Projeto-calculadora.jpeg" alt="Projeto Calculadora" />

            <div className="p-4">

              <h3 className="text-xl font-bold mb-2 text-center text-gray-700">
                Projeto Calculadora
              </h3>

              <p className="text-gray-600 mb-4">
                Uma calculadora feita com HTML, CSS e JavaScript com operações basicas.
              </p>

              <div className="flex gap-4 justify-center" >

                <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Ver Site
                </a>

                <a href="#" className="bg-[#083358] border border-black px-4 py-2 rounded hover:bg-gray-800">
                  GitHub
                </a>

              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">

            <img src="/Projeto-fgts.jpeg" alt="Projeto Calculadora de Saque FGTS" />

            <div className="p-4">

              <h3 className="text-xl font-bold mb-2 text-center text-gray-700">
                Calculadora Saque-FGTS
              </h3>

              <p className="text-gray-600 mb-4">
                Calculadora do Saque-Aniversário do FGTS desenvolvida com HTML, CSS e JavaScript.
              </p>

              <div className="flex gap-4 justify-center" >

                <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Ver Site
                </a>

                <a href="#" className="bg-[#083358] border border-black px-4 py-2 rounded hover:bg-gray-800">
                  GitHub
                </a>

              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">

            <img src="/Projeto-calculadora-rescisao.jpeg" alt="Projeto 3" />

            <div className="p-4">

              <h3 className="text-xl font-bold mb-2 text-center text-gray-700">
                Calculadora Rescisão CLT
              </h3>

              <p className="text-gray-600 mb-4">
                Aplicação para gerenciar tarefas com armazenamento
                local no navegador.
              </p>

              <div className="flex gap-4 justify-center" >

                <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Ver Site
                </a>

                <a href="#" className="bg-[#083358] border border-black px-4 py-2 rounded hover:bg-gray-800">
                  GitHub
                </a>

              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">

            <img src="/Projeto-portifolio.jpeg" alt="Projeto 4" />

            <div className="p-4">

              <h3 className="text-xl font-bold mb-2 text-center text-gray-700">
                Projeto Portifólio
              </h3>

              <p className="text-gray-600 mb-4">
                Meu portfólio pessoal desenvolvido com Next.js e Tailwind CSS,
                apresentando meus projetos, habilidades e informações profissionais.
              </p>

              <div className="flex gap-4 justify-center" >

                <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Ver Site
                </a>

                <a href="#" className="bg-[#083358] border border-black px-4 py-2 rounded hover:bg-gray-800">
                  GitHub
                </a>

              </div>
            </div>
          </div>

        </div>

      </section>

      {/*SKILLS*/}
      <section className="min-h-screen flex items-center justify-center px-20">

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">

          {/*BLOCO ESQUERDO*/}
          <div className="flex flex-col justify-center w-full md:w-1/2">

            <h2 className="text-4xl font-bold text-center md:text-left mb-6">
              Skills
            </h2>

            <p className="text-center text-gray-400 md:text-left">
              Ao lado estou exibindo algumas habilidades que tenho.
            </p>
            <p className="text-center text-gray-600 md:text-left">
              (Passe o mouse sobre os ícones para ver mais)
            </p>

          </div>

          {/*BLOCO DIREITO*/}
          <div className="w-full md:w-1/2 flex flex-wrap gap-8 justify-center">

            {/*Python*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">

              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 text-sm">
                Python
              </span>
            </div>

            {/*HTML*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">

              <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 text-sm">
                HTML
              </span>
            </div>

            {/*CSS*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">

              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 duration-300 mt-2 text-sm">
                CSS
              </span>
            </div>

            {/*JavaScript*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 text-sm">
                JavaScript
              </span>
            </div>

            {/*React*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">

              <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 text-sm">
                React
              </span>
            </div>

            {/*Next.js*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">

              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 text-sm">
                Next.js
              </span>
            </div>

            {/*Git*/}
            <div className="flex flex-col items-center group cursor-pointer w-[100px]">

              <img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" width={100} className="transition-transform duration-300 group-hover:scale-90" />

              <span className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 text-sm">
                Git
              </span>
            </div>
          </div>
        </div>

      </section>

      {/*REDES*/}
      <footer className="min-h[40vh] bg-black text-white flex flex-col items-center justify-center gap-8">

        <h2 className="text-3xl font-bold  py-4
        ">
          Redes
        </h2>

        <div className="flex gap-10">

          {/*LINKEDIN*/}
          <a href="https://www.linkedin.com/" target="_blank" className="transition-transform duration-300 hover:scale-110">

            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width={50} alt="LinkedIn" />
          </a>

          {/*GITHUB*/}
          <a href="https://www.github.com/" target="_blank" className="transition-transform duration-300 hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width={50} alt="GitHub" />
          </a>

          {/*EMAIL*/}
          <a href="mailto:gmatos@hotmail.com.br" className="transition-transform duration-300 hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width={50} alt="Email" />
          </a>
        </div>

        {/*COPYRIGHT*/}
        <p className="text-sm text-gray-400">
          © 2026 Gabriel Seabra - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}