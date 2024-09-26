'use client'
import React from 'react'
import H1 from '../ui/H1'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Form({ type }: { type: "signIn" | "signUp" }) {
    return (
        <motion.form variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className='flex md:p-12 p-8 max-sm:pt-0 flex-col gap-2 rounded-lg '>

            <H1 className='text-secondary text-3xl mb-3'>
                {type === "signIn" ? "Login" : "Sign Up"}
            </H1>
            <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="password" className='text-zinc-400'>Email</Label>
                <Input type="email" className='border border-zinc-300 placeholder:text-zinc-300' id="email" placeholder="john@doe.com " />
                <p className='h-1 text-red-500 text-xs'> </p>
            </div>

            <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="password" className='text-zinc-400'>Password</Label>
                <Input type="password" className='border border-zinc-300 placeholder:text-zinc-300' id="password" placeholder="****" />
                <p className='h-1 text-red-500 text-xs'> </p>
            </div>
            {type === "signIn" && <div className='flex justify-between items-center'>
                <div className="flex items-center space-x-2">
                    <Input type="checkbox" id="terms" className='w-3 h-3 border border-secondary rounded-full' />
                    <label
                        htmlFor="terms"
                        className="text-xs text-zinc-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <div className='text-zinc-300 underline text-xs'> Forget Password? </div>
            </div>}

            <Button className='my-3  bg-primary hover:bg-secondary text-zinc-100 '> {type === "signIn" ? "Sign In" : "Sign Up"} </Button>



            {type === "signIn" ? <p className='text-xs text-zinc-300'> dont have an account? <Link href="/signup" className='text-primary/55 underline'>Sign Up</Link> </p> : <p className='text-xs text-zinc-300'> you have an account? <Link href="/signin" className='text-primary/55 underline'>Sign In</Link> </p>}
        </motion.form>
    )
}
