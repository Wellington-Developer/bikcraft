import iconCorrect from '../../../assets/icones/lista.svg'
import { Button } from '../../Utils/Button/Button'

// CSS
import './Price.css'

export const Price = () => {
  return (
    <div className="section-price-container">
      <div className="section-price">
        <h1 className="font-1-xxl">Seguros<span className="dot-yellow">.</span></h1>
        <div className="prices">
          <div className="price-prata price">
            <div className="box-left">
              <h1>Prata</h1>
              <ul>
                <li><img src={iconCorrect} alt="list" /> Duas trocas por ano</li>
                <li><img src={iconCorrect} alt="list" /> Assistência técnica</li>
                <li><img src={iconCorrect} alt="list" /> Suporte 08h ás 18h</li>
                <li><img src={iconCorrect} alt="list" /> Cobertura estadual</li>
              </ul>

              <Button>Inscreva-se</Button>
            </div>

            <div className="price-content">
              <h3>R$ 199 <br></br><span className='mensality'>mensal</span></h3>
            </div>
          </div>
          <div className="price-ouro price">
            <div className="box-left">
            <h1>OURO</h1>
              
              <ul>
                <li><img src={iconCorrect} alt="list" /> Cinco trocas por ano</li>
                <li><img src={iconCorrect} alt="list" /> Assistência especial</li>
                <li><img src={iconCorrect} alt="list" /> Suporte 24h</li>
                <li><img src={iconCorrect} alt="list" /> Cobertura nacional</li>
                <li><img src={iconCorrect} alt="list" /> Deconto em parceiros</li>
                <li><img src={iconCorrect} alt="list" /> Acesso ao Clube Bikcraft</li>
              </ul>

              <Button>Inscreva-se</Button>
            </div>

            <div className="price-content">
              <h3>R$ 299 <br></br><span className='mensality'>mensal</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}