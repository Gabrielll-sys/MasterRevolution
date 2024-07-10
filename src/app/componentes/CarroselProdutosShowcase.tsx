'use client';

import IMaterial from "@/interfaces/IMaterial";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function CarroselProdutosShowcase() {
  const [materiais, setMateriais] = useState<IMaterial[]>([]);
  const [isClient, setIsClient] = useState(false);
  const imagens = ["/src/app/assets/773203414-frutas-e1701802035802.png","/src/app/assets/frutas_da_estacao_ypedia-scaled-1698513255.jpg","/src/app/assets/pera-frutas-de-marco.jpg"]

  useEffect(() => {
    setIsClient(true);
   
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  if (!isClient) {
    return null; // Prevents hydration error
  }

  return (
  <>
 
      <Slider {...settings}>
      
          <div >
        
           

          <Image  className="py-5 hover:scale-30 max-sm:mt-1 max-sm:w-[100px] max-sm:h-[80px] w-full h-full" src={require('../assets/IMG-20240708-WA0003.jpg')}alt="logo master" />

            
          </div>
       
      </Slider>
      </>
  );
}