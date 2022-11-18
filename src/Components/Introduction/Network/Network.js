import './Network.css'
import imgCaravan from '../../../assets/parceiros/caravan.svg'
import imgDogs from '../../../assets/parceiros/dogs.svg'
import imgFlexBlog from '../../../assets/parceiros/flexblog.svg'
import imgHandle from '../../../assets/parceiros/handel.svg'
import imgLescone from '../../../assets/parceiros/lescone.svg'
import imgRanek from '../../../assets/parceiros/ranek.svg'
import imgSurfboat from '../../../assets/parceiros/surfbot.svg'
import imgWildbeast from '../../../assets/parceiros/wildbeast.svg'


export const Network = () => {
  return (
    <div className="section-network-container">
      <div className="section-network">
        <h1 className="font-1-xxl section-network-h1">nossos parceiros<span className='dot-yellow'>.</span></h1>
      
        <div className="section-network-box">
          <div className="network-box">
            <img src={imgCaravan} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgDogs} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgFlexBlog} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgHandle} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgLescone} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgRanek} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgSurfboat} alt="icone" />
          </div>

          <div className="network-box">
            <img src={imgWildbeast} alt="icone" />
          </div>
        </div>
      </div>
    </div>
  )
}