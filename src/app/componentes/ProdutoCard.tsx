// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";

import { Card, CardBody ,CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg"
import IProduto from "@/interfaces/IProduto";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
interface ProdutoCardProps {
  produto:IProduto
}


export default function ({produto}:ProdutoCardProps) {

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();




 // Salva produto no local storage
 const handleStorageProductCart = ( produto:IProduto) => {
  const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

  // Verifica se o item já está no carrinho
  const itemExistente = arrItens.find((item: any) => item.id === id);

  if (itemExistente) {
    setMessageAlert("Este item já está no seu carrinho");
    setSeveridadeAlert("warning");
    setOpenSnackBar(true);
  } else {
    const novoItem = {
      id: produto.descricao,
      nome:  produto.descricao,
      quantidade: 2,
    };

    arrItens.push(novoItem);
    setCartItems(arrItens)
    localStorage.setItem("cartItens", JSON.stringify(arrItens));
    
    setSeveridadeAlert("success");
    setMessageAlert(
      "O item " + produto.descricao + " foi adicionado no seu carrinho com sucesso!"
    );

    setOpenSnackBar(true);
  }
};




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
                    
                    <Link
                  className="hover:scale-105"
                  onClick={() =>
                    handleStorageProductCart(
                    produto
                    )
                  }
                  href={`produto/${produto.descricao}`}
                >
                  <div className="bg-green shadow-md p-3">
                    <CartPlusIcon fill="white" />
                  </div>
                </Link>

                 
                </div>
              </CardFooter>
            </CardBody>
          </Card>

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
       
    
 
    </div>
    </>
  );
}