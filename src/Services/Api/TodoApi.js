import axios from "axios";
import { Dna } from "react-loader-spinner";
import create from "zustand";
import {
  add_todo,
  base_url,
  complete_todo,
  delete_todo,
  update_todo,
} from "../../app/const";
import { warningToast } from "../toastNotification/toast";

const useBearStore = create((set, get) => ({
  todos: [],
  setToDos: (data) => set({ todos: data }),
  load: [],
  setLoad: () => set({ load: false }),
  success: [],
  setSuccess: () => set({ success: false }),
}));

const { setToDos, setLoad, setSuccess } = useBearStore.getState();

export const getAllTodo = async () => {
  try {
    const response = await axios.get(base_url);
    if (response?.data?.success) {
      const alltask = response?.data?.data;
      setLoad(true);
      setToDos(alltask);
      //console.log("All Task: ", alltask);
      return alltask;
    } else {
      warningToast(
        "The Data is not getting from the Server ",
        response?.data?.message
      );
    }
  } catch (error) {
    console.error(error);
  }
};

//delete todo list
export const handleDeleteTodo = async (id) => {
  try {
    const res = await axios.post(delete_todo, {
      id: id,
    });
    if (res) {
      setToDos(res?.data?.data);
      return true;
    } else {
      console.log("Not Deleted");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

//add a new task
export const handleAddNewTodo = async (
  title,
  note,
  startDate,
  endDate,
  startTime,
  endTime
) => {
  try {
    const response = await axios.post(add_todo, {
      title: title,
      note: note,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endTime,
    });
    if (response?.data?.success) {
      setToDos(response?.data?.data);
      let success = response?.data;
      //console.log("success");
      return true;
    } else {
      //console.log("!success");
      return false;
    }
  } catch (error) {
    console.log(error);
    //console.log("error");
    return false;
  }
};

// update todo
export const updateTask = async (
  id,
  title,
  note,
  startDate,
  endDate,
  startTime,
  endTime
) => {
  try {
    const res = await axios.post(update_todo, {
      id: id,
      title: title,
      note: note,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endTime,
    });
    if (res?.data.success) {
      setToDos(res?.data?.data);
    } else {
      console.log("!success");
      //return false;
    }
  } catch (error) {
    console.log(error);
    console.log("error");
    return false;
  }
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
//review

export default useBearStore;
