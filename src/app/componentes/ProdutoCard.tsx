"use client";

import React, { useContext, useState } from "react";
import { Card, CardBody, CardFooter} from "@nextui-org/react";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg";
import IProduto from "@/interfaces/IProduto";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
import ProdutoContextProvider, { useProduto } from "../contexts/ProdutoContext";
import { Box, Button, Flex } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";

interface ProdutoCardProps {
  produtoCard: IProduto;
}

const ProdutoCard = ({ produtoCard }:ProdutoCardProps) => {
  const route = useRouter()
  const { setProduto,produto } = useProduto()
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();
  const path = usePathname()
  
const handleChangeRouteToProductPage = ()=>{
  
  

    route.push(`/produto/${produtoCard.descricao}-id=${produtoCard.id}`)
  

}

 

  return (
    <div className="flex flex-wrap gap-2 justify-between border-1 border-grayLine rounded-sm">
      <div  onClick={handleChangeRouteToProductPage} className="cursor-pointer">
   
        <Card
          className="flex-wrap font-open bg-light p-3"
          isPressable
          shadow="none"
          onPress={handleChangeRouteToProductPage}
          style={{ width: "320px", height: "370px" }}
        >
          <CardBody className="flex flex-col overflow-hidden relative p-0 m-0">
            <div className="text-center align-middle items-center flex justify-center overflow-hidden h-[300px] w-[100%] max-sm:w-[50%] max-sm:h-[200px]">
              <Image
                alt="Card background"
                height={220}
                width={220}
                loading="lazy"
                className="z-0 transition-transform"
                src={imagem}
               
              />
            </div>
            <CardFooter className="px-0">
              <div className="flex flex-col justify-center items-center gap-4">
                <Text className="w-full text-center text-sm ">
                  {produtoCard?.descricao} {produtoCard?.marca}
                </Text>
                {produtoCard?.precoVenda != null ? (
                  <Flex direction="column" gap="3">
                    <p className="font-semibold text-center font-quicksand text-sm max-sm:text-[14px]">
                      <strong className="text-[#32BCAD] max:md:text-[20px] max-sm:text-[14px]">
                        R${produtoCard?.precoVenda.toFixed(2).toString().replace(".", ",")}
                      </strong>{" "}
                      no PIX
                    </p>
                    <p className="font-semibold text-center font-quicksand text-base max-sm:text-[14px]">
                      1x de <strong>R${produtoCard?.precoVenda.toFixed(2).toString().replace(".", ",")}</strong>
                    </p>
                  </Flex>
                ) : (
                  <p className="font-semibold text-center text-[#32BCAD] font-quicksand text-[18px]">
                    R$0,00
                  </p>
                )}
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      </div>

      <Snackbar
        open={openSnackBar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={2000}
        onClose={(e) => setOpenSnackBar(false)}
      >
        <MuiAlert onClose={(e) => setOpenSnackBar(false)} severity={severidadeAlert} sx={{ width: "100%" }}>
          {messageAlert}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ProdutoCard;
