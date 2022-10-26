import { Checkbox } from "antd";
import React from "react";
import useBearStore from "../../Services/Api/TodoApi";
import AddNewTodoBtn from "../Button/AddNewTodoBtn";
import EditandDelete from "../Icons/EditandDelete";

const IndividualTodo = () => {
  const { todos } = useBearStore();
  return (
    <div>
      <AddNewTodoBtn />
      <div className="mt-[24px]">
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <div className=" flex   p-[13px] border rounded-[10px]">
                <div className=" w-3/4 flex flex-col items-start">
                  <h1 className="text-lg">{item.title}</h1>
                  <p>{item.note}</p>
                  <span>
                    Start Date: {item.start_date} at {item.start_time} -{" "}
                    {item.end_date} at {item.end_time}
                  </span>
                </div>
                <div className="flex">
                  <div className="flex">
                    <div className=" mr-4 p-2 border-[#007BEC] accent-[#007BEC] grid justify-end items-center ">
                      {/* <Checkbox className="w-9 h-9 p4"></Checkbox> */}
                      <input
                        className="w-5 h-5 p-2"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-span-8">
                      <EditandDelete />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndividualTodo;
