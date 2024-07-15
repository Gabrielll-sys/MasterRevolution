'use client'

import { Switch } from "@radix-ui/themes"
import Banner from "./componentes/Banner"
import CarroselProdutosShowcase from "./componentes/CarroselProdutosShowcase"
import LPGrid from "./componentes/PresentationGrid"
import PresentationGrid from "./componentes/PresentationGrid"

export default function Home() {
  return (
    <div>

        <PresentationGrid/>
        <Banner/>
      {/* <CarroselProdutosShowcase/> */}
  

    </div>

  )
}
