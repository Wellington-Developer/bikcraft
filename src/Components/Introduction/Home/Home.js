import ImgBikeHome from '../../../assets/bicicleta/nimbus1.jpg'
import { Button } from '../../Utils/Button/Button'

// CSS
import './Home.css'

export const Home = () => {
  return (
    <div className="section-container">
      <div className="section-home">
        <div className="section-home-left">
          <h1 className="font-1-xxl">Bicicletas feitas sob medida<span className="dot-yellow">.</span></h1>
          <p className="font-2-l">Bicicletas elétricas de alta precisão e qualidade,  
          feitas sob medida para o cliente. Explore o mundo na 
          sua velocidade com a Bikcraft</p>
          <Button>Selecione a sua</Button>
        </div>

        <div className="section-home-right">
          <img src={ImgBikeHome} alt="Modelo de Bicileta da Nimbus Stark - Bikcraft"/>
        </div>
      </div>
    </div>
  )
}