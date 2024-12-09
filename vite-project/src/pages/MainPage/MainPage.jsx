import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Wrapper } from "../../globalStyle.styled";
import loader from "/images/loader.jpg";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../API/tasks";
import { userContext } from "../../context/userContext";
import { TaskContext } from "../../context/taskContext";

export const MainPage = ({ intoTheme, setIntoTheme }) => {
  const { user } = useContext(userContext); //на будущее - лучше писать с большой буквы UserContext
  const { tasks, setTasks } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getTasks(user.token)
      .then((res) => {
        setTasks(res.tasks);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Outlet />
      <Header setIntoTheme={setIntoTheme} intoTheme={intoTheme} />
      {isLoading ? (
        <img src={loader} alt="" />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Main cards={tasks} />
      )}
    </Wrapper>
  );
};
