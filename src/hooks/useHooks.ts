import { useQuery } from "react-query";
import { getAllTodos } from "../api/todosAPI";
// import { getTodoById } from "../api/todosAPI";

export const useAllTodos = () => {
  return useQuery(["todos"], () => getAllTodos(), {
    select: ({ data }) => data,
  });

//   const todoId = "1";

//   return useQuery(["todo", todoId], () => getTodoById(todoId), {
//     select: ({ data }) => data,
//     enabled: !!todoId, // запрос срабатывает только при наличии todoId
//   });
};
