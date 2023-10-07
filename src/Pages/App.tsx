// import { useQuery } from "react-query";
// import axios from "axios";
// import { ITodo } from "./types/todos.types";
// import { getAllTodos } from "./api/todosAPI";
import { useQueryClient } from "react-query";
import { useAllTodos } from "../hooks/useHooks";

function App() {
  const { isLoading, data } = useAllTodos();

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

  return (
    <div>
      <button onClick={()=> queryClient.invalidateQueries(['todos'])}>Refresh</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : data?.length ? (
        // <h1>Todo: {data?.title}</h1>
        data.map((item) => (
          <div>
            <b>{item.id}: </b>
            {item.title}
          </div>
        ))
      ) : (
        <h2>Data not found</h2>
      )}
    </div>
  );
}

export default App;
