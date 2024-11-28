import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router/routes";
import { MyDatePicker } from "../Calendar/CalendarPicker";
import { useContext, useState } from "react";
import { useTaskContext } from "../../context/taskContext";
import { deleteTask, editTask } from "../../API/tasks";
import { userContext } from "../../context/userContext";
import * as S from "./redTask.styled.js";
import { topicHeader } from "../../themeStyles.js";

function Status({ text, selected, onClick }) {
  return (
    <div
      className={`status__theme ${selected ? "_active-status" : ""}`}
      onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export const TaskEdit = () => {
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
              <S.popBrowseTtl
                input
                type="text"
                value={task.title}
                onChange={(e) =>
                  setTask({ ...task, title: e.target.value })
                }></S.popBrowseTtl>
              <S.CategoriesTheme $themeColor={topicHeader[task.topic]}>
                <S.CategoriesThemeTopic>{task.topic}</S.CategoriesThemeTopic>
              </S.CategoriesTheme>
            </S.popBrowseTopBlock>
            <div className="pop-browse__status status">
              <S.StatusTitileBrowse>Статус</S.StatusTitileBrowse>
              <S.StatusThemeEdit>
                <Status
                  text="Без статуса"
                  selected={task.status === "Без статуса"}
                  onClick={() => setTask({ ...task, status: "Без статуса" })}
                />
                <Status
                  text="Нужно сделать"
                  selected={task.status === "Нужно сделать"}
                  onClick={() => setTask({ ...task, status: "Нужно сделать" })}
                />
                <Status
                  text="В работе"
                  selected={task.status === "В работе"}
                  onClick={() => setTask({ ...task, status: "В работе" })}
                />
                <Status
                  text="Тестирование"
                  selected={task.status === "Тестирование"}
                  onClick={() => setTask({ ...task, status: "Тестирование" })}
                />
                <Status
                  text="Готово"
                  selected={task.status === "Готово"}
                  onClick={() => setTask({ ...task, status: "Готово" })}
                />
              </S.StatusThemeEdit>
            </div>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.PopBrowseSubttl htmlFor="textArea01">
                    Описание задачи
                  </S.PopBrowseSubttl>
                  <S.PopBrowseArea
                    value={task.description}
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи..."></S.PopBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <MyDatePicker
                selected={task.date}
                setSelected={(date) =>
                  setTask({ ...task, date })
                }></MyDatePicker>

              <input type="hidden" id="datepick_value" value="08.09.2023" />
              <S.CalendarPeriod></S.CalendarPeriod>
            </S.PopBrowseWrap>
          </S.popBrowseContent>
          <S.PopBrowseBtn>
            <S.PopBrowseGroup>
              <S.ButtonBorSave
                onClick={() => {
                  editTask({
                    token: user.token,
                    id: task._id,
                    taskData: task,
                  }).then((data) => {
                    setTasks(data.tasks);
                    navigate(routes.main);
                  });
                }}>
                Сохранить
              </S.ButtonBorSave>

              <S.ButtonBorCancel>
                <Link to={routes.main}>Отменить</Link>
              </S.ButtonBorCancel>

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
                Удалить
              </S.ButtonBorDelete>
            </S.PopBrowseGroup>
            <S.ButtonBorClose>
              <Link to={routes.main}>Закрыть</Link>
            </S.ButtonBorClose>
          </S.PopBrowseBtn>
        </S.popBrowseBlock>
      </S.popBrowseContainer>
    </S.popBrowse>
  );
};
