"use client";

import IconInstagram from "../assets/icons/IconInstagram";
import IconWhatsapp from "../assets/icons/IconWhatsapp";
import IconLinkedin from "./IconLinkedin";

export default function Footer({ children, ...props }: any) {
  return (
    <footer className="bottom-0 max-sm:h-20 left-0 w-screen " {...props}>
      <div className="flex flex-row  items-center justify-center gap-5 bg-master_black text-light text-tiny">
     
        <div className=" ml-2 p-6 max-sm:p-[10px] flex flex-col gap-1">
          <p className="max-sm:min-w-[120px]">
            <strong>&copy; 2019-2024</strong>
          </p>
         
        </div>
        <div className=" ml-2 p-6 max-sm:p-[10px] flex flex-col gap-1">
          <div className="flex flex-col gap-6 ">

          <p className="text-[20px]">
            <strong>Continue Conectado</strong>

          </p>
    {/* <p className="font-bold p-2 text-[10px]">
            Criada em outubro de 2019, a Master Elétrica está entre as melhores empresas do segmento de instalação, montagem, manutenção e comercio de componentes eletroeletrônicos, uma grande variedade de produtos com mais de 900 produtos, entre componentes elétricos e eletroeletrônicos.
Temos uma equipe de profissionais altamente qualificados, treinados, certificados e entregamos aos nossos clientes excelência no atendimento, soluções únicas e personalizadas.
Atuamos também com adequação de segurança NR-10 e NR-12 e ao longo destes anos, realizamos diversos projetos de instalação elétrica, manutenção, adequações e somos reconhecidos em todo Brasil.
        </p> */}
          <div className="flex flex-col gap-2 ">
            <p className="text-base">
              Avenida Das Industrias, 375
            </p>
            <p className="text-base">
            Nossa Senhora Das Graças - Santa Luzia
            </p>
          </div>

          <div className="flex flex-row gap-3">
          <a href="">
            <IconInstagram width={"2.5em"} height={"2.5em"}/>
          </a>
          <a href="https://www.linkedin.com/company/master-el%C3%A9trica-mg/" target="_blank">
            <IconLinkedin width={"2.5em"} height={"2.5em"}/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=71103718&text=Bom Dia" target="_blank">
            <IconWhatsapp width={"2.5em"} height={"2.5em"}/>
          </a>
          </div>


          </div>
        </div>
   
      </div>
    </footer>
  );
}