"use client";

import React, { useContext, useState } from "react";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";
import imagem from "../assets/imagem-cabo-vermelho.jpg"
import IProduto from "@/interfaces/IProduto";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
import { ProdutoContext } from "../contexts/ProdutoContext";

interface ProdutoCardProps {
  produto: IProduto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
  const { setProduto } = useContext(ProdutoContext);
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
    console.log(produto)
    setProduto(produto);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-between border-1 border-black rounded-md shadow-sm shadow-black">
      {/* Card itens */}
      <Card
        className="flex-wrap font-open bg-light p-3"
        isPressable
        shadow="none"
        style={{ width: "380px", height: "480px" }}
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
            <Image alt="Card background" height={300} width={300} className={`z-0  transition-transform `} src={imagem} />
          </div>
          <CardFooter className="px-0">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="w-full text-center">
                {produto?.descricao} - {produto.marca}
              </p>
              {produto.precoVenda != null ? (
                <p className="font-semibold text-center text-green font-quicksand text-2xl">
                  R${produto?.precoVenda.toFixed(2).toString().replace(".", ",")}
                </p>
              ) : (
                <p className="font-semibold text-center text-green font-quicksand text-2xl">
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
