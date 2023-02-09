import React, { useEffect, useState } from 'react'
import { getTodo } from '../services/todoService'
import AddTasks from './AddTasks'
import Tasks from './Tasks'
import WelcomeUI from './WelcomeUI'

const TodoCardUI = () => {

    const [tasks, setTasks] = useState([])
    useEffect(() => {

        getTodo()
            .then((res) => {
                setTasks(res)
                console.log(res)
            })


    }, [])

    return (
        <div>
            <WelcomeUI />
            <div>Tasks to do</div>
            <div className='flex flex-col space-y-3 w-[450px] mt-5  border px-2 py-2'>
                <AddTasks />

                {
                    tasks.length > 0 && tasks.map((task) => {
                        return (
                            <div key={task._id}>
                                <Tasks task={task} />
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default TodoCardUI