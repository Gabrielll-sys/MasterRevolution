'use client'
import { getAllMateriais } from "@/app/services/Material.Services";
import IProduto from "@/interfaces/IProduto";
import { useEffect, useState } from "react";
import ProdutoCard from "../componentes/ProdutoCard";
import LeftSearchParameters from "../componentes/LeftSearchParameters";
import { Flex } from "@radix-ui/themes";



export default function NossosProdutos()
{
const [materias,setMateriais] = useState<IProduto[]>()

        useEffect(()=>{
        getProduto()
        },[])

const getProduto = async()=>{

    const res = await getAllMateriais()
    setMateriais(res)
}

return(
    <>
   
        <Flex direction="row" gap="9" justify="end" className="mt-10">
            <LeftSearchParameters/>
            <div className="flex flex-row flex-wrap gap-10 justify-center w-[70%]  ">
            {materias?.map((material)=>(
            
                   <ProdutoCard produto={ material}/>
            ))}
            </div>
        </Flex>
    
</>

)


}













