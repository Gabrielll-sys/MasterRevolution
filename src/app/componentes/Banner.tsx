'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import IconClockCircle from '../assets/icons/IconClockCircle';
import IconPeople from '../assets/icons/IconPeople';


export default function Banner() {
  // Get the current pathname
  const pathname = usePathname();

  // Check if the pathname is one of the specified routes
  const isEncomendaVisible =
    pathname?.startsWith('/all-products') || pathname?.startsWith('/my-orders') || pathname?.startsWith('/advertisement');

  // Render nothing if not on the specified pages
  // if (!isEncomendaVisible) {
  //   return null;
  // }

  // Render the Encomenda component if on the specified pages
  return (
    <div className=" bg-master_black flex flex-col md:flex-row justify-around gap-5 px-4 md:px-20 py-5 mt-10 border-b-1 border-t-1 border-white">
      <div className='flex flex-row justify-between gap-10 align-middle items-center'>
       <IconClockCircle color='white' height="2em" width="2em" />

       <div className='flex flex-col'>
         <h2 className='text-white italic '>Horário De Funcionamento</h2>
         <p className='text-white font-quicksand'>Segunda à Sexta-feira (7:15h às 11:45h / 12:45min às 17h00min)</p>
       </div>
      </div>
      <div className='flex flex-row justify-between gap-10 align-middle items-center'>
       <IconPeople height="2em" width="2em"  color='white' />
       <div className='flex flex-col'>
         <h2 className='text-white italic'>Atendimento</h2>
         <p className='text-white font-quicksand'>Rápido Atendimento</p>
       </div>
       </div>
    

      <div className='flex flex-row justify-between gap-20'>
       
      </div>
    </div>
  );
}
