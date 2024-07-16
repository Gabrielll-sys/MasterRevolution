import React, {
    ReactNode,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
  } from "react";
  
  type CarrinhoContextProps = {
    children: ReactNode;
  };
  
  type CarrinhoContextType = {
    cart: string[];
    setCart: Dispatch<SetStateAction<any>>;
    numero:number;
    setNumero:Dispatch<SetStateAction<number>>;
    

  };
  
  const initialValue = {
    cart: [],
    setCart: () => {},
    cartFlow: "",
    setCartFlow: () => {},
    numero: 2,
    setNumero: () => {},
  };
  
  export const CarrinhoContext = createContext<CarrinhoContextType>(initialValue);
  
  export default function CarrinhoContextProvider({ children }: CarrinhoContextProps) {
    const [cart, setCart] = useState(initialValue.cart);
    const [cartFlow, setCartFlow] = useState(initialValue.cartFlow);
    const [numero,setNumero] = useState<number>(1)
  
    return (
      <CarrinhoContext.Provider value={{ cart, setCart,numero,setNumero }}>
        {children}
      </CarrinhoContext.Provider>
    );
  }
  