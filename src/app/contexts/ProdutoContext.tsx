import IProduto from "@/interfaces/IProduto";
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ProdutoContextProps = {
  children: ReactNode;
};

type ProdutoContextType = {
  produto: IProduto | null;
  setProduto: Dispatch<SetStateAction<IProduto | null>>;
};

const initialValue: ProdutoContextType = {
  produto: null,
  setProduto: () => {},
};

export const ProdutoContext = createContext<ProdutoContextType>(initialValue);

export default function ProdutoContextProvider({ children }: ProdutoContextProps) {
  const [produto, setProduto] = useState<IProduto | null>(initialValue.produto);

  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
}
