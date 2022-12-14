import { Modal } from "antd";
import React, { useState } from "react";
import { handleAddNewTodo } from "../../Services/Api/TodoApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  errorToast,
  todoAddedtoast,
} from "../../Services/toastNotification/toast";
import { disablePastDate } from "../../app/const";

const AddNewTodoBtn = () => {
  //Properties for Adding in a single Task
  const [title, setTitle] = useState();
  const [note, setNote] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const resetField = () => {
    const form = document.getElementById("form");
    form.reset();
  };

  // const checkDate = async () => {
  //   var start = new Date(startDate + " " + startTime);
  //   var end = new Date(endDate + " " + endTime);

  //   if (end > start) {
  //     alert("end bigger");
  //   } else {
  //     alert("end less");
  //   }
  // };

  //disable the past time
  // const disablePastTime = () => {
  //   let hour = new Date(startTime).getTime();
  //   if (endTime === startTime) {
  //     console.log("End time shoud not be same as start time");
  //   }
  // };
  // console.log(startDate);
  // console.log(startTime);
  // disablePastTime();

  const handleOk = (e) => {
    e.preventDefault();
    handleAddNewTodo(title, note, startDate, endDate, startTime, endTime);
    setIsModalOpen(false);
    resetField();
    todoAddedtoast();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dateChange = (value) => {
    var start = new Date(startDate);
    var end = new Date(value);
    if (end < start) {
      setEndDate("");
      setEndTime("");
      errorToast("End Date Never Less Than Start Date");
      return;
    } else {
      setEndDate(value);
    }
  };
  const timeChange = (value) => {
    var start = new Date(startDate + " " + startTime);
    var end = new Date(endDate + " " + endTime);
    if (end <= start) {
      setEndTime("");
      setEndDate("");
      errorToast("End Date Time Never Less Than Start Date and Time");
      return;
    } else {
      setEndTime(value);
    }
  };

  const clearWaitingQueue = () => {
    // Easy, right ????
    toast.clearWaitingQueue();
  };
  clearWaitingQueue();

  return (
    <div className="flex justify-end">
      <button
        className="bg-[#007BEC] py-[12px] px-[24px] rounded-[10px] w-[126px] h-12 text-white text-[16px] font-[500]"
        onClick={showModal}
      >
        Add ToDo
      </button>
      <Modal
        //title="Add ToDo"
        open={isModalOpen}
        //onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div>
            <h2 className="font-[600] text-[24px] flex justify-center">
              Add ToDo
            </h2>
          </div>
          <hr className="mb-8"></hr>
          <form id="form" onSubmit={handleOk}>
            <label className="required-field">Task Title</label>
            <input
              required
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Title *"
            />

            <label className="required-field">Task Note</label>
            <textarea
              onChange={(e) => setNote(e.target.value)}
              className="shadow appearance-none border rounded h-32 w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Note *"
            />

            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label className="required-field">Start Date</label>
                <input
                  required
                  onChange={(e) => {
                    // let date = new Date(e.target.value);
                    // const day = date.getDate();
                    // const month = date.getMonth();
                    // const year = date.getFullYear();
                    // const fulldate = day + "-" + month + "-" + year;
                    // console.log(fulldate);
                    // setStartDate(fulldate);
                    setStartDate(e.target.value);

                    //setStartDate(e.target.value);

                    // let edate = new Date(e.target.value);
                    // console.log(edate.toLocaleDateString());
                    // setStartDate(edate.toLocaleDateString());
                  }}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  min={disablePastDate()}
                />
              </div>
              <div className="col-span-1">
                <label className="required-field">Start Time</label>
                <input
                  required
                  onChange={(e) => setStartTime(e.target.value)}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label className="required-field">End Date</label>
                <input
                  required
                  value={endDate}
                  onChange={(e) => {
                    dateChange(e.target.value);

                    //setEndDate(e.target.value);
                  }}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  min={startDate}
                />
              </div>
              <div className="col-span-1">
                <label className="required-field">End Time</label>
                <input
                  required
                  value={endTime}
                  onChange={(e) => {
                    timeChange(e.target.value);
                    // setEndTime(e.target.value);
                    // let etime = new Date(e.target.value);
                    // let time = etime.getTime();
                    // console.log(time);
                    // setEndTime(time);
                  }}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="w-[211px] px-6 py-3 h-12 rounded-[10px] bg-[#007BEC] text-white text-[16px] font-[500]">
                Add ToDo
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer limit={1} />
    </div>
  );
};
export default AddNewTodoBtn;
