import Image from 'next/image'
import React from 'react'

export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className=' min-h-screen   grid place-items-center  w-full  mx-auto p-4 '>
                <div className='max-w-3xl shadow-2xl  shadow-background bg-zinc-50/50   grid w-full rounded-lg    sm:grid-cols-2  grid-cols-1 min-h-max  '>

                    {children}


                    <div className='rounded-lg  px-8 sm:py-16 py-8   text-background  max-sm:row-[1/2] '>
                        <Image src="../icon.svg" alt="" width={40} height={40} />
                        <h1 className=" text-5xl font-bold mt-6 text-secondary ">Welcome Back To  <span className='text-primary'>Pets Soft</span> </h1>
                    </div>
                </div>

            </div>

        </>
    )
}
