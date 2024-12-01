import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router/routes";
import { MyDatePicker } from "../Calendar/CalendarPicker";
import { useTaskContext } from "../../context/taskContext";
import { useContext, useState } from "react";
import { deleteTask } from "../../API/tasks";
import { userContext } from "../../context/userContext";
import * as S from "./PopBrowse.styled.js";
import { topicHeader } from "../../themeStyles.js";

export const TaskView = () => {
  const { id } = useParams();
  const { tasks, setTasks } = useTaskContext();
  const { user } = useContext(userContext);

  const navigate = useNavigate();

  const [task, setTask] = useState(tasks.find((task) => task._id === id));

  return (
    <S.popBrowse>
      <S.popBrowseContainer>
        <S.popBrowseBlock>
          <S.popBrowseContent>
            <S.popBrowseTopBlock>
              <S.popBrowseTtl>{task.title}</S.popBrowseTtl>
              <S.CategoriesTheme $themeColor={topicHeader[task.topic]}>
                <S.CategoriesThemeTopic>{task.topic}</S.CategoriesThemeTopic>
              </S.CategoriesTheme>
            </S.popBrowseTopBlock>
            <S.Status>
              <S.StatusTitileBrowse>Статус</S.StatusTitileBrowse>
              <S.StatusTheme>{task.status}</S.StatusTheme>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.PopBrowseSubttl htmlFor="textArea01">
                    Описание задачи
                  </S.PopBrowseSubttl>
                  <S.PopBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."></S.PopBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <S.CalendarPopBrowse>
                <S.CalendarBlock>
                  <S.CalendarNav></S.CalendarNav>
                  <MyDatePicker>
                    selected={task.date}
                    setSelected={(date) => setTask({ ...task, date })}
                  </MyDatePicker>

                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  <S.CalendarPeriod></S.CalendarPeriod>
                </S.CalendarBlock>
              </S.CalendarPopBrowse>
            </S.PopBrowseWrap>

            <S.PopBrowseBtn>
              <S.PopBrowseGroup>
                <S.ButtonBorEdit>
                  <Link to={`/redaction/${id}`}>Редактировать задачу</Link>
                </S.ButtonBorEdit>
                <S.ButtonBorDelete
                  onClick={() => {
                    deleteTask({
                      token: user.token,
                      id: task._id,
                      taskData: task,
                    }).then((data) => {
                      setTasks(data.tasks);
                      navigate(routes.main);
                    });
                  }}>
                  Удалить задачу
                </S.ButtonBorDelete>
              </S.PopBrowseGroup>
              <S.ButtonBorClose>
                <Link to={routes.main}>Закрыть</Link>
              </S.ButtonBorClose>
            </S.PopBrowseBtn>
          </S.popBrowseContent>
        </S.popBrowseBlock>
      </S.popBrowseContainer>
    </S.popBrowse>
  );
};
