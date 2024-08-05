import { Link, useNavigate } from "react-router-dom"
import { ContainerSignin, ModalBlockLogin, ModalBtnEnterLogin, ModalFormGroupLogin, ModalFormLogin, ModalInputLogin, ModalLogin, ModalTtlLogin, WrapperLogin } from "./login.styled"
import { routes } from "../../router/routes.js"
import { useState } from "react"
import { signIn } from "../../API/user.js"

export const LoginPage = ({setUser}) => {
	const Navigation = useNavigate()
	const [formData, setFormData] = useState({login: "", password: ""})
	const [error, setError] = useState(null)
	
	const handleLogin = (e) => {
		e.preventDefault()
		
		if(formData.login.trim === "") {
			setError("Введите логин")
			return
		}

		if(formData.password.trim === "") {
			setError("Введите пароль")
			return
		}

		signIn(formData)
		.then((res) => {
			console.log(res.user)
			setUser(res.user)
			Navigation(routes.main)
		})
		.catch((error) => {
			console.log(error.message)
			setError(error.message)
		}) 
	}

    return(
        <WrapperLogin>
        <ContainerSignin>
            <ModalLogin>
				<ModalBlockLogin>
					<ModalTtlLogin>
						<h2>Вход</h2>
					</ModalTtlLogin>
					<ModalFormLogin id="formLogIn" action="#" onSubmit={handleLogin}>
						<ModalInputLogin onChange={(e) => setFormData(({...formData, login: e.target.value}))} type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<ModalInputLogin onChange={(e) => setFormData(({...formData, password: e.target.value}))} type="password" name="password" id="formpassword" placeholder="Пароль" />
							{error && <p>{error}</p>}
						<ModalBtnEnterLogin type="submit" id="btnEnter"><a>Войти</a></ModalBtnEnterLogin>
						<ModalFormGroupLogin>
							<p>Нужно зарегистрироваться?</p>
							<Link to={routes.register}>Регистрируйтесь здесь</Link>
						</ModalFormGroupLogin>
					</ModalFormLogin>
				</ModalBlockLogin>
            </ModalLogin>
        </ContainerSignin>
     </WrapperLogin>
    )
}