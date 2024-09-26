
export default function loading() {
    return (
        <div className=' my-28  h-max gap-3 md:grid-rows-[34px_1fr]  md:grid-cols-[230px_1fr] grid grid-cols-1   '>
            <div className="bg-focus/55 animate-pulse rounded-md p-2 text-light text-xs w-full h-full focus:border-1 border-white  border-none ">


            </div>
            <div className="bg-light *:animate-pulse  overflow-y-auto md:min-h-[330px] min-h-[150px] max-h-[380px] relative rounded-md">
                {new Array(3).fill(0).map((_, index) => (
                    <div key={index} className='flex items-center gap-2 p-3'>

                        <div className='p-5 aspect-auto rounded-full bg-zinc-300 '></div>

                        <h2 className='font-semibold w-3/5 bg-zinc-300 h-5 rounded-full'></h2>
                    </div>
                ))}
            </div>

            <div className="bg-light *:animate-pulse  py-3 md:px-5 px-2 rounded-md shadow-2xl shadow-background md:row-[1/3] h-full md:col-[2]">

                <div className="flex   items-center justify-between p-1">
                    <div className="flex items-center gap-2 md:p-3 p-2">

                        <div className=" md:w-12 md:h-12 w-10 h-10 rounded-full bg-zinc-200 "></div>


                        <h2 className="  md:text-2xl w-28 h-4 rounded-full bg-zinc-300 sm:text-md text-lg font-bold">

                        </h2>
                    </div>
                    <div className="space-x-2 flex items-center">
                        <span className=" w-20 p-4 rounded-full bg-zinc-200"></span>
                        <span className=" w-20 p-4 rounded-full bg-zinc-200"></span>


                    </div>
                </div>

                <div className="font-semibold flex my-5 justify-around text-center">
                    <div className="space-y-2">
                        <h1 className="w-16 h-3  bg-zinc-300 rounded-full"></h1>
                        <h1 className="w-12 h-3  bg-zinc-200 rounded-full"></h1>
                    </div>
                    <div className="space-y-2">
                        <h1 className="w-16 h-3  bg-zinc-300 rounded-full"></h1>
                        <h1 className="w-12 h-3  bg-zinc-200 rounded-full"></h1>
                    </div>
                </div>

                <div className="p-3 bg-neutral-100/65 rounded-md min-h-[30vh]">
                    <p></p>
                </div>



            </div>

        </div>
    )
}
