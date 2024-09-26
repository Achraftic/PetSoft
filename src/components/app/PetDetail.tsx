
import Image from 'next/image'
import PetButton from './petButton'
import prisma from '@/lib/db'
import { Pet } from '@prisma/client';

export default  async function PetDetail({id}:{id?:string}) {
    if (!id) {
        return (
            <div className="bg-light py-3 text-opacity-35 text-black md:px-5 px-2 flex justify-center items-center text-base rounded-md shadow-2xl shadow-background md:row-[1/3] md:h-full min-h-[50vh] md:col-[2]">
                Not selected yet
            </div>
        );
    }
    
    const  selectedPet=await prisma.pet.findUnique({
       where:{id}
    })

    if (!selectedPet ) {
        return (
            <div className="bg-light py-3 text-opacity-35 text-black md:px-5 px-2 flex justify-center items-center text-base rounded-md shadow-2xl shadow-background md:row-[1/3] md:h-full min-h-[50vh] md:col-[2]">
               Pet Not Found
            </div>
        );
    }
    return (
        <div className="bg-light py-3 md:px-5 px-2 rounded-md shadow-2xl shadow-background md:row-[1/3] h-full md:col-[2]">
            <div className="flex items-center justify-between p-1">
                <div className="flex items-center gap-2 md:p-3 p-2">
                    {selectedPet?.imageUrl ?
                        <Image
                            src={selectedPet?.imageUrl}
                            alt="image of pet"
                            width={200}
                            height={200}
                            className="md:w-12 md:h-12 w-10 h-10 rounded-full object-cover"
                        /> :
                        <div className="md:w-12 md:h-12 w-10 h-10 rounded-full bg-zinc-200 "></div>
                    }

                    <h2 className="md:text-2xl sm:text-md text-lg font-bold">
                        {selectedPet?.name}
                    </h2>
                </div>
                <div className="space-x-2 flex items-center">
                    <PetButton actionType="edit" />
                    <PetButton actionType="checkout" selectedPet={selectedPet as Pet} id={id} />

                </div>
            </div>

            <div className="font-semibold flex my-5 justify-around text-center">
                <div className="space-y-2">
                    <h1>Owner name</h1>
                    <h1>{selectedPet?.ownerName}</h1>
                </div>
                <div className="space-y-2">
                    <h1>Age</h1>
                    <h1>{selectedPet?.age}</h1>
                </div>
            </div>

            <div className="p-3 bg-neutral-100 rounded-md min-h-[30vh]">
                <p>{selectedPet?.notes}</p>
            </div>
        </div>
    );
}
