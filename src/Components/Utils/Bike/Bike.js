import './Bike.css'

export const Bike = ({img, title, price}) => {
  return (
    <div className="bike">
      <img src={img} alt="bike" className="img-box"/>
      <h1 className="font-1-xl">{title}</h1>
      <p className="font-2-m">{price}</p>
    </div>
  )
}