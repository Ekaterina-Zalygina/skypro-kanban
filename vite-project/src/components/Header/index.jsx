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
                    <S.HeaderBtnMain onClick={addCards} id="btnMainNew"><a>Создать новую задачу</a></S.HeaderBtnMain>
                    <S.HeaderUserHover02 onClick={toggleOpenUser}>Ivan Ivanov</S.HeaderUserHover02>

                    {/* модальное окно */}
                    {isOpen && (
                        <S.HeaderPopUserSet id="user-set-target">
                        <S.HeaderPopUserSetName>Ivan Ivanov</S.HeaderPopUserSetName>
                        <S.PopUserSetEmail>ivan.ivanov@gmail.com</S.PopUserSetEmail>
                        <S.PopUserSetTheme>
                            <p>Темная тема</p>
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                        </S.PopUserSetTheme>
                        <S.HeaderExit type="button" ><a href="#popExit">Выйти</a></S.HeaderExit>
                    </S.HeaderPopUserSet>
                    )}

                </S.HeaderNav>					
            </S.HeaderBlock>
        </Container>			
    </S.Header>
    )
}