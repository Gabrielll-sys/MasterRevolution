// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";

import { Card, CardBody ,CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg"
import IProduto from "@/interfaces/IProduto";

interface ProdutoCardProps {
  produto:IProduto
}


export default function ({produto}:ProdutoCardProps) {

  return (
    <>
<div className="flex flex-wrap gap-2 justify-between border-1 border-black rounded-md shadow-sm shadow-black">
      
    
          {/* Card itens */}
          <Card
            className="flex-wrap font-open bg-light p-3"
            isPressable
            shadow="none"
        
            style={{ width: '380px', height: '480px' }}
          >
            <CardBody className="flex flex-col overflow-hidden relative p-0 m-0">
              <div
                className="image-container relative"
                style={{
                  height: '300px',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                     
                      
                      alt="Card background"
                      className={`z-0  transition-transform `}
                      src={imagem}
                    />
 
                      {/* <div className="overlay absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center pointer-events-none">
                        <p className="text-small p-4">{produto?.descricao} - {produto.marca}</p>
                        <p className="text-small">{`Peso: ${produto?.marca} kg`}</p>
                      </div>
                  */}
            </div>
              <CardFooter className="px-0">
                <div className="flex flex-col  justify-center items-center  gap-4">
                  
                    <p className=" w-full text-center">{produto?.descricao} - {produto.marca}</p>
                    { produto.precoVenda !=null ?
                      <p className="font-semibold text-center text-green font-quicksand text-2xl">R${ produto?.precoVenda.toFixed(2).toString().replace('.',',')}</p>
                      :
                      <p className="font-semibold text-center text-green font-quicksand text-2xl"> R$0,00</p>

                    }
                    
              
                 
                </div>
              </CardFooter>
            </CardBody>
          </Card>

       
    
 
    </div>
    </>
  );
}