'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const routes = [
    {
        name: "dashboard",
        path: "/dashboard"
    },
    {
        name: "account",
        path: "/account"
    }

]

const activeClass = 'bg-neutral-500/30';
export default function Header() {
    const pathname = usePathname()
    return (
        <header className=' border-b  border-focus/45 w-full pb-2 flex justify-between items-center  text-light'>
            <Link href={"/"}><Image src="../icon.svg" alt="" width={40} height={40} /></Link> 
            <ul className='flex space-x-2 items-center capitalize'>
                {routes.map((route, index) => {

                    return <li key={index}><Link className={`${route.path === pathname && activeClass} px-1 py-1.5 rounded-md transition hover:${activeClass}`} href={route.path} > {route.name} </Link></li>
                })}

            </ul>

        </header>
    )
}
