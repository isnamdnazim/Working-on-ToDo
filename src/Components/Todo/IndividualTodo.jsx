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
              <div className="grid grid-cols-4 mb-5   p-[13px] border rounded-[10px]">
                <div className="col-span-3 flex flex-col items-start">
                  <h1 className="text-lg">{item.title}</h1>
                  <p>{item.note}</p>
                  <span>
                    Start Date: {item.start_date} at {item.start_time} -{" "}
                    {item.end_date} at {item.end_time}
                  </span>
                </div>
                <div className="col-span-1 grid items-center justify-around">
                  <div className="grid grid-cols-12">
                    <div className="col-span-4 mr-4 border-[#007BEC] accent-[#007BEC] grid items-center ">
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
