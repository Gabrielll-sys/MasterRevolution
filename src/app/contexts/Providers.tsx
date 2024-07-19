"use client"
import {NextUIProvider} from "@nextui-org/react";
import CarrinhoContextProvider from "./CarrinhoContext";
import ProdutoContextProvider from "./ProdutoContext";
export default function Providers({children}:{children:React.ReactNode}){
    
    return(
  
            <NextUIProvider>
                <ProdutoContextProvider>

                <CarrinhoContextProvider>

                {children}
                </CarrinhoContextProvider>
                </ProdutoContextProvider>
            </NextUIProvider>



    )
}