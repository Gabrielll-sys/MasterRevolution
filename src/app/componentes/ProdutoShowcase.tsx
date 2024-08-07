"use client"
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg"
import { Button} from "@nextui-org/react";
import IconPix from "../assets/icons/IconPix";
import IconCreditCard2Back from "../assets/icons/IconCreditCard2Back";
import QuantityManagerCart from "./QuantityManagerCart";
import IProduto from "@/interfaces/IProduto";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton, Text } from "@radix-ui/themes";
import IconWhatsapp from "../assets/icons/IconWhatsapp";
import { useState } from "react";
import { AlertColor, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Flex } from "@radix-ui/themes";
import IItemCarrinho from "@/interfaces/IITemCarrinho";
import IconMinusSquare from "../assets/icons/IconMinusSquare";
import IconPlusSquare from "../assets/icons/IconPlusSquare";
type ProdutoCardProps =  {
    produto: IProduto;
  }


 const ProdutoShowcase= ({produto}: ProdutoCardProps)=>{
  
    const router = useRouter()
    const pathname = usePathname();
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [messageAlert, setMessageAlert] = useState<string>("");
    const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();
    const [quantidade, setQuantidade] = useState<number>(1);
    const url = "http://localhost:3000"

  

    const handleStorageProductCart = () => {
      
      const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
      const itemExistente: IItemCarrinho = arrItens.find((item: any) => item.id === produto.id);
      
      if (itemExistente) {
        setMessageAlert("Este item já está no seu carrinho");
        setSeveridadeAlert("warning");
        setOpenSnackBar(true);
      } else {
        
        produto.quantidade = quantidade
        arrItens.push(produto);
        console.log(produto)
        localStorage.setItem("cartItens", JSON.stringify(arrItens));
     
        setSeveridadeAlert("success");
        setMessageAlert(
          "O item " + produto.descricao + " foi adicionado no seu carrinho com sucesso!"
        );
        setOpenSnackBar(true);
      }
    };

 
    const chamarWhatsAppComDescricaoDoProduto = ()=>{
            const mensagem = ` Olá ${getPeriodoDia()}, me interessei pelo produto:${url}${pathname} `
        router.push(
        
        `https://api.whatsapp.com/send?phone=71103718&text=${mensagem}`
        )

}



  const handleIncreaseQuantity = ()=>
    {
        setQuantidade(quantidade+1)
    }
 const handleDecreaseQuantity = ()=>{
  
  quantidade==1 ? setQuantidade(1) : setQuantidade(quantidade-1)
 
    
  }

const getPeriodoDia = ()=>{

    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      return "Bom Dia";
    } else if (hour >= 12 && hour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }


    
    return(
        <>
      <Flex justify="center" direction="row" gap='8' className="mt-10 "  >

      <Image alt="Card background" loading="lazy"  className={` transition-transform max-sm:w-[150px] max-sm:h-[150px] w-[250px] h-[250px] `} src={imagem} />
      
        <div className="flex flex-col gap-12 w-[400px] border-1 border-grayLine p-5 ">
        

        <Text className="font-bold" size="1" > <Skeleton loading={!produto?.descricao}>{produto?.descricao} </Skeleton> </Text>
        


        <div className="flex flex-row max-sm:w-[200px] justify-between ">

        <div className="flex flex-col gap-2">
            
        <Text  className="max-sm:text-[12px] text-[#32BCAD] font-quicksand"> <IconPix height="18" width="18" />R${produto?.precoVenda?.toFixed(2).toString().replace(".", ",")}</Text>
        <Text className="text-[12px] ">PREÇO A VISTA</Text>
        </div>

        <div className="flex flex-col gap-2">
            
        <Text  className="max-sm:text-[12px]"><IconCreditCard2Back  height="18" width="18" />R$20,00</Text>
        <Text className="text-[12px]">EM ATE <strong>5x</strong> SEM JUROS</Text>
        </div>


        </div>

        <div className="flex flex-col gap-8 ">

            <div className="flex flex-row w-full justify-between flex-wrap max-sm:gap-7 ">

              <Flex gap="5" className="flex items-center gap-5 border-1 border-grayLine rounded-md p-1 h-[40px] w-[132px]  ">
            <Button
              isIconOnly
              className="shadow-sm hover:opacity-80 hover:scale-105 bg-transparent"
              variant="flat"
              onPress={handleDecreaseQuantity}

            >
              <IconMinusSquare color="black" />
            </Button>

            <span>{quantidade}</span>

            <Button
              isIconOnly
              variant="flat"
              className="shadow-sm hover:opacity-80 hover:scale-105 bg-transparent "
              onPress={handleIncreaseQuantity}
            >
              <IconPlusSquare color="black" />
            </Button>
          </Flex>
                <Button className="bg-[#1DB954] text-white text-[16px] max-sm:w-[180px] p-6 rounded-md" onClick={handleStorageProductCart}>
                    Adicionar ao Carrinho
                </Button>
            </div>
              <Button onPress={chamarWhatsAppComDescricaoDoProduto} startContent={<IconWhatsapp width={"1.4em"} height={"1.4em"} color="green" />} className="bg-transparent p-6 rounded-md  border-1 border-green max-sm:text-[16px] max-sm:w-[180px] text-[18px]  text-green">
                        Falar com atendente
              </Button>
              
                  
                 
           
            
                
        </div>
        </div>

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
export default ProdutoShowcase;