import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import editIcon from "../../icons/editIcon.png";
import deleteIcon from "../../icons/deleteIcon.png";
import useBearStore, { handleDeleteTodo } from "../../Services/Api/TodoApi";

const EditandDelete = (props) => {
  const id = props.id;

  const { confirm } = Modal;
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
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        handleDeleteTodo(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
    console.log("working");
  };
  return (
    <div className="flex justify-around">
      {/* <FontAwesomeIcon
        className="editIconColor"
        cursor="pointer"
        onClick={showModal}
        icon={faPenToSquare}
      /> */}
      <img
        className="cursor-pointer w-9 h-9 p2 mr-4"
        src={editIcon}
        cursor="pointer"
        onClick={showModal}
        alt="Edit Icon"
      />
      <Modal
        title="Update ToDo"
        open={isModalOpen}
        onOk={handleOk}
        okText="Update"
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
              <label>Start Date</label>
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
              />
            </div>
            <div className="col-span-1">
              <label>Start Time</label>
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-1">
              <label>End Date</label>
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
              />
            </div>
            <div className="col-span-1">
              <label>End Time</label>
              <input
                className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
              />
            </div>
          </div>
        </div>
      </Modal>
      {/* <FontAwesomeIcon
        className="deleteIconColor"
        onClick={showDeleteConfirm}
        cursor="pointer"
        icon={faTrashCan}
      /> */}
      <img
        className="cursor-pointer w-9 h-9 p2"
        src={deleteIcon}
        cursor="pointer"
        onClick={showDeleteConfirm}
        alt="Delete Icon"
      />
    </div>
  );
};

export default EditandDelete;
