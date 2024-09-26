'use client'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { usePetStore } from '@/store/pet_store'
import { addPet, editPet } from '@/actions/petActions'
import Submit from './Submit'
import {z} from"zod"

type FormProps = {
    onFormSubmission: () => void
    type: "add" | "edit"
    
}

const schemaPetform = z.object({
    name: z.string().min(1, 'Name is required'),
    ownerName: z.string().min(1, 'Owner name is required'),
    imageUrl: z.string().url('Invalid image URL'),
    age: z.number().max(20, 'Age must be less than or equal to 20').min(1, 'Age must be at least 1'),
    notes: z.string().min(5, 'Notes must be greater than or equal to 5 characters')
})
export default function Form({ onFormSubmission, type }: FormProps) {


    const [errors, setErrors] = useState<Record<string, string | string[]>>({});

    const { selectedPet } = usePetStore()
    const handleSubmit = async (formdata: FormData) => {
        const data={
            name:formdata.get('name') as string,
            ownerName:formdata.get('ownerName') as string,
            imageUrl:formdata.get('imageUrl') as string,
            age:Number(formdata.get('age') as string),
            notes:formdata.get('notes') as string
        }
        const valided = schemaPetform.safeParse(data)
        if (!valided.success) {
            setErrors(valided.error.format())
            return
        }

        if (type === "edit") {
            const result=await editPet(formdata, selectedPet?.id as string)
              
        }
        else {
            await addPet(formdata)
        }
        onFormSubmission()
    }


    return (
        <form action={handleSubmit} className="grid grid-cols-2 gap-4 py-4 text-sm">
            <div className="grid grid-cols-1 items-center gap-2">
                <Label htmlFor="name" className="">
                    Name
                </Label>
                <Input id="name" defaultValue={type === "edit" ? selectedPet?.name : ""} name='name' className="col-span-3" />
                <p className='text-red-500 text-xs h-1'> {errors.name?._errors[0]} </p>
            </div>
            <div className="grid grid-cols-1 items-center gap-2">
                <Label htmlFor="ownerName" className="">
                    Owner name
                </Label>
                <Input id="ownerName" defaultValue={type === "edit" ? selectedPet?.ownerName : ""} name='ownerName' className="col-span-3" />
                <p className='text-red-500 text-xs h-1'>{errors.ownerName?._errors[0]}</p>
            </div>
            <div className="grid grid-cols-1 col-span-2 items-center gap-2">
                <Label htmlFor="imageUrl" className="">
                    Image Url
                </Label>
                <Input id="imageUrl" name='imageUrl' defaultValue={type === "edit" ? selectedPet?.imageUrl : ""} className="col-span-3" />
                <p className='text-red-500 text-xs h-1'>{errors.imageUrl?._errors[0]}</p>
            </div>
            <div className="grid grid-cols-1  col-span-2 items-center gap-2">
                <Label htmlFor="age" className="">
                    Age
                </Label>
                <Input id="age" type="number" name='age' defaultValue={type === "edit" ? selectedPet?.age : ""} className="col-span-3" />
                <p className='text-red-500 text-xs h-1'>{errors.age?._errors[0]}</p>
            </div>
            <div className="grid grid-cols-1  col-span-2 items-center gap-2">
                <Label htmlFor="note" className="">
                    Note
                </Label>
                <Textarea placeholder="Type note here." defaultValue={type === "edit" ? selectedPet?.notes : ""} className="col-span-3" name="notes" />
                <p className='text-red-500 text-xs h-1'>{errors.notes?._errors[0]}</p>
            </div>
            <div className=' col-span-2  flex justify-end  '>

                <Submit />
            </div>

        </form>
    )
}
