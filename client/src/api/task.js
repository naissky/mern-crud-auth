import axios from './axios';

export const getTasksRequest = () => axios.get(`/tasks`);

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTasksRequest = (task) => axios.post(`/tasks`, task);

export const updateTasksRequest = (task) =>
  axios.put(`/tasks/${task.id}`, task);

export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`);
