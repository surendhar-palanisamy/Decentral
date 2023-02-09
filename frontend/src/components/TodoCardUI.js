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
            <div className='flex flex-col space-y-3 md:w-[450px] w-[300px] mt-5  border px-2 py-2'>
                <AddTasks tasks={tasks} setTasks={setTasks} />

                {
                    tasks.length > 0 && tasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <Tasks task={task} setTasks={setTasks} />
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default TodoCardUI