import { useState } from "react"
import { Container } from "../../globalStyle.styled"
import * as S from "./header.styled.js"

export const Header = ({addCards}) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpenUser = () => {
        setIsOpen(!isOpen)
    }

    return (
        <S.Header>
        <Container>
            <S.HeaderBlock>
                <S.HeaderLogo className="_show _light">
                    <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
                </S.HeaderLogo>
                <S.HeaderLogo className="_dark">
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
                </S.HeaderLogo>
                <S.HeaderNav>
                    <button onClick={addCards} className="header__btn-main-new _hover01" id="btnMainNew"><a>Создать новую задачу</a></button>
                    <a className="header__user _hover02" onClick={toggleOpenUser}>Ivan Ivanov</a>

                    {/* модальное окно */}
                    {isOpen && (
                        <S.HeaderPopUserSet id="user-set-target">
                        <S.HeaderPopUserSet>Ivan Ivanov</S.HeaderPopUserSet>
                        <S.PopUserSetEmail>ivan.ivanov@gmail.com</S.PopUserSetEmail>
                        <S.PopUserSetTheme>
                            <p>Темная тема</p>
                            <S.PopUserThemeCheckbox type="checkbox" name="checkbox"/>
                        </S.PopUserSetTheme>
                        <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                    </S.HeaderPopUserSet>
                    )}

                </S.HeaderNav>					
            </S.HeaderBlock>
        </Container>			
    </S.Header>
    )
}