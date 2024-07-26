'use client'
import { getAllMateriais } from "@/app/services/Material.Services";
import IProduto from "@/interfaces/IProduto";
import { useEffect, useState } from "react";
import ProdutoCard from "../componentes/ProdutoCard";
import LeftSearchParameters from "../componentes/LeftSearchParameters";
import { Button, Flex, Skeleton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";



export default function NossosProdutos()
{


const { data: materiais, error, isLoading } = useQuery<IProduto[]>({
    queryKey: ["materiais"],
    queryFn: getAllMateriais,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }


return(
    <>
   
        <Flex direction="row" gap="9" justify="end" className="mt-10">
          
            <LeftSearchParameters/>

            <Flex  direction="row" wrap="wrap" justify="center" width="70vw" gap="6" >
            {materiais?.map((material)=>(
            <Skeleton loading={isLoading}>
              
              <ProdutoCard produtoCard={ material}/>
            </Skeleton>
            ))}
            </Flex>
            
            
        </Flex>
    
</>

)


}













