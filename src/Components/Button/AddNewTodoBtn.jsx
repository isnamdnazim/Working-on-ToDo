import { Button, Modal } from "antd";
import React, { useState } from "react";

const AddNewTodoBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log("submitted");
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
          <div>
            <input
              className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Title"
            />

            <textarea
              className="shadow appearance-none border rounded h-32 w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Note"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-1">
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
              />
            </div>
            <div className="col-span-1">
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-1">
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
              />
            </div>
            <div className="col-span-1">
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AddNewTodoBtn;
