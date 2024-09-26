import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { GoPlus } from "react-icons/go";
import Form from "./Form";
import {useState } from "react";
type Dialogui = {
    type: "add" | "edit"
    
}
export default function DialogueUi({ type }: Dialogui) {
     const [isOpen, setFormOpen] = useState(false);
 
    return (
        <Dialog open={isOpen} onOpenChange={setFormOpen}>

            <DialogTrigger asChild>
                {type === "add" ? <Button aria-label="add" className={`p-2.5 hover:rotate-180 transition hover:!text-primary  shadow-md shadow-slate-200 !text-white rounded-full bg-primary  absolute bottom-6 right-4 cursor-pointer text-white'`}> <GoPlus size={16} /> </Button> :
                    <Button aria-label="edit" className='rounded-full  md:px-5  ' size="sm" variant="default"> Edit </Button>
                }
            </DialogTrigger>
            <DialogContent className="max-w-[420px]  absolute" >
                <DialogHeader>
                    <DialogTitle>{type === "add" ? "Add New Pet" : "Edit Pet"}  </DialogTitle>
                </DialogHeader>
              {/* //?  THIS FORM FOR EDIT AND ADD PET*/}
                <Form type={type} onFormSubmission={()=>setFormOpen(false)} />
             
            </DialogContent>
        </Dialog>

    )
}
