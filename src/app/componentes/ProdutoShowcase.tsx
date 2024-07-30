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
type ProdutoCardProps =  {
    produto: IProduto;
  }


 const ProdutoShowcase= ({produto}: ProdutoCardProps)=>{
  
    const router = useRouter()
    const pathname = usePathname();
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [messageAlert, setMessageAlert] = useState<string>("");
    const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();


  

    const handleStorageProductCart = () => {

      const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
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

    const verLocal = ()=>{

        const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
        console.log(arrItens)
    }
    const chamarWhatsAppComDescricaoDoProduto = ()=>{
            const mensagem = ` Olá ${getPeriodoDia()}, me interessei pelo produto: ${pathname} `
        router.push(
        
        `https://api.whatsapp.com/send?phone=71103718&text=${mensagem}`
        )

}

const getPeriodoDia = ()=>{

    const now = new Date();
    const hour = now.getHours();
    console.log(hour)
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
      <Flex justify="center" direction="row" gap='8' className="mt-10"  >

      <Image alt="Card background" width={320} height={320} className={` transition-transform `} src={imagem} />
      
        <div className="flex flex-col gap-12 w-[400px]">
        

        <Text className="font-bold"> <Skeleton loading={!produto?.descricao}>{produto?.descricao} </Skeleton> </Text>
        


        <div className="flex flex-row justify-between ">

        <div className="flex flex-col gap-2">
            
        <p  className="text-2xl text-[#32BCAD] font-quicksand"> <IconPix height="18" width="18" />R${produto?.precoVenda?.toFixed(2).toString().replace(".", ",")}</p>
        <p className="text-[12px] ">PREÇO A VISTA</p>
        </div>

        <div className="flex flex-col gap-2">
            
        <p  className="text-2xl"><IconCreditCard2Back height="18" width="18"/>R$20,00</p>
        <p className="text-[12px]">EM ATE <strong>5x</strong> SEM JUROS</p>
        </div>


        </div>

        <div className="flex flex-col gap-8">

            <div className="flex flex-row w-full justify-between">
                <QuantityManagerCart />
                <Button className="bg-[#1DB954] text-white text-[16px] p-6 rounded-md" onClick={handleStorageProductCart}>
                    Adicionar ao Carrinho
                </Button>
            </div>
              <div className="cursor-pointer" onClick={()=>chamarWhatsAppComDescricaoDoProduto}>
                  
              <Button onPress={chamarWhatsAppComDescricaoDoProduto} startContent={<IconWhatsapp width={"1.4em"} height={"1.4em"} color="green" />} className="bg-transparent p-6 rounded-md  border-1 border-green text-[18px]  text-green">
                        Falar com atendente
              </Button>
                 
           
              </div>
                
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