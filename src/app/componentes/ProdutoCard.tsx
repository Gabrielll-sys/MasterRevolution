// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";

import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";


import IMaterial from "@/interfaces/IMaterial";

interface ProdutoCardProps {
  produto:IMaterial[]
}


export default function ({produto}) {

  return (
    <>
<div className="flex flex-wrap gap-10 justify-between">
      
        <div  className="flex">
          {/* Card itens */}
          <Card
            className="flex-wrap font-open bg-light"
            isPressable
            shadow="none"
        
            style={{ width: '380px', height: '480px' }}
          >
            <CardBody className="flex flex-col overflow-hidden relative p-0 m-0">
              <div
                className="image-container relative"
                style={{
                  height: '200px',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                      isZoomed
                      removeWrapper
                      alt="Card background"
                      className={`z-0 w-full h-full object-cover transition-transform `}
                      src={produto?.urlImage}
                    />
 
                      <div className="overlay absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center pointer-events-none">
                        <p className="text-small p-4">{`${produto?.descricao}`}</p>
                        <p className="text-small">{`Peso: ${produto?.marca} kg`}</p>
                      </div>
                 
            </div>
              <CardFooter className="px-0">
                <div className="flex justify-between w-full">
                  <div>
                    <p className=" w-full">{produto?.descricao}</p>
                    
                    {/* <p className="font-semibold">R$ {produto?.precoVenda.toFixed(2).toString().replace('.',',')}</p> */}
                  </div>
                
                 
                </div>
              </CardFooter>
            </CardBody>
          </Card>

        </div>
    
 
    </div>
    </>
  );
}