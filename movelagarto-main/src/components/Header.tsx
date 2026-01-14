export default function Header(){
  return (
    <header className="w-full flex justify-center py-6 fixed top-6 left-0 right-0 z-30 pointer-events-none">
      <nav className=" pointer-events-auto mx-auto max-w-6xl w-full bg-white/70 backdrop-blur rounded-full px-4 sm:px-10 py-2 flex gap-4 sm:gap-8 items-center justify-around shadow-md text-sm overflow-x-auto whitespace-nowrap ">
        <a className="px-4 py-2 rounded-full hover:bg-white/20 text-lg" href="#about">Inicio</a>
        <a className="px-4 py-2 rounded-full hover:bg-white/20 text-lg" href="#golf">O que somos</a>
        <a className="px-4 py-2 rounded-full hover:bg-white/20 text-lg" href="#membership">Explorar</a>
        <a className="px-4 py-2 rounded-full hover:bg-white/20 text-lg" href="#infrastructure">LGPD</a>
        <a className="px-4 py-2 rounded-full hover:bg-white/20 text-lg" href="#Fa">Faça sua submissão</a>
      </nav>
    </header>
  )
}