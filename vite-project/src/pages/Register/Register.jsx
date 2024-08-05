import { Link, useNavigate } from "react-router-dom"
import { ContainerSignup, ModalBlockRegister, ModalBtnRegister, ModalFormGroupRegister, ModalFormLogin, ModalInputRegister, ModalRegister, ModalTtlRegister, WrapperRegister } from "./register.styled"
import { routes } from "../../router/routes.js"
import { registrUser } from "../../API/registration.js"
import { useState } from "react"

export const Register = ({setUser}) => {

	const Navigation = useNavigate()
	const [formData, setFormData] = useState({name: "", login: "", password: ""})
	const [error, setError] = useState(null)
	
	const userProfile = (e) => {
		e.preventDefault()
		
		if(formData.login.trim === "") {
			setError("Введите логин")
			return
		}

		if(formData.password.trim === "") {
			setError("Введите пароль")
			return
		}

		if(formData.name.trim === "") {
			setError("Введите Ваше имя")
			return
		}

		registrUser(formData)
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
        <WrapperRegister>
        <ContainerSignup>
            <ModalRegister>
				<ModalBlockRegister>
					<ModalTtlRegister>
						<h2>Регистрация</h2>
					</ModalTtlRegister>
					<ModalFormLogin id="formLogUp" action="#" onSubmit={userProfile}>
						<ModalInputRegister onChange={(e) => setFormData(({...formData, name: e.target.value}))} type="text" name="first-name" id="first-name" placeholder="Имя" />
						<ModalInputRegister onChange={(e) => setFormData(({...formData, login: e.target.value}))} type="text" name="login" id="loginReg" placeholder="Эл. почта" />
						<ModalInputRegister onChange={(e) => setFormData(({...formData, password: e.target.value}))} type="password" name="password" id="passwordFirst" placeholder="Пароль" />
						{error && <p>{error}</p>}
						<ModalBtnRegister type="submit" id="SignUpEnter"><Link to={routes.main}>Зарегистрироваться</Link> </ModalBtnRegister>
						<ModalFormGroupRegister>
							<p>Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link></p>
						</ModalFormGroupRegister>
					</ModalFormLogin>
				</ModalBlockRegister>
			</ModalRegister>
        </ContainerSignup>
    </WrapperRegister>
    )
}