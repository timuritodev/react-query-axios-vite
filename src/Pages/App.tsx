// import { useQuery } from "react-query";
// import axios from "axios";
// import { ITodo } from "./types/todos.types";
// import { getAllTodos } from "./api/todosAPI";
import { useIsFetching, useMutation, useQueryClient } from "react-query";
import { useAllTodos } from "../hooks/useHooks";
import "./App.css";
import { SyntheticEvent, useState } from "react";
import { createTodo } from "../api/todosAPI";
function App() {
  const { isLoading, data, refetch } = useAllTodos();

  const countFetching = useIsFetching(); // подсчет сколько раз обновилась страница

  const queryClient = useQueryClient();
  
  // const { isLoading, data } = useQuery(["todos"], () => getAllTodos(), {
  //   select: ({ data }) => data,
  // });

  // const { isLoading, data } = useQuery(
  //   ["todos", 1],
  //   () => axios.get<ITodo>("https://jsonplaceholder.typicode.com/todos/1"),
  //   {
  //     select: ({ data }) => data,
  //   }
  // );

  const [title, setTitle] = useState("");

  const { mutate } = useMutation(
    ["create todo"],
    (title: string) => createTodo(title),
    {
      async onSuccess() {
        setTitle("");
        alert("Todo created");
        await refetch(); // обновляем массив после создания Todo
      },
    }
  );

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(title);
    mutate(title);
  };

  return (
    <div className="app__container">
      <div>
        <h1>Create Todo:</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter Todo title"
          />
          <button>Create Todo</button>
        </form>
        <h3>Count fetching:{countFetching}</h3>
      </div>
      <div>
        <h1>Todos:</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : data?.length ? (
          // <h1>Todo: {data?.title}</h1>
          data.map((item) => (
            <div key={item.id}>
              <b>{item.id}: </b>
              {item.title}
            </div>
          ))
        ) : (
          <h2>Data not found</h2>
        )}
        <button onClick={() => queryClient.invalidateQueries(["todos"])}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
