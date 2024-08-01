import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import IconPlusSquare from "../assets/icons/IconPlusSquare";
import IconMinusSquare from "../assets/icons/IconMinusSquare";


type QuantityManagerCartProps = {

  quantidade:number,
  produtoId:number | undefined

}


export default function QuantityManagerCart({quantidade,produtoId}:QuantityManagerCartProps) {


  const [quantidadeProduto, setQuantidadeProduto] = useState<number>(quantidade);


  const updateItemQuantity = (operation:string) => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const itemExistente = arrItens.find((x:any) => x.id === produtoId);
    console.log(itemExistente.quantidade)
    let newQuantity = 0
   
    if( operation === 'aumentar'){
       newQuantity = itemExistente.quantidade += 1
    }
   else{
    if(quantidadeProduto) newQuantity= itemExistente.quantidade -= 1;
     
    if(quantidadeProduto == 1) newQuantity = 1
   }

    
    // Update the quantity and save to local storage
    itemExistente.quantidade = newQuantity;
    localStorage.setItem("cartItens", JSON.stringify(arrItens));
    console.log(itemExistente.quantidade);
    setQuantidadeProduto(itemExistente.quantidade); 
};

const handleIncreaseQuantity = () => {
    updateItemQuantity('aumentar');
};

const handleDecreaseQuantity = () => {
    updateItemQuantity('diminuir');
};


  return (
    <div className="flex items-center gap-5 border-1 border-grayLine rounded-md p-1 h-[40px] w-[132px] justify-around ">
      <Button
        isIconOnly
        className="shadow-sm hover:opacity-80 hover:scale-105 bg-transparent"
        variant="flat"
        onPress={()=>updateItemQuantity('diminuir')}

      >
        <IconMinusSquare color="black" />
      </Button>

      <span>{quantidadeProduto}</span>

      <Button
        isIconOnly
        variant="flat"
        className="shadow-sm hover:opacity-80 hover:scale-105 bg-transparent "
        onPress={()=>updateItemQuantity('aumentar')}
      >
        <IconPlusSquare color="black" />
      </Button>
    </div>
  );
}


