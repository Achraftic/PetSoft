import Background from '@/components/app/background'
import Footer from '@/components/app/footer'
import Header from '@/components/app/header'
import React from 'react'

export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Background />
            <div className=' min-h-screen  flex flex-col z-50 relative max-w-4xl mx-auto p-4'>
                <Header />
                {children}
                <Footer/>
            </div>

        </>
    )
}
