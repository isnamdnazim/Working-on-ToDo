import { Modal } from "antd";
import React, { useState } from "react";
import { handleAddNewTodo } from "../../Services/Api/TodoApi";

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
  const handleOk = () => {
    console.log("submitted");
    handleAddNewTodo(title, note, startDate, endDate, startTime, endTime);
    setIsModalOpen(false);
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
        title="Add ToDo"
        open={isModalOpen}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
        <div>
          <form>
            <input
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
                  onChange={(e) => setStartDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                />
              </div>
              <div className="col-span-1">
                <label>Start Time</label>
                <input
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
                  onChange={(e) => setEndDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                />
              </div>
              <div className="col-span-1">
                <label>End Time</label>
                <input
                  onChange={(e) => setEndTime(e.target.value)}
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default AddNewTodoBtn;
