import imgTestimony from '../../../assets/fotos/depoimento.jpg'

// CSS
import './Recomendations.css'

export const Recomendations = () => {
  return (
    <div className="section-recomendation-container">
      <div className="section-recomendation">
        <div className="section-recomendation-left">
          <img src={imgTestimony} alt="Imagem representando uma moça em uma bike."/>
        </div>
        <div className="section-recomendation-right">
          <div className="testmony">
            <h1>"Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo."</h1>
            <p className="font-1-l">Ana Júlia</p>
          </div>
        </div>
      </div>
    </div>
  )
}