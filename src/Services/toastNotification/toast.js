import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// delete todo toast
export const todoDeletedtoast = () =>
  toast.success("ToDo Deleted Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

// update todo toast
export const todoUpdatetoast = () =>
  toast.info("ToDo Updated Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// Add Todo toast
export const todoAddedtoast = () =>
  toast.success("ToDo Added Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// Complete todo toast
export const todoConpletedtoast = () =>
  toast.success("ToDo Completed", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });