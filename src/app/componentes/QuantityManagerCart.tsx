import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import IconPlusSquare from "../assets/icons/IconPlusSquare";
import IconMinusSquare from "../assets/icons/IconMinusSquare";


type QuantityManagerCartProps = {

  isFromCartPage:boolean,
  isFromProductPage:boolean


}


export default function QuantityManagerCart({isFromCartPage = false,isFromProductPage = false}:QuantityManagerCartProps) {


  const [quantidade, setQuantidade] = useState<number>(0);


  const handleIncreaseQuantity = ()=>
    {
        setQuantidade(quantidade+1)
    }
 const handleDecreaseQuantity = ()=>{
  
  quantidade==1 ? setQuantidade(1) : setQuantidade(quantidade-1)
 
    
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

      <span>{quantidade}</span>

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
