export default function home() {
  return (
    <div>
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
    </div>
  );
}