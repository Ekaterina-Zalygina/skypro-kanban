const apiURL = 'https://wedev-api.sky.pro/api/kanban'

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