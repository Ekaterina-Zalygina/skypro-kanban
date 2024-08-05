export const apiURL = "https://wedev-api.sky.pro/api/user/login"

export const signIn = async({login, password}) => {
    const response = await fetch (apiURL, 
        {
            method: "POST",
            body: JSON.stringify ({
                login,
                password
            })
        }
    );
    if(response.status === 400)
        {throw new Error ("Неверный логин или пароль")}
    if (!response.ok) //Успешно ли выполнится запрос или нет
    { throw new Error ("Неудалось загрузить данные, попрбуйте позже") }
    return response.json()
}