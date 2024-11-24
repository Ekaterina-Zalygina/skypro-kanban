import { useContext, useState } from "react";
import * as S from "./popNewCard.styled.js";
import { userContext } from "../../context/userContext.jsx";
import { newTask } from "../../API/tasks.js";
import { MyDatePicker } from "../Calendar/CalendarPicker.jsx";
import { routes } from "../../router/routes.js";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/taskContext.jsx";

export const PopNewCard = () => {
  const [error, setError] = useState(null);
  const { user } = useContext(userContext);
  const { setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const [addValue, setAddValue] = useState({
    text: "",
    topic: "",
    title: "",
    date: null,
    status: "Без статуса",
  });

  const createTask = async (e) => {
    e.preventDefault();

    if (!addValue.text) {
      setError("Введите описание задачи");
      return;
    }

    if (!addValue.topic) {
      setError("Выберите категорию задачи");
      return;
    }

    if (!addValue.title) {
      setError("Введите название задачи");
      return;
    }

    if (!addValue.date) {
      setError("Выберите дату");
      return;
    }

    if (!addValue.status) {
      setError("Выберите статус задачи");
      return;
    }

    navigate(routes.main);

    try {
      const tasks = await newTask({ token: user.token, taskData: addValue });
      setTasks(tasks.tasks);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCategoryChange = (e) => {
    setAddValue((prevState) => ({
      ...prevState,
      topic: e.target.value,
    }));
  };

  return (
    <S.NewCard id="popNewCard">
      <S.NewCardContainer>
        <S.NewCardBlock>
          <S.NewCardContent>
            <S.NewCardTtl>Создание задачи</S.NewCardTtl>
            <S.NewCardClose>
              <Link to={routes.main}>&#10006;</Link>
            </S.NewCardClose>
            <S.NewCardWrap>
              <S.NewCardForm id="formNewCard" action="#" onSubmit={createTask}>
                <S.FormNewBlock>
                  <S.NewCardSubttl htmlFor="formTitle">
                    Название задачи
                  </S.NewCardSubttl>
                  <S.FormNewInput
                    onChange={(e) =>
                      setAddValue({ ...addValue, title: e.target.value })
                    }
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.NewCardSubttl htmlFor="textArea">
                    Описание задачи
                  </S.NewCardSubttl>
                  <S.FormNewArea
                    onChange={(e) =>
                      setAddValue({ ...addValue, text: e.target.value })
                    }
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormNewBlock>
              </S.NewCardForm>
              <MyDatePicker
                selected={addValue.date}
                setSelected={(date) => setAddValue({ ...addValue, date })}
              />
            </S.NewCardWrap>
            <div className="pop-new-card__categories categories">
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.CategoriesActive
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleCategoryChange}
                  checked={addValue.topic === "Web Design"}
                />
                <S.RadioCategories1
                  htmlFor="radio1"
                  className={addValue.topic === "Web Design" ? "active" : ""}>
                  Web Design
                </S.RadioCategories1>

                <S.CategoriesActive
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleCategoryChange}
                  checked={addValue.topic === "Research"}
                />
                <S.RadioCategories2
                  htmlFor="radio2"
                  className={addValue.topic === "Research" ? "active" : ""}>
                  Research
                </S.RadioCategories2>

                <S.CategoriesActive
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleCategoryChange}
                  checked={addValue.topic === "Copywriting"}
                />
                <S.RadioCategories3
                  htmlFor="radio3"
                  className={addValue.topic === "Copywriting" ? "active" : ""}>
                  Copywriting
                </S.RadioCategories3>
              </S.CategoriesThemes>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <S.FormNewCreate id="btnCreate" type="submit" onClick={createTask}>
              Создать задачу
            </S.FormNewCreate>
          </S.NewCardContent>
        </S.NewCardBlock>
      </S.NewCardContainer>
    </S.NewCard>
  );
};
