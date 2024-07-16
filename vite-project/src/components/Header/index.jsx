import { useState } from "react"
import { Container } from "../../globalStyle.styled"
import * as S from "./header.styled.js"

export const Header = ({addCards, intoTheme, setIntoTheme}) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpenUser = () => {
        setIsOpen(!isOpen)
    }

    const onIntoTheme = () => {
        setIntoTheme(intoTheme === "light" ? "dark" : "light")
    }
    return (
        <S.Header>
        <Container>
            <S.HeaderBlock>
                <S.HeaderLogoLight>
                    <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
                </S.HeaderLogoLight>
                <S.HeaderLogoDark>
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
                </S.HeaderLogoDark>
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
                            <input checked={intoTheme === "dark"} onClick={onIntoTheme} type="checkbox" className="checkbox" name="checkbox"/>
                        </S.PopUserSetTheme>
                        <S.HeaderExit type="button" ><Link to={"/exit"}>Выйти</Link></S.HeaderExit>
                    </S.HeaderPopUserSet>
                    )}

                </S.HeaderNav>					
            </S.HeaderBlock>
        </Container>			
    </S.Header>
    )
}