
import { Pet } from "@prisma/client";
import { create } from "zustand";

type Store = {
 
  selectedPet: Pet | null; 
  setSelectedPet:(pet:Pet)=>void;
};

export const usePetStore = create<Store>((set) => ({
  selectedPet: null,  // Initially, no pet is selected
   setSelectedPet: (pet: Pet) => set((state) => ({ selectedPet: pet || null })),

}));
