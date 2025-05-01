import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/todos";

export async function getTodos() {
  try {
    const response = await axios.get(`${BASE_URL}/`, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch todos");
  }
}


export async function createTodo(newTodo) {
  try {
    const response = await axios.post(`${BASE_URL}/`, newTodo, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create campaign");
  }
}



export async function updateTodo({ id, status }) {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, { status }, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update todo");
  }
}

export async function deleteTodo(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`, { withCredentials: true });
    return true;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete todo");
  }
}

export async function editTodo({ id, todoData }) {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, todoData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to edit todo");
  }
}
