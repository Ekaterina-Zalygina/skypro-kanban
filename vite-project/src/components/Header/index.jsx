import { useState } from "react"

import * as S from "./header.styled.js"
import { Container } from "../../globalStyle.styled"

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
                    <S.HeaderBtnNew onClick={addCards} id="btnMainNew"><a>Создать новую задачу</a></S.HeaderBtnNew>
                    <S.HeaderUser onClick={toggleOpenUser}>Ivan Ivanov</S.HeaderUser>

                    {/* модальное окно */}
                    {isOpen && (
                        <S.HeaderPopUserSet id="user-set-target">
                        <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                        <S.PopUserSetEmail>ivan.ivanov@gmail.com</S.PopUserSetEmail>
                        <S.PopUserSetTheme>
                            <p>Темная тема</p>
                            <S.PopUserThemeCheckbox type="checkbox"/>
                        </S.PopUserSetTheme>
                        <S.ButtonExit><a href="#popExit">Выйти</a></S.ButtonExit>
                    </S.HeaderPopUserSet>
                    )}

                </S.HeaderNav>					
            </S.HeaderBlock>
        </Container>			
    </S.Header>
    )
}