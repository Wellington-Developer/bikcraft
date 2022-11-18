import { Bikes } from "./Bikes/Bikes"
import { Home } from "./Home/Home"
import { Information } from "./Information/Information"
import { Network } from "./Network/Network"
import { Recomendations } from "./Recomendations/Recomendations"
import { Price } from "./Price/Price"

export const Introduction = () => {
  return (
    <div>
      <Home />
      <Bikes />
      <Information />
      <Network />
      <Recomendations />
      <Price />
    </div>
  )
}