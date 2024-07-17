'use client';

import { getAllMateriais } from "@/app/services/Material.Services";
import IProduto from "@/interfaces/IProduto";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CarroselProdutosShowcase() {
  const [materiais, setMateriais] = useState<IProduto[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    handleMateriais();
  }, []);

  const handleMateriais = async () => {
   
    const materiais = await getAllMateriais();
    setMateriais(materiais)

  };

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
        { materiais.map((material) => (
          <div key={material.id}>
            <p>{material.descricao}</p>
            {material.urlImage !=null && (

            <Image
              src={material.urlImage}
              alt={`Imagem de ${material.descricao}`}
              width={80}
              height={80}
              className="cursor-pointer"
            />
            )}
          </div>
        ))}
      </Slider>
      </>
  );
}