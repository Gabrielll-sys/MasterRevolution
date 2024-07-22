"use client";
import { NextUIProvider } from "@nextui-org/react";
import CarrinhoContextProvider from "./CarrinhoContext";
import ProdutoContextProvider from "./ProdutoContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>
        <ProdutoContextProvider>
          <CarrinhoContextProvider>
            {children}
          </CarrinhoContextProvider>
        </ProdutoContextProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
