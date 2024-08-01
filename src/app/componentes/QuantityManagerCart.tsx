import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import IconPlusSquare from "../assets/icons/IconPlusSquare";
import IconMinusSquare from "../assets/icons/IconMinusSquare";


type QuantityManagerCartProps = {

  quantidade:number,


}


export default function QuantityManagerCart({quantidade}:QuantityManagerCartProps) {


  const [quantidadeProduto, setQuantidadeProduto] = useState<number>(quantidade);


  const handleIncreaseQuantity = ()=>
    {
      const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
      const itemExistente: IItemCarrinho = arrItens.find((item: any) => item.id === produto.id);
      
     
        
        itemExistente.quantidade += quantidade
        arrItens.push(itemExistente);
        localStorage.setItem("cartItens", JSON.stringify(arrItens));
     
   
        setQuantidadeProduto(quantidade+1)
      }
    }
 const handleDecreaseQuantity = ()=>{

  const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
  const itemExistente: IItemCarrinho = arrItens.find((item: any) => item.id === produto.id);
  
 
    
    itemExistente.quantidade>1?itemExistente.quantidade -= quantidadeProduto: itemExistente.quantidade = 1
    arrItens.push(itemExistente);
    localStorage.setItem("cartItens", JSON.stringify(arrItens));
 

    setQuantidadeProduto(quantidade)
  
 
    
  }


  return (
    <div className="flex items-center gap-5 border-1 border-grayLine rounded-md p-1 h-[40px] w-[132px] justify-around ">
      <Button
        isIconOnly
        className="shadow-sm hover:opacity-80 hover:scale-105 bg-transparent"
        variant="flat"
        onPress={handleDecreaseQuantity}

      >
        <IconMinusSquare color="black" />
      </Button>

      <span>{quantidadeProduto}</span>

      <Button
        isIconOnly
        variant="flat"
        className="shadow-sm hover:opacity-80 hover:scale-105 bg-transparent "
        onPress={handleIncreaseQuantity}
      >
        <IconPlusSquare color="black" />
      </Button>
    </div>
  );
}
function setQuantidadeProduto(arg0: any) {
  throw new Error("Function not implemented.");
}

