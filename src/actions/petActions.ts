'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addPet = async(formdata: FormData) => {

    const name = formdata.get('name') as string
    const ownerName = formdata.get('ownerName') as string
    const imageUrl = formdata.get('imageUrl') as string
    const age = formdata.get('age') as string
    const notes = formdata.get('notes') as string

    const resulte = prisma.pet.create({
        data: {
            name,
            ownerName,
            imageUrl,
            age: Number(age),
            notes
        }
    })

    revalidatePath("/dashboard")
    return resulte;
}
export const editPet = async(formdata: FormData,id:string) => {
    const name = formdata.get('name') as string 
    const ownerName = formdata.get('ownerName') as string
    const imageUrl = formdata.get('imageUrl') as string
    const age = formdata.get('age') as string
    const notes = formdata.get('notes') as string
    const resulte = prisma.pet.update({
        where: {
            id: id
        },
        data: {
            name,
            ownerName,
            imageUrl,
            age: Number(age),
            notes
        }
    })
    revalidatePath("/dashboard")
    return resulte
}

export const deletePet = async(id:string) => {
    const resulte = prisma.pet.delete({
        where: {
            id:id
        }
    })
    revalidatePath("/dashboard")
    return resulte
}