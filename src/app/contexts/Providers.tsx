"use client"
import {NextUIProvider} from "@nextui-org/react";
import CarrinhoContextProvider from "./CarrinhoContext";
export default function Providers({children}:{children:React.ReactNode}){


    return(
  
            <NextUIProvider>
                <CarrinhoContextProvider>

                {children}
                </CarrinhoContextProvider>
            </NextUIProvider>



    )
}