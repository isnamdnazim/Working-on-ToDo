import { Modal } from "antd";
import React, { useState } from "react";
import { handleAddNewTodo } from "../../Services/Api/TodoApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { todoAddedtoast } from "../../Services/toastNotification/toast";

const AddNewTodoBtn = () => {
  //Properties for Adding in a single Task
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const resetField = () => {
    const form = document.getElementById("form");
    form.reset();
  };

  // disable the past date
  const disablePastDate = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const handleOk = (e) => {
    e.preventDefault();
    console.log("submitted");
    handleAddNewTodo(title, note, startDate, endDate, startTime, endTime);
    setIsModalOpen(false);
    resetField();
    todoAddedtoast();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
            <input
              required
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Title"
            />

            <textarea
              onChange={(e) => setNote(e.target.value)}
              className="shadow appearance-none border rounded h-32 w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Note"
            />

            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label>Start Date</label>
                <input
                  required
                  onChange={(e) => setStartDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  min={disablePastDate()}
                />
              </div>
              <div className="col-span-1">
                <label>Start Time</label>
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
                <label>End Date</label>
                <input
                  required
                  onChange={(e) => setEndDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  min={startDate}
                />
              </div>
              <div className="col-span-1">
                <label>End Time</label>
                <input
                  required
                  onChange={(e) => setEndTime(e.target.value)}
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
      <ToastContainer />
    </div>
  );
};
export default AddNewTodoBtn;
