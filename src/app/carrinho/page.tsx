'use client'
import IProduto from '@/interfaces/IProduto';
import { Flex, Text } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import CarrinhoCard from '../componentes/CarrinhoCard';
import { AlertColor, Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";

export default function Carrinho() {
  
    const [produtosCarrinho,setProdutosCarrinho] = useState<IProduto[]>([])
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [messageAlert, setMessageAlert] = useState<string>("");
    const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();
  useEffect(()=>{

    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    setProdutosCarrinho(arrItens)

  },[])
  
  const deleteProdutoCarrinho = (id:number)=>{

    const arrItens : IProduto[] = JSON.parse(localStorage.getItem("cartItens") || "[]");

    const withoutProduto = arrItens.filter(x=>x.id!=id)

    setProdutosCarrinho(withoutProduto)

    setMessageAlert("Produto Removido Do Seu Carrinho");
    setSeveridadeAlert("success");
    setOpenSnackBar(true);

    localStorage.setItem("cartItens", JSON.stringify(withoutProduto));


  }
  
  
    return (
      <>

        <Flex direction="column" width="100vw" justify="center" gap="6">
      <Text className='self-center text-2xl bg-master_yellow w-full text-center p-4'>Meu Carrinho</Text>

            <Flex direction="column" gap="6" justify="center"   >

            {produtosCarrinho.map((produto:IProduto)=>(
               
                <CarrinhoCard produto={produto} onDeleteProdutoCarrinho={(id)=>deleteProdutoCarrinho(id)} />

            ))}
            </Flex>


        </Flex>


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



        </>
  )
}
