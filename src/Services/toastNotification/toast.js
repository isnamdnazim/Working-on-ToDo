import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// delete todo toast
export const todoDeletedtoast = () =>
  toast.success("ToDo Deleted Successfully", {
    toastId: "success1",
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
    toastId: "info1",
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
    toastId: "success1",
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
    toastId: "success1",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const errorToast = (data) =>
  toast.error(data, {
    toastId: "error1",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const warningToast = (data) =>
  toast.warning(data, {
    //toastId: "warning1",
    delay: 1000,
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
