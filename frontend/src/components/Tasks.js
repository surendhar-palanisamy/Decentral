import React from 'react'

function Tasks({ task }) {
    return (
        <div className='flex   border items-center justify-between py-3 px-3'>
            <div className=''>
                <input
                    className='cursor-pointer focus:outline-none bg-gradient-to-r  from-teal-50 via-purple-50 to-pink-50'
                    value={task.todo}
                    onChange={() => { }}
                />
            </div>
            <div className='cursor-pointer '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border rounded-full p-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}

export default Tasks