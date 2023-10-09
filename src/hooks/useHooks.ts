import { useQuery } from "react-query";
import { getAllTodos, getTodoById } from "../api/todosAPI";
// import { ITodo } from "../types/todos.types";
// import { AxiosResponse } from "axios";

// const data: AxiosResponse<ITodo[]> = { // initial data
//   data: [
//     {
//       id: 1,
//       completed: false,
//       title: "hello",
//       userId: 1,
//     },
//   ],
// };

export const useAllTodos = () => {
  return useQuery(["todos"], () => getAllTodos(), {
    select: ({ data }) => data,
    // staleTime: 1000, // кол-во миллисекунд сколько данные будут считаться свежими, после перезагрузки страницы если время(staleTime) прошло то будет сделан новый запрос на сервер
    // cacheTime: 1000, // кол-во миллисекунд после которого нужно удалить данные из кеша
    // initialData() {
    //   return data;
    // },
  });
};

const todoId = "1";

export const useTodosById = () => {
  return useQuery(["todo", todoId], () => getTodoById(todoId), {
    select: ({ data }) => data,
    enabled: !!todoId, // запрос срабатывает только при наличии todoId
  });
};
