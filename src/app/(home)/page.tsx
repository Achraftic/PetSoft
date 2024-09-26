import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  gap-5  lg:p-24 p-16 place-items-center min-h-screen">

      <Image src={"https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"} alt="petsoft" height={452} width={430} className=""/>

      <div className="space-y-3  max-md:p-2">
        <Image src="../icon.svg" alt="" width={30} height={30} />
        <h1 className="lg:text-5xl text-4xl font-bold ">Manage your <span className="text-primary">pet daycare</span> with ease</h1>
        <p className=" leading-5 text-base line-clamp-5 w-4/5">PetSoft is a web application for pet owners to manage their
          pets <span className="font-semibold">Get life time access for $100</span>
          </p>
          <Button className="rounded-full text-sm capitalize" >Get started</Button>
      
          
          <Link href="/signin"  className={` text-sm   ml-2 font-semibold bg-neutral-100 text-neutral-900 shadow hover:bg-neutral-200   p-2 px-5 rounded-full`}>Log In</Link>

  
      </div>
    </div>
  );
}
