import axios from "axios";
import create from "zustand";
import { base_url } from "./const";

const useBearStore = create((set, get) => ({
  todos: [],
  setToDos: (data) => set({ todos: data }),
}));

export const getAllTodo = async () => {
  const { setToDos } = useBearStore.getState();

  try {
    const response = await axios.get(base_url);
    console.log(response?.data);
    const alltask = response?.data?.data;
    setToDos(alltask);
    return alltask;
  } catch (error) {
    console.error(error);
  }
};
//getAllTodo();

export default useBearStore;
