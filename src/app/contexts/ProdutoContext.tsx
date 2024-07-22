import IProduto from "@/interfaces/IProduto";
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type ProdutoContextProps = {
  children: ReactNode;
};

type ProdutoContextType = {
  produto: IProduto ;
  setProduto: Dispatch<SetStateAction<IProduto>>;
};

const initialValue: IProduto = {
  id: 0,
  categoria: "",
  codigoFabricante: "",
  corrente: "",
  descricao: "",
  marca: "",
  precoVenda: 0,
  tensao: "",
  unidade: "",
  urlImage: null,
};
export const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

export const useProduto = (): ProdutoContextType => {
  const context = useContext(ProdutoContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export default function ProdutoContextProvider({ children }: ProdutoContextProps) {
  const [produto, setProduto] = useState<IProduto >(initialValue);

  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
}