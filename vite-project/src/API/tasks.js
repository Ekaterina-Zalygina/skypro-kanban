const apiURL = "https://wedev-api.sky.pro/api/kanban";
//все задачи
export const getTasks = async (token) => {
  const response = await fetch(apiURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Неудалось загрузить данные, попрбуйте позже");
  }
  return response.json();
};

//добавление задачи
export const newTask = async ({ token, taskData }) => {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error("Задача не добавлена, попробуйте еще раз");
  }
  return response.json();
};

//edit задачи
export const editTask = async ({ token, taskData, id }) => {
  const response = await fetch(apiURL + "/" + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error("Задача не добавлена, попробуйте еще раз");
  }
  return await response.json();
};

//delete задачи
export const deleteTask = async ({ token, taskData, id }) => {
  const response = await fetch(apiURL + "/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error("Задача не добавлена, попробуйте еще раз");
  }
  return await response.json();
};
