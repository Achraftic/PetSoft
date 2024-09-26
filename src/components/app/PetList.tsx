'use client';
import Image from 'next/image';
import PetButton from './petButton';
import { Pet } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type PetListProps = {
    pets: Pet[];
}

export default function PetList({ pets }: PetListProps) {

    const router = useRouter();
    const searchParams = useSearchParams(); // Get the current search parameters
    const [idParam, setIdParam] = useState("");

    useEffect(() => {
        setIdParam(searchParams.get("id") || "");

    }, [searchParams]);
    const handleSelect = (id: string) => {
        const currentParams = new URLSearchParams(searchParams.toString())
        if (id) {
            currentParams.set('id', id)
        }
        else {
            currentParams.delete('id')
        }

        router.push(`/dashboard/?${currentParams.toString()}`);
    }


    return (
        <div className='bg-light overflow-y-auto md:min-h-[330px] min-h-[150px] max-h-[380px] relative rounded-md shadow-2xl shadow-background'>
            {pets.length > 0 ? <>
                <div className='cursor-pointer '>
                    {pets.map((pet, index) => (
                        <div
                            onClick={() => {

                                handleSelect(pet.id)

                            }}
                            key={index}
                            className={` flex items-center gap-2 p-3 hover:bg-zinc-50 focus:bg-zinc-50 transition ${idParam === pet.id && 'bg-zinc-50'} `}
                        >
                            {pet.imageUrl ? <Image
                                src={pet.imageUrl}
                                alt='image of pet'
                                width={300}
                                height={300}
                                className='w-10 h-10 rounded-full object-cover'
                            /> : <div className='w-10 h-10 rounded-full bg-zinc-200 '></div>}

                            <h2 className='font-semibold'>{pet.name}</h2>
                        </div>
                    ))}
                </div>
                <PetButton actionType="add" />
            </>
                : <p className='text-secondary/50 p-4 flex items-center justify-center h-full '> Pet not found</p>}

        </div>
    );
}
