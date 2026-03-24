export default function home() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="w-full bg-black text-white p-4 flex justify-between items-center">

        <h1 className="text-x1 font-bold">
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
          <h2 className="text-5x1 font-bold leading-tight">
            Gabriel Seabra
          </h2>

          <p className="text-2x1 mt-3 text-gray-500">
            Desenvolvedor Full Stack
          </p>
        </div>

      {/* IMAGEM */}
      <div className="animate-bounce">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" width={220}/>
      </div>

      </section>

    </div>
  );
}