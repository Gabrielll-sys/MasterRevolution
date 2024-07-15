'use client'
import { getAllMateriais } from "@/app/services/Material.Services";
import IMaterial from "@/interfaces/IMaterial";
import { useEffect, useState } from "react";
import ProdutoCard from "../componentes/ProdutoCard";



export default function NossosProdutos()
{
const [materias,setMateriais] = useState<IMaterial[]>()

        useEffect(()=>{
        getProduto()
        },[])

const getProduto = async()=>{

    const res = await getAllMateriais()
    setMateriais(res)
}

return(
    <>
   
        
    <div className="flex flex-row flex-wrap gap-10 justify-center  ">
        {materias?.map((material)=>(

       <ProdutoCard produto={ material}/>
        ))}
    </div>
    
</>

)


}













