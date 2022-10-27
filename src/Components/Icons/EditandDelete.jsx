import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import editIcon from "../../icons/editIcon.png";
import deleteIcon from "../../icons/deleteIcon.png";
import useBearStore, {
  handleDeleteTodo,
  updateTask,
} from "../../Services/Api/TodoApi";

const EditandDelete = (props) => {
  const id = props.item.id;
  const { todos } = useBearStore();

  // getting the Properties for  update single Task
  const [hasTitle, setHasTitle] = useState("");
  const [hasNote, setHasNote] = useState();
  const [hasStartDate, setHasStartDate] = useState();
  const [hasEndDate, setHasEndDate] = useState();
  const [hasStartTime, setHasStartTime] = useState();
  const [hasEndTime, setHasEndTime] = useState();
  //console.log(hasTitle);
  //console.log(taskId);

  const handleUpdateTask = (id) => {
    let hasTask = todos.find((item) => item.id === id);
    console.log(hasTask.title);
    setHasTitle(hasTask.title);
    setHasNote(hasTask.note);
    setHasStartDate(hasTask.start_date);
    setHasStartTime(hasTask.start_time);
    setHasEndDate(hasTask.end_date);
    setHasEndTime(hasTask.end_time);
  };
  const { confirm } = Modal;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    handleUpdateTask(id);
  };
  const handleOk = (e) => {
    e.preventDefault();
    //console.log("submitted");
    setIsModalOpen(false);
    updateTask(
      id,
      hasTitle,
      hasNote,
      hasStartDate,
      hasEndDate,
      hasStartTime,
      hasEndTime
    );
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
        //console.log("OK");
        handleDeleteTodo(id);
      },
      onCancel() {
        //console.log("Cancel");
      },
    });
    //console.log("working");
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
        //title="Update ToDo"
        open={isModalOpen}
        //onOk={handleOk}
        okText="Update"
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div>
            <h2 className="font-[600] text-[24px] flex justify-center">
              Edit ToDo
            </h2>
          </div>
          <hr className="mb-8"></hr>
          <form onSubmit={handleOk}>
            <input
              className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Title"
              value={hasTitle}
              onChange={(e) => setHasTitle(e.target.value)}
            />

            <textarea
              className="shadow appearance-none border rounded h-32 w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write Task Note"
              value={hasNote}
              onChange={(e) => setHasNote(e.target.value)}
            />

            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label>Start Date</label>
                <input
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  value={hasStartDate}
                  onChange={(e) => setHasStartDate(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <label>Start Time</label>
                <input
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                  value={hasStartTime}
                  onChange={(e) => setHasStartTime(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label>End Date</label>
                <input
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  value={hasEndDate}
                  onChange={(e) => setHasEndDate(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <label>End Time</label>
                <input
                  className="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                  value={hasEndTime}
                  onChange={(e) => setHasEndTime(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8  flex justify-center">
              <button className="w-[211px] px-6 py-3 h-12 rounded-[10px] bg-[#007BEC] text-white text-[16px] font-[500]">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Modal>
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
