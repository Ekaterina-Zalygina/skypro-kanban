import { ContainerSignup, ModalBlockRegister, ModalBtnRegister, ModalFormGroupRegister, ModalFormLogin, ModalInputRegister, ModalRegister, ModalTtlRegister, WrapperRegister } from "./register.styled"

export const Register = () => {
    return(
        <WrapperRegister>
        <ContainerSignup>
            <ModalRegister>
				<ModalBlockRegister>
					<ModalTtlRegister>
						<h2>Регистрация</h2>
					</ModalTtlRegister>
					<ModalFormLogin id="formLogUp" action="#">
						<ModalInputRegister type="text" name="first-name" id="first-name" placeholder="Имя" />
						<ModalInputRegister type="text" name="login" id="loginReg" placeholder="Эл. почта" />
						<ModalInputRegister type="password" name="password" id="passwordFirst" placeholder="Пароль" />
						<ModalBtnRegister id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </ModalBtnRegister>
						<ModalFormGroupRegister>
							<p>Уже есть аккаунт?  <a href="signin.html">Войдите здесь</a></p>
						</ModalFormGroupRegister>
					</ModalFormLogin>
				</ModalBlockRegister>
			</ModalRegister>
        </ContainerSignup>
    </WrapperRegister>
    )
}