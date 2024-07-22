'use client'
import ProdutoShowcase from "@/app/componentes/ProdutoShowcase";

import { getMaterialById } from "@/app/services/Material.Services";
import { Button } from "@nextui-org/react"
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useContext } from "react"

export default function Produto () {
  const path = usePathname()

  const {data:produto} = useQuery({
    queryKey: [`material-${path.split('=')[1]}`],
    queryFn:()=>getMaterialById(Number(path.split('=')[1]))
  })

    return (
        <div>
        
            <ProdutoShowcase produto={produto}/>
        </div>
    );
}
