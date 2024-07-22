'use client'

import LeftSearchParameters from "@/app/componentes/LeftSearchParameters";
import ProdutoCard from "@/app/componentes/ProdutoCard";
import ProdutoShowcase from "@/app/componentes/ProdutoShowcase";
import { getDescricaoProdutoDaRota, searchByDescription } from "@/app/services/Material.Services";
import IProduto from "@/interfaces/IProduto";
import { Button } from "@nextui-org/react"
import { Flex } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function Busca() {
  const path = usePathname();
  const descricaoProduto = getDescricaoProdutoDaRota(path);

  const { data: produtosEncontrados, isFetching, error } = useQuery({
    queryKey: ['produto', descricaoProduto],
    queryFn: () => searchByDescription(descricaoProduto),
    enabled: !!descricaoProduto, // Evita que a query seja feita se a descrição estiver vazia
    staleTime: 5 * 60 * 1000, // 5 minutos
    refetchOnWindowFocus:false,

  });

    return (
        <Flex direction="row" gap="9" justify="center" className="mt-10" >
          <Flex  direction="row" wrap="wrap" justify="end" width="70vw" gap="6"  >
             <LeftSearchParameters/>
                { produtosEncontrados && produtosEncontrados.map((produto:IProduto)=>(
              <ProdutoCard produtoCard={produto.material}/>
                ))}
          
          </Flex>
        </Flex>
    );
}
