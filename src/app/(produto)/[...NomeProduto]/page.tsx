'use client'
import ProdutoShowcase from "@/app/componentes/ProdutoShowcase";
import { ProdutoContext, useProduto } from "@/app/contexts/ProdutoContext"
import { Button } from "@nextui-org/react"
import { useContext } from "react"

export default function Produto () {
    const { produto } = useProduto()

    return (
        <div>
            <Button onClick={() => console.log(produto)}/>
           
            <ProdutoShowcase/>
        </div>
    );
}
