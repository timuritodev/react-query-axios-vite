import axios from "axios";
import { ITodo } from "../types/todos.types";

const baseURL = "https://jsonplaceholder.typicode.com";

export async function getAllTodos() {
  return axios.get<ITodo[]>(`${baseURL}/todos`);
}

export async function getTodoById(id: string) {
  return axios.get<ITodo>(`${baseURL}/todos/${id}`);
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
