import { Bike } from "../../Utils/Bike/Bike"
import magicMight from '../../../assets/bicicletas/magic-home.jpg'
import nimbusStark from '../../../assets/bicicletas/nimbus-home.jpg'
import nebulaCosmic from '../../../assets/bicicletas/nebula-home.jpg'

// CSS
import './Bikes.css'

export const Bikes = () => {
  return (
    <div className="section-bikes-container">
      <div className="section-bikes">
        <div className="section-bikes-h1">
        <h1 className="font-1-xxl">escolha a sua<span className="dot-yellow">.</span></h1>
        </div>
        <div className="all-bikes">
          <div className="section-bikes-box">
          <Bike img={magicMight} title='Magic Might' price='R$ 2499' />
          <Bike img={nimbusStark} title='Magic Might' price='R$ 2499' />
          <Bike img={nebulaCosmic} title='Magic Might' price='R$ 2499' />
          </div>
        </div>
      </div>
    </div>
  )
}