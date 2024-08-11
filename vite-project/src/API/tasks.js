const apiURL = 'https://wedev-api.sky.pro/api/kanban'

//все задачи
export const getTasks = async(token) => {
    const response = await fetch (apiURL, 
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    if (!response.ok) //Успешно ли выполнится запрос или нет (отрицание, ответ где находится переменная, которую хотим проверить)
    { throw new Error ("Неудалось загрузить данные, попрбуйте позже") }
    return response.json()
}

//добавление задачи
export const NewTask = async(token, taskData) => {
    const response = await fetch (apiURL, 
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(taskData),
        }
    );
    if (!response.ok) //Успешно ли выполнится запрос или нет (отрицание, ответ где находится переменная, которую хотим проверить)
    { throw new Error ("Задача не добавлена, попробуйте еще раз") }
    return response.json()
}