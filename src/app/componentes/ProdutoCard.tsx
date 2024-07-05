// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";

import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";


import { Box } from "@mui/material";
import IMaterial from "@/interfaces/IMaterial";


export default function ProdutoCard(produto:IMaterial) {






 

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
                  height: '400px',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                      isZoomed
                      removeWrapper
                      alt="Card background"
                      className={`z-0 w-full h-full object-cover transition-transform `}
                      src={produto.urlImage}
                    />
 
                      <div className="overlay absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center pointer-events-none">
                        <p className="text-small p-4">{`${produto.descricao}`}</p>
                        <p className="text-small">{`Peso: ${produto.marca} kg`}</p>
                      </div>
                 
            </div>
              <CardFooter className="px-0">
                <div className={product.estoque>0?"flex justify-between w-full":"flex justify-between w-full flex-col p-0"}>
                  <div>
                    <p className=" w-full">{product.nome}</p>
                    <p className="font-semibold">R$ {product.preco.toFixed(2).toString().replace('.',',')}</p>
                  </div>
                  {product.estoque>0?
                  
                  <Link
                  className="hover:scale-105"
                  onClick={() =>
                    handleStorageProductCart(
                      product._id,
                      product.nome,
                      product.quantidade
                    )
                  }
                >
                  <div className="bg-green shadow-md p-3">
                    <CartPlusIcon fill="white" />
                  </div>
                </Link>

                 :
                 <div className="text-center mt-2">
                 
                 <p className="text-base "> Estamos sem este produto no estoque no momento</p>
                 
                 </div>
                 }
                 
                </div>
              </CardFooter>
            </CardBody>
          </Card>

        </div>
      ))}

    {/* completa grid com divs vazios */}
    {productData?.length!=undefined && [...Array((3 - (productData?.length % 3 || 3)) % 3)].map((_, index) => (
        <div key={`empty-${index}`} className="flex" style={{ width: '380px' }}>
          {/* Empty div */}
        </div>
      ))}
   
          <Box sx={{ display: 'flex', justifyContent: 'center',alignSelf: 'center',textAlign:'center' }}>
            <Snackbar
              open={openSnackBar}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              autoHideDuration={2000}
              onClose={(e) => setOpenSnackBar(false)}
            >
              <MuiAlert
                onClose={(e) => setOpenSnackBar(false)}
                severity={severidadeAlert}
                sx={{ width: "100%" }}
              >
                {messageAlert}
              </MuiAlert>
            </Snackbar>
    
          </Box>
    </div>
    </>
  );
}