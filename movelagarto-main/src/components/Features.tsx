const features = [
  "Campo de campeonato","Atmosfera privada","Treinadores pessoais","Restaurante premium","Business lounge","Eventos & torneios","Programa de parcerias","Residências do clube"
]

const imgs = ['/image.png','/image.png','/image.png','/image.png','image.png','/image.png','/image.png','image.png']

export default function Features(){
  return (
    <section id="features" className="py-20 bg-green-800 text-white">
      <div className="content-wrapper">
        <div className='mtitles'>
          <h1 className='mtitle2'>Explorar</h1>
          <h2 className='msubtitle2'> Abaixo temos nosso catálogo de fotos separados em esportes e práticas específicas</h2>
        </div>
        <div className='gallery'>
          {imgs.map((path) =>(
            <div className='mimage-container'>
              <img src={path} alt="foto" className="mgrid-gallery-image"/>
              <div className='mgallery-item-title'> Sport Name </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  )
}