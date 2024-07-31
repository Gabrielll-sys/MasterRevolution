'use client'
import IProduto from '@/interfaces/IProduto';
import { Box, Button, Flex, Progress, Separator, Text } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import CarrinhoCard from '../componentes/CarrinhoCard';
import { AlertColor, Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import IconWhatsapp from '../assets/icons/IconWhatsapp';
import IItemCarrinho from '@/interfaces/IITemCarrinho';

export default function Carrinho() {
  
    const [produtosCarrinho,setProdutosCarrinho] = useState<IProduto[]>([])
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [messageAlert, setMessageAlert] = useState<string>("");
    const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();
    const [precoTotal,setPrecoTotal] = useState("0")

    useEffect(()=>{

      const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
      setProdutosCarrinho(arrItens)
      calcularTotalProdutosCarrinho()
    },[])

 
  
  const deleteProdutoCarrinho = (id:number)=>{

    const produtosCarrinho : IProduto[] = JSON.parse(localStorage.getItem("cartItens") || "[]");

    const withoutProduto = produtosCarrinho.filter(x=>x.id!=id)

    setProdutosCarrinho(withoutProduto)

    setMessageAlert("Produto Removido Do Seu Carrinho");
    setSeveridadeAlert("success");
    setOpenSnackBar(true);

    localStorage.setItem("cartItens", JSON.stringify(withoutProduto));


  }

  const calcularTotalProdutosCarrinho = ()=>{

    let total = 0;
    const produtosCarrinho : IProduto[] = JSON.parse(localStorage.getItem("cartItens") || "[]");


    produtosCarrinho.forEach(produto => {
      if(produto.precoVenda!= undefined && produto.precoVenda!=null){

        total+=produto?.precoVenda
      }
    });

    console.log(total)
    setPrecoTotal(total.toFixed(2).replace('.',','))

  }

  const finalizarPedidoWhatsApp = ()=>{

    const produtoCarrinhoUsuario: IItemCarrinho[] = JSON.parse(localStorage.getItem("cartItens") || "[]");


  }
  
  
    return (
      <>
      <Flex direction="row" gapX="3" justify="center" my="7" >
  
          <Flex direction="column" width="90vw" justify="center" gap="6">
  
  
              <Flex direction="column" gap="6" justify="center"   >
  
              {produtosCarrinho.map((produto:IProduto)=>(
  
                  <CarrinhoCard produto={produto} onDeleteProdutoCarrinho={(id)=>deleteProdutoCarrinho(id)} />
  
              ))}
              </Flex>
  
             
          </Flex>

              <Box width="500px" height="200px" className='border-1 border-grayLine p-4'>

               <Flex direction="column" gapY="3">
              <Text>Resumos da compra</Text>
              <Separator my="3" size="4" />
              <Flex direction="row" justify="between">

              <Text>Desconto</Text>
              <Text className='text-[14px]'>R${precoTotal}</Text>
              </Flex>

              <Flex direction="row" justify="between">
              <Text>Produtos</Text>
              <Text className='text-[14px]'>R${precoTotal}</Text>
              
              </Flex>
              <Progress value={70} duration="10s" />
              <Text>Adicione mais R$40,50 de produtos para conseguir desconto%</Text>
              <Button  onClick={finalizarPedidoWhatsApp} size="2" color='green' variant='outline' className="text-[18px] max-w-[500px] self-center p-4  text-green">
              <IconWhatsapp width={"1.2em"} height={"1.2em"} color="green" />  Finalizar Pedido 
                </Button>
               </Flex>

              </Box>
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
