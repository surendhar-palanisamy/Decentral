import React from 'react'
import WelcomeUI from './WelcomeUI'

const TodoCardUI = () => {
    return (
        <div>
            <WelcomeUI />
            <div>Tasks to do</div>
            <div className='flex flex-col space-y-3 w-[450px] mt-5  border px-2 py-2'>
                <div className='flex   border items-center justify-between py-3 px-3'>
                    <div>
                        <input className='focus:outline-none  w-full' placeholder='Add a Task' />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer  w-6 h-6 border rounded-full p-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>

                <div className='flex   border items-center justify-between py-3 px-3'>
                    <div className=' '>
                        <input className='focus:outline-none' value={' Get the bread'} />
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border rounded-full p-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TodoCardUI