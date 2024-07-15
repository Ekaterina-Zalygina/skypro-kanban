import { ContainerSignin, ModalBlockLogin, ModalBtnEnterLogin, ModalFormGroupLogin, ModalFormLogin, ModalInputLogin, ModalLogin, ModalTtlLogin, WrapperLogin } from "./login.styled"

export const LoginPage = () => {
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
						<ModalBtnEnterLogin id="btnEnter"><a href="../main.html">Войти</a></ModalBtnEnterLogin>
						<ModalFormGroupLogin>
							<p>Нужно зарегистрироваться?</p>
							<a href="signup.html">Регистрируйтесь здесь</a>
						</ModalFormGroupLogin>
					</ModalFormLogin>
				</ModalBlockLogin>
            </ModalLogin>
        </ContainerSignin>
     </WrapperLogin>
    )
}