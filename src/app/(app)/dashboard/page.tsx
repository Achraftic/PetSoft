import Branding from '@/components/app/Branding'

import PetDetail from '@/components/app/PetDetail'
import PetList from '@/components/app/PetList'
import SearchForm from '@/components/app/SearchForm'
import Stats from '@/components/app/Stats'
import prisma from '@/lib/db'
import { sleep } from '@/lib/utils'
import { Suspense } from 'react'



type DasboardPageProps = {
  searchParams: { id?: string
   s?:string

   }
}
export default async function DasboardPage({ searchParams }: DasboardPageProps) {
  // ?  Fetch data from Database
  const petsList = await prisma.pet.findMany(
    {
      where:{
        name:{
          contains:searchParams?.s || ""
        }
      }
    }
  );

  return (
    <main>
      <div className='text-light/80 text-sm flex justify-between py-7 items-center'>
        <Branding />
        <Stats />
      </div>
      <div className=' h-max gap-3 md:grid-rows-[34px_1fr]  md:grid-cols-[230px_1fr] grid grid-cols-1   '>
        <SearchForm />
        <PetList pets={petsList} />
       
          <PetDetail id={searchParams?.id} />
    
      </div>
    </main>
  )
}
