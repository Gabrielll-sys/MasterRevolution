import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
 import cabovermelho from "../assets/imagem-cabo-vermelho.jpg"
 import condutores from "../assets/imagem-condutores.jpg"
 import disjuntorMonopolar from "../assets/disjuntor-monopolar.jpg"
 import disjuntorBipolar from "../assets/disjuntor-bipolar.jpg"
 import disjuntorTripolar from "../assets/disjuntor-tripolar.jpg"
 import eletrocalhaPerfurada from "../assets/eletrocalha-perfurada.jpg"
 import eletrodutoGalvanizado from "../assets/eletroduto-galvanizado.jpg"
 import condulete from "../assets/imagem-condulete.jpg"
 import caixaPassagem from "../assets/imagem-caixa-passagem.png"
 import tampaParaTomadaParaConduleteRedonda from "../assets/imagem-tampa-para-tomada-para-condulete-redonda.jpg"
 import sealtubo from "../assets/imagem-sealtubo.jpg"
import Link from "next/link";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imagensCabos :StaticImageData[] = [
  condutores,
  cabovermelho
];
const imagensDisjuntores :StaticImageData[]= [
  disjuntorMonopolar,
  disjuntorBipolar,
  disjuntorTripolar
];
const imagensInfraestrutura :StaticImageData[]= [
  eletrocalhaPerfurada,
  eletrodutoGalvanizado,
  condulete,
  caixaPassagem,
  sealtubo,
  tampaParaTomadaParaConduleteRedonda
];
const PresentationGrid = () => {
  

  const settings = {
    dots: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  
  return (
    <>
    
   
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
        {/* First row */}
        <div
          className="grid-box bg-white flex items-center justify-center order-1  "
          style={{ height: "350px" }}
        >
          <div className="elements text-left p-12">
            <p className="uppercase sm:text-base lg:text-lg ">Cabos</p>
            <p className="2xl:py-8 font-light text-2xl  ">Cabos de alta qualidade com diversas cores e uma GRANDE variedade de tamanhos.Vendemos no ROLO e por METRO</p>
            
          </div>
        </div>
        <div
          className="grid-box  flex items-center justify-center  order-2"
          style={{ height: "450px" }}
        >
    
          
        <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              
            }}
            >
            


            <Slider {...settings} >
            {imagensCabos.map((imagem)=>(

              <Image
                      
                       width={600}
                       height={600}
                       quality={100}
                        layout="responsive"
                       alt="Card background"
                        className="transition-transform   "
                        src={imagem}
                      />
          
            ))}
        


      </Slider>
          </div>
    
        </div>
        <div
          className="grid-box bg-white flex items-center justify-center order-3  "
          style={{ height: "350px" }}
        >
          <div className="elements text-left p-10">
          <p className="uppercase text-lg font-quicksand ">Disjuntores</p>
          <p className="2xl:py-8 font-light text-2xl ">Uma Vasta Gama de Disjuntores Residencias, sendo Monopolar,Bipolar e Tripolar </p>
            
          </div>
        </div>

        <div
          className="grid-box  flex items-center justify-center order-4"
          style={{ height: "350px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            
            <Slider {...settings} className=" h-[900px] W-[900px]">

            {imagensDisjuntores.map((imagem)=>(

              <Image
                      width={400}
                      height={400}
                      quality={100}
                      layout="responsive"
                      alt="Card background"
                        className={` transition-transform object-contain  `}
                        src={imagem}
                      />

            ))}

            </Slider>

          </div>
        </div>
       
        <div
          className="grid-box  flex items-center justify-center order-5  sm:inline-block "
          style={{ height: "350px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
     <Slider {...settings}>

          {imagensInfraestrutura.map((imagem)=>(

            <Image
                    width={200}
                    height={200}
                    quality={100}
                    layout="responsive"
                    objectFit="cover"
                    alt="Card background"
                      className={` transition-transform object-contain  `}
                      src={imagem}
                    />

          ))}

          </Slider>

          </div>
        </div>

        <div
          className="grid-box bg-white flex items-center justify-center order-6  "
          style={{ height: "450px" }}
        >
          <div className="elements text-left p-20  ">
          <p className="uppercase ">Infraestrutura Elétrica</p>
            <p className="2xl:py-8 font-light text-2xl">Materiais para infraestrutura como eletrocalha,eletroduto tomadas etc</p>
        
          </div>
        </div>

        <div
          className="grid-box  flex items-center justify-center order-7  "
          style={{ height: "250px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "150%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
         
          </div>
        </div>

        <div
          className="grid-box bg-white flex items-center justify-center order-8  "
          style={{ height: "450px" }}
        >
          <div className="elements text-left p-20">
            <p className="uppercase text-lg ">E muito mais</p>
            <p className="2xl:py-8 font-light text-2xl">Vem olhar nossa seleção, tem Chita para todo gosto!</p>
            <Link href="/all-products">
              <Button color="primary" className="py-8 my-2">
                Ver produtos
              </Button>
            </Link>
          </div>
        </div>
      </div>

   
     
    </>
    
  );
};

export default PresentationGrid
