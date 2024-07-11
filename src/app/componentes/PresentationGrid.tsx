import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
 import cabovermelho from "../assets/imagem-cabo-vermelho.jpg"
import Link from "next/link";

const images = [
  "imagem-cabo-vermelho.jpg",
 
];

const PresentationGrid = () => {

 
  
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
        {/* First row */}
        <div
          className="grid-box bg-white flex items-center justify-center order-1"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
            <p className="uppercase sm:text-base lg:text-lg">Cabos</p>
            <p className="2xl:py-8 font-light">Cabos de diversos tipos cores e uma GRANDE variedade de tamanhos.</p>
            <Link href="/all-products/Estandartes">
              <Button color="primary" className="py-8 my-2">
                Ver produtos
              </Button>
            </Link>
          </div>
        </div>
        <div
          className="grid-box bg-green flex items-center justify-center  order-2"
          style={{ height: "250px" }}
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
              <Image
                     width={80}
                     height={80}
                      alt="Card background"
                      className={`z-0 w-full h-full object-cover transition-transform `}
                      src={cabovermelho}
                    />
 
          </div>
        </div>
        <div
          className="grid-box bg-white flex items-center justify-center order-3"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
          <p className="uppercase text-lg">Cama e Mesa</p>
          <p className="2xl:py-8 font-light">Toalhas, passadeiras, colchas e jogo americano, etc.</p>
            <Link href="/all-products/Cama e Mesa">
              <Button color="primary" className="py-8 my-2">
                Ver produtos
              </Button>
            </Link>
          </div>
        </div>

        <div
          className="grid-box bg-green flex items-center justify-center order-4"
          style={{ height: "250px" }}
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
           <Image
                     width={80}
                     height={80}
                      alt="Card background"
                      className={`z-0 w-full h-full object-cover transition-transform `}
                      src={cabovermelho}
                    />
          </div>
        </div>
       
        <div
          className="grid-box bg-green flex items-center justify-center order-5  sm:inline-block"
          style={{ height: "250px" }}
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
           <Image
                     width={80}
                     height={80}
                      alt="Card background"
                      className={`z-0 w-full h-full object-cover transition-transform `}
                      src={cabovermelho}
                    />
          </div>
        </div>

        <div
          className="grid-box bg-white flex items-center justify-center order-6"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20 ">
          <p className="uppercase text-lg">Ecobags e Carteiras</p>
            <p className="2xl:py-8 font-light">De tamanho para todo agrado, zíper e bolsos internos e externos</p>
            <Link href="/all-products/Ecobags e Carteiras">
              <Button color="primary" className="py-8 my-2">
                Ver produtos
              </Button>
            </Link>
          </div>
        </div>

        <div
          className="grid-box bg-green flex items-center justify-center order-7"
          style={{ height: "250px" }}
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
            <Image
                     width={40}
                     height={40}
                      alt="Card background"
                      className={`z-0 w-[50%] h-[50%]  transition-transform `}
                      src={cabovermelho}
                    />
          </div>
        </div>

        <div
          className="grid-box bg-white flex items-center justify-center order-8"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
            <p className="uppercase text-lg">E muito mais</p>
            <p className="2xl:py-8 font-light">Vem olhar nossa seleção, tem Chita para todo gosto!</p>
            <Link href="/all-products">
              <Button color="primary" className="py-8 my-2">
                Ver produtos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationGrid
