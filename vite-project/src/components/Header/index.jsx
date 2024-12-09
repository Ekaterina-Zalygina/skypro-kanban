import { useContext, useState } from "react";
import { Container } from "../../globalStyle.styled";
import * as S from "./header.styled.js";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { userContext } from "../../context/userContext.jsx";

export const Header = ({ intoTheme, setIntoTheme }) => {
  const { user } = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
  };

  const onIntoTheme = () => {
    setIntoTheme(intoTheme === "light" ? "dark" : "light");
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight>
            <img src="images/logo.png" alt="logo" />
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <img src="images/logo_dark.png" alt="logo" />
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <Link to={routes.add}>
              <S.HeaderBtnMain id="btnMainNew">
                Создать новую задачу
              </S.HeaderBtnMain>
            </Link>
            <S.HeaderUserHover02 onClick={toggleOpenUser}>
              {user.name}
            </S.HeaderUserHover02>

            {/* модальное окно */}
            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                <S.HeaderPopUserSetName>{user.name}</S.HeaderPopUserSetName>
                <S.PopUserSetEmail>{user.login}</S.PopUserSetEmail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input
                    checked={intoTheme === "dark"}
                    onClick={onIntoTheme}
                    type="checkbox"
                    name="checkbox"
                  />
                </S.PopUserSetTheme>
                <S.HeaderExit type="button">
                  <Link to={routes.exit}>Выйти</Link>
                </S.HeaderExit>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
