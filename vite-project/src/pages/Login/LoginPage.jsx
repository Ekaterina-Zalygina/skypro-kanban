import { Link, useNavigate } from "react-router-dom"
import { ContainerSignin, ModalBlockLogin, ModalBtnEnterLogin, ModalFormGroupLogin, ModalFormLogin, ModalInputLogin, ModalLogin, ModalTtlLogin, WrapperLogin } from "./login.styled"
import { routes } from "../../router/routes.js"

export const LoginPage = ({setIsAuth}) => {
	const Navigation = useNavigate()
	const handleLogin = () => {
		setIsAuth(true)
		Navigation(routes.main)
	}
    return(
        <WrapperLogin>
        <ContainerSignin>
            <ModalLogin>
				<ModalBlockLogin>
					<ModalTtlLogin>
						<h2>Вход</h2>
					</ModalTtlLogin>
					<ModalFormLogin id="formLogIn" action="#">
						<ModalInputLogin type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<ModalInputLogin type="password" name="password" id="formpassword" placeholder="Пароль" />
						<ModalBtnEnterLogin id="btnEnter"><a onClick={handleLogin}>Войти</a></ModalBtnEnterLogin>
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