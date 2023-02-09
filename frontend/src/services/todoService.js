let REACT_APP_API_URL = 'http://localhost:8000'

export const getTodo = async () => {

    const fetched_data = await fetch(`${REACT_APP_API_URL}/todo`)
    const json_data = await fetched_data.json()
    return json_data

}


export const addTodo = async (todo) => {
    console.log(todo)
    const fetched_data = await fetch(`${REACT_APP_API_URL}/todo`, {
        method: "POST",
        body: JSON.stringify({
            todo
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const json_data = await fetched_data.json()
    return json_data

}