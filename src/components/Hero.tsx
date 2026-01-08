

export default function Hero(){
  return (
    <section className="relative w-full h-[76vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/image.png')] bg-top  opacity-90 "/>
      <div className="relative z-10 max-w-4xl text-center px-6 py-24">
        <h2 className="hero2">Lagarto em Movimento</h2>
        <h2 className="hero3">Historias Treinos E Vida Saudavel </h2>
        <p className="mt-4 text-lg text-white/90 hero-label">Contribua com o projeto</p>
        <div className="mt-8">
          <button className="bg-white text-green-800 px-6 py-3 rounded-full shadow hover:scale-[1.02] transition cursor-pointer">Envie sua imagem</button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
    </section>
  )
}


