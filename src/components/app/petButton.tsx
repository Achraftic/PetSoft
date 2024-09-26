'use client'
// import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import DialogueUi from './DialogueUi'
import { usePetStore } from '@/store/pet_store'
import { deletePet } from '@/actions/petActions'
// import { useRouter } from 'next/navigation'
import { Pet } from '@prisma/client'
import { useTransition } from 'react'


type PetButtonProps = {
    actionType: "add" | "edit" | "checkout",
    selectedPet?:Pet
    id?: string
}
export default function PetButton({ actionType = "edit" ,id,selectedPet}: PetButtonProps) {

    const { setSelectedPet } = usePetStore()
    const [isPending,StartTransition] = useTransition()
    // useEffect(() => {
    //     if (selectedPet) {
    //       setSelectedPet(selectedPet)
    //     }
    //   }, [selectedPet, setSelectedPet])
    
    
    //   const router = useRouter()
    const handlecheckout = async () => {
        if(id){
            StartTransition(async () => {
                await deletePet(id as string)
                setSelectedPet(selectedPet as Pet)
                
            })
           
        }
    }
  
    if (actionType === "add") {
        return <DialogueUi type="add"/> 
    }
    else if (actionType === "edit")
        return <DialogueUi type="edit" /> 
    
    return (
        
        <Button disabled={isPending} aria-label='checkout' onClick={handlecheckout} className='rounded-full  md:px-5 ' size="sm"> Checkout</Button>
    )
}

{/* */}