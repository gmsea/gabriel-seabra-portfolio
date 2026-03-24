export default function home() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="w-full bg-black text-white p-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Gabriel Seabra
        </h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Início</a>
          <a href="#" className="hover:text-gray-400">Sobre</a>
          <a href="#" className="hover:text-gray-400">Projetos</a>
          <a href="#" className="hover:text-gray-400">Skills</a>
          <a href="#" className="hover:text-gray-400">Redes</a>
        </nav>
      </header>

       {/* HERO */}
      <section className="h-[80vh] flex items-center justify-center gap-16">

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
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" width={220}/>
      </div>

      </section>

       {/* SOBRE */}
        <section className="min-h-screen flex items-center justify-center bg-gray-0 px-8">

          <div className="max-w-3xl text-center">

            <h2 className="text-4xl font-bold mb-6">
              Sobre Mim
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Olá! Meu nome é Gabriel Seabra e estou em transição para a área de
              desenvolvimento Full Stack. Atualmente estudo tecnologias como
              HTML, CSS, JavaScript, React e Next.js, desenvolvendo projetos
              práticos para aprimorar minhas habilidades.

              Tenho experiência profissional em outras áreas, o que me trouxe
              disciplina, responsabilidade e foco em resolver problemas.
              Meu objetivo é conquistar minha primeira oportunidade como
              desenvolvedor e evoluir constantemente na área de tecnologia.
            </p>

          </div>

        </section>


    </div>
  );
}