import imgTools from '../../../assets/fotos/tecnologia.jpg'
import iconEletric from '../../../assets/icones/eletrica.svg'
import iconSearcher from '../../../assets/icones/rastreador.svg'

// CSS
import './Information.css'

export const Information = () => {
  return (
    <div className="section-information-container">
      <div className="section-information">
        <div className="section-information-left">
          <h3 className="font-2-l-b">Tecnologia avançada</h3>
          <h1 className="font-1-xxl">você escolhe as suas cores e componentes<span className="dot-yellow">.</span></h1>
          <p className='font-2-l'>Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.</p>
          <a href="#test" className="font-2-l-b">Escolha um modelo</a>

          <div className="section-information-box">
            <div className="information-box">
              <img src={iconEletric} alt="icon"/>
              <h1 className="font-1-l">Motor Eletrico</h1>
              <p className="font-2-s">Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.</p>
            </div>
            <div className="information-box">
              <img src={iconSearcher} alt="icon"/>
              <h1 className="font-1-l">Rastreador</h1>
              <p className="font-2-s">Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.</p>
            </div>
          </div>
        </div>

        <div className="section-information-right">
          <img src={imgTools} alt="Tecnologia avançada" />
        </div>
      </div>
    </div>
  )
}