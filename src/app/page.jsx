'use client';

import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./components/Map'), { ssr: false });


const page = () => {
  return (
    <div>
      <div className='bg-[#fff] w-full min-h-screen'>

        <div className='flex justify-center items-center gap-2 pt-10'>
          <Image
            src="/Logo.svg"
            width={84}
            height={48}
            alt="Picture of the author"
          />
          <p className='text-[#000] text-[1.4rem] font-semibold'>HelpLoop</p>
        </div>

        <div>

          <div className='flex justify-center items-center gap-2.5 pt-[1.5rem] text-[0.95rem]'>
            <a className='text-[1rem] text-[#5C5C5C] font-normal' href="">Preciso de Ajuda</a>
            <a className='text-[1rem] text-[#5C5C5C] font-normal' href="">Quero Ajudar</a>
            <a className='text-[1rem] text-[#5C5C5C] font-normal' href="">Ver Histórias Reais</a>
          </div>
  
        </div>

        <div className='flex justify-center items-center pt-[1rem]'>

          <div>
            <button className='px-[3rem] py-[0.70rem] rounded-[5px] font-semibold bg-[#14825A] cursor-pointer'>Entrar ou Cadastrar-se</button>
          </div>

        </div>

        <div>

          <div className='flex justify-center items-center pt-14'>
            <p className='text-[2rem] font-semibold text-[#000] text-center max-w-[18rem]'>Ajuda verdadeira, onde e quando você mais precisa</p>
          </div>

          <div className='flex justify-center items-center gap-2 pt-4.5'>
            <div>
              <button className='px-4 py-2 bg-[#14825A] font-semibold text-[#fff] rounded-[6px] text-[0.95rem] cursor-pointer'>Preciso de Ajuda</button>
            </div>

            <div>
              <button className='px-4 py-2 bg-[#fff] border-1 border-[#21815E] text-[#21815E] font-semibold rounded-[6px] text-[0.95rem] cursor-pointer'>Quero Ajudar</button>
            </div>
          </div>

          <div className='flex justify-center items-center pt-10 pb-10'>
            <Map />
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
