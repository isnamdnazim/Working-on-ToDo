import axios from "axios";
import create from "zustand";
import {
  add_todo,
  base_url,
  complete_todo,
  delete_todo,
  update_todo,
} from "../../app/const";

const useBearStore = create((set, get) => ({
  todos: [],
  setToDos: (data) => set({ todos: data }),
  load: [],
  setLoad: () => set({ load: false }),
}));

const { setToDos, setLoad } = useBearStore.getState();

export const getAllTodo = async () => {
  try {
    const response = await axios.get(base_url);
    if (response?.data?.success) {
      const alltask = response?.data?.data;
      setToDos(alltask);
      console.log("All Task: ", alltask);
      setLoad(true);
      return alltask;
    }
  } catch (error) {
    console.error(error);
  }
};

//delete todo list
export const handleDeleteTodo = (id) => {
  axios
    .post(delete_todo, {
      id: id,
    })
    .then((res) => {
      console.log(res);
      setToDos(res?.data?.data);
    });
};

//add a new task
export const handleAddNewTodo = (
  title,
  note,
  startDate,
  endDate,
  startTime,
  endTime
) => {
  axios
    .post(add_todo, {
      title: title,
      note: note,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endTime,
    })
    .then(function (response) {
      if (response?.data.success) {
        setToDos(response?.data?.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

// update todo
export const updateTask = (
  id,
  title,
  note,
  startDate,
  endDate,
  startTime,
  endTime
) => {
  axios
    .post(update_todo, {
      id: id,
      title: title,
      note: note,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endTime,
    })
    .then((res) => {
      if (res?.data.success) {
        setToDos(res?.data?.data);
      }
    });
};

// complete todo task
export const handleCompleteTask = (id) => {
  axios
    .post(complete_todo, {
      id: id,
    })
    .then((res) => {
      //setToDos(res?.data?.data);
      if (res?.data.success) {
        setToDos(res?.data?.data);
      }
      //console.log(res.data);
      return;
    });
};

export default useBearStore;
