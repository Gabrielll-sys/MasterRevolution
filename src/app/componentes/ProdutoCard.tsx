"use client";

import React, { useContext, useState } from "react";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg"
import IProduto from "@/interfaces/IProduto";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
import { ProdutoContext, useProduto } from "../contexts/ProdutoContext";
import { Flex } from "@radix-ui/themes";

interface ProdutoCardProps {
  produto: IProduto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {

  const {setProduto} = useProduto()
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();

  // Salva produto no local storage
  const handleStorageProductCart = (produto: IProduto) => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    // Verifica se o item já está no carrinho
    const itemExistente = arrItens.find((item: any) => item.id === produto.id);

    if (itemExistente) {
      setMessageAlert("Este item já está no seu carrinho");
      setSeveridadeAlert("warning");
      setOpenSnackBar(true);
    } else {
      

      arrItens.push(produto);
      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      setSeveridadeAlert("success");
      setMessageAlert(
        "O item " + produto.descricao + " foi adicionado no seu carrinho com sucesso!"
      );
      setOpenSnackBar(true);
    }
  };

  const handleClick = () => {
    setProduto(produto);
  };
  
  return (
    <div className="flex flex-wrap gap-2 justify-between border-1 border-grayLine rounded-sm ">
      {/* Card itens */}
      <Link onPress={handleClick} href={`produto/${produto.descricao}`}>
      <Card
        className="flex-wrap font-open bg-light p-3"
        isPressable
        shadow="none"
        style={{ width: "320px", height: "370px" }}
      >
        <CardBody className="flex flex-col overflow-hidden relative p-0 m-0">
          <div
            className=" text-center align-middle items-center flex justify-center"
            style={{
              height: "300px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image alt="Card background" height={220} width={220} className={`z-0  transition-transform `} src={imagem} />
          </div>
          <CardFooter className="px-0">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="w-full text-center">
                {produto?.descricao} {produto.marca}
              </p>
              {produto.precoVenda != null ? (

             <Flex direction="column" gap="3">  
                 <p className="font-semibold text-center  font-quicksand text-sm">
                 <strong className="text-[#32BCAD] text-[20px]">R${produto?.precoVenda.toFixed(2).toString().replace(".", ",")}</strong>   no PIX
                 </p>
                 <p className="font-semibold text-center font-quicksand text-base">
                  1x de <strong >R${produto?.precoVenda.toFixed(2).toString().replace(".", ",")}</strong>
                 </p>
             </Flex>
              ) : (
                <p className="font-semibold text-center text-[#32BCAD] font-quicksand text-[18px]">
                  R$0,00
                </p>
              )}

              {/* <Link
                className="hover:scale-105"
                onClick={() => {
                  handleStorageProductCart(produto);
                  handleClick();
                }}
                href={`produto/${produto.descricao}`}
              >
                <div className="bg-green shadow-md p-3">
                  <CartPlusIcon fill="white" />
                </div>
              </Link> */}
            </div>
          </CardFooter>
        </CardBody>
      </Card>
      </Link>

      <Snackbar
        open={openSnackBar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
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
  );
};

export default ProdutoCard;
