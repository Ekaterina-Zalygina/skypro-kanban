export const apiURL = "https://wedev-api.sky.pro/api/user"

export const registrUser = async({name, login, password}) => {
    const response = await fetch (apiURL, 
        {
            method: "POST",
            body: JSON.stringify ({
                name,
                login,
                password
            })
        }
    );
    if(response.status === 400)
        {throw new Error ("Такой пользователь уже существует")}

    // if(response.status === 401)
    //     {throw new Error ("Используйте логиин и пароль или зарегистрируйтесь")}

    // if(response.status === 500)
    //     {throw new Error ("Ошибка сервера")}

    if (!response.ok) //Успешно ли выполнится запрос или нет
    { throw new Error ("Неудалось загрузить данные, попрбуйте позже") }
    return response.json()
}