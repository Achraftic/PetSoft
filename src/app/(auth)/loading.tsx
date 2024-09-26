import React from 'react'

export default function loading() {
  return (
    <div className='flex md:p-12 p-8 max-sm:pt-0 flex-col gap-2 rounded-lg items-center justify-center '>
          <div className="w-16 h-16 rounded-full border-4 border-b-primary  animate-spin"></div>
    </div>
  )
}
