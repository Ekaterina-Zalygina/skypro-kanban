import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import * as S from "./popUser.styled.js";

export const PopUser = () => {
  const { logout } = useContext(userContext);

  return (
    <S.popExit id="popExit">
      <S.popExitContainer>
        <S.popExitBlock>
          <S.popExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.popExitTtl>
          <S.popExitForm id="formExit" action="#">
            <S.popExitGroup>
              <S.popExitYes id="exitYes" onClick={logout}>
                Да, выйти
              </S.popExitYes>
              <S.popExitNo id="exitNo">
                <Link to={routes.main}>Нет, остаться</Link>{" "}
              </S.popExitNo>
            </S.popExitGroup>
          </S.popExitForm>
        </S.popExitBlock>
      </S.popExitContainer>
    </S.popExit>
  );
};
