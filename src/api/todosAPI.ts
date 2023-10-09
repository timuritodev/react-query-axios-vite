import axios from "axios";
import { ICreateTodo, ITodo } from "../types/todos.types";

const baseURL = "https://jsonplaceholder.typicode.com";

export async function getAllTodos() {
  return axios.get<ITodo[]>(`${baseURL}/todos/?_start=0&_limit=5`);
}

export async function getTodoById(id: string) {
  return axios.get<ITodo>(`${baseURL}/todos/${id}`);
}

export async function createTodo(title: string) {
    return axios.post<unknown, unknown, ICreateTodo>(`${baseURL}/todos/`,{
        title,
        userId: 1,
        completed: false,
    } );
  }

// with classes

// import axios from "axios";
// import { ITodo } from "../types/todos.types";

// class TodoService {
//   private URL = "https: //jsonplaceholder.typicode.com";

//   async getAll() {
//     return axios.get<ITodo[]>(`${this.URL}/todos`);
//   }
//   async getById(id: string) {
//     return axios.get<ITodo>(`/todos/${id}`);
//   }
// }

// export default new TodoService();
