'use client'

import Banner from "./componentes/Banner"
import CarroselProdutosShowcase from "./componentes/CarroselProdutosShowcase"
import LPGrid from "./componentes/LPGrid"
import PresentationGrid from "./componentes/PresentationGrid"

export default function Home() {
  return (
    <div>

        <PresentationGrid/>
      <CarroselProdutosShowcase/>
      <Banner/>

    </div>

  )
}
