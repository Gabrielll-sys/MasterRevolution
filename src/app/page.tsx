'use client'

import { Flex, Switch } from "@radix-ui/themes"
import Banner from "./componentes/Banner"
import CarroselProdutosShowcase from "./componentes/CarroselProdutosShowcase"
import LPGrid from "./componentes/PresentationGrid"
import PresentationGrid from "./componentes/PresentationGrid"
import Image, { StaticImageData } from "next/image";
import bannerServicos from "./assets/banner-servicos-azul.png"
export default function Home() {
  return (
    <Flex direction="column">

    
        <Image
                      
                      width={200}
                      height={200}
                      quality={100}
                      layout="responsive"
                      alt="Card background"
                       className="transition-transform w-full h-full   "
                      src={require("./assets/banner-servicos.png")}
                     />
     
        <PresentationGrid/>
        <Banner/>
      {/* <CarroselProdutosShowcase/> */}
  

    </Flex>

  )
}
