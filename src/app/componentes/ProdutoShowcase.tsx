"use client"
import Image from "next/image";
import imagem from "../assets/disjuntor-bipolar.jpg"
import { Button } from "@nextui-org/react";
import IconPix from "../assets/icons/IconPix";
import IconCreditCard2Back from "../assets/icons/IconCreditCard2Back";
import QuantityManagerCart from "./QuantityManagerCart";
import IProduto from "@/interfaces/IProduto";
import { usePathname, useRouter } from "next/navigation";

import IconWhatsapp from "../assets/icons/IconWhatsapp";

type ProdutoCardProps =  {
    produto: IProduto;
  }




 const ProdutoShowcase= ({produto}: ProdutoCardProps)=>{
   
   
   
    const router = useRouter()
    const pathname = usePathname();

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
      <div className=" flex flex-row w-[100%] justify-center  items-center gap-12  " >

      <Image alt="Card background" width={400} height={400} className={` transition-transform `} src={imagem} />
      
        <div className="flex flex-col gap-12 w-[400px]">

        <h1 className="font-bold">CABO FLEX UNIFILAR,5MM 750V BRANCO BRANCO BRANCO </h1>


        <div className="flex flex-row justify-between ">

        <div className="flex flex-col gap-2">
            
        <p  className="text-2xl text-[#32BCAD] font-quicksand"> <IconPix/>R$20,00</p>
        <p className="text-[12px] ">PREÇO A VISTA</p>
        </div>

        <div className="flex flex-col gap-2">
            
        <p  className="text-2xl"><IconCreditCard2Back/>R$20,00</p>
        <p className="text-[12px]">EM ATE <strong>5x</strong> SEM JUROS</p>
        </div>


        </div>

        <div className="flex flex-col gap-8">

            <div className="flex flex-row w-full justify-between">
                <QuantityManagerCart/>
                <Button className="bg-[#1DB954] text-white text-[16px] p-6 rounded-md">
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

      </div>


        </>
    )


}
export default ProdutoShowcase;