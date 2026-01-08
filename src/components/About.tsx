import {ArrowRight  } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-regal-cream">
      <div className="content-wrapper">
        
        <h3 className="mtitle">O que Somos?</h3>
        
        <div className="mgrid-lateral">
          <div className="mgrid-lateral-image">
            <img 
              src="image.png" 
              alt="Sobre Nós" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="mgrid-lateral-text">
            <p className="mb-6">
              O projeto “Lagarto em Movimento: Histórias, Treinos e Vida Saudável” tem como objetivo valorizar práticas esportivas, hábitos saudáveis e histórias de movimento que fazem parte do cotidiano da cidade de Lagarto, promovendo bem-estar, inclusão e qualidade de vida por meio da fotografia.
            </p>
            <p className="mb-6">
              Você também pode participar nos enviando sua foto e sua história! 
            </p>
            <button className="action-btn ">
              Faça sua submissão
              <ArrowRight className="inline ml-2 mb border-2 border-white rounded-full" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


