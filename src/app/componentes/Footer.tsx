"use client";

import IconInstagram from "../assets/icons/IconInstagram";
import IconLinkedin from "./IconLinkedin";

export default function Footer({ children, ...props }: any) {
  return (
    <footer className="bottom-0 max-sm:h-20 left-0 w-screen " {...props}>
      <div className="grid grid-cols-3  bg-master_black text-light text-tiny">
        <div className=" ml-2 p-6 max-sm:p-[10px] flex flex-col gap-1">
          <p className="max-sm:min-w-[120px]">
            <strong>MASTER ELÉTRICA</strong>
          </p>
         
        </div>
        <div className=" ml-2 p-6 max-sm:p-[10px] flex flex-col gap-1">
          <p className="max-sm:min-w-[120px]">
            <strong>MASTER ELÉTRICA</strong>
          </p>
         
        </div>
        <div className=" ml-2 p-6 max-sm:p-[10px] flex flex-col gap-1">
          <div className="flex flex-col gap-3 ">

          <p className="text-[20px]">
            <strong>Continue Conectado</strong>
          </p>

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
          </div>


          </div>
        </div>
   
      </div>
    </footer>
  );
}