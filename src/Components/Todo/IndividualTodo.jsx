import React from "react";
import useBearStore, { handleCompleteTask } from "../../Services/Api/TodoApi";
import AddNewTodoBtn from "../Button/AddNewTodoBtn";
import EditandDelete from "../Icons/EditandDelete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { todoConpletedtoast } from "../../Services/toastNotification/toast";
import { Dna } from "react-loader-spinner";

const IndividualTodo = () => {
  const { todos, load } = useBearStore();

  let date = new Date();
  console.log(date);

  let todayData = date.getDate();
  let timeNow = date.getHours();
  console.log(todayData);
  console.log(timeNow);

  return (
    <div className="">
      <AddNewTodoBtn />
      {load ? (
        <div className="flex justify-center items-center">
          <Dna
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="mt-6 mb-6">
          {Array.from(todos).map((item) => {
            return (
              <div key={item.id} className="mb-[12px]">
                <div className=" flex gap-4 space-x-20 p-[13px] border rounded-[10px]">
                  <div className=" w-3/4 flex flex-col items-start text-left">
                    <h1
                      className={
                        item.is_completed ? " crossline text-lg" : "text-lg"
                      }
                    >
                      {item.title}
                    </h1>
                    <p>{item.note}</p>
                    <span>
                      Start Date: {moment(item.start_date).format("DD-MM-YYYY")}{" "}
                      at {moment(item.start_time, "hh:mm:ss").format("hh:mm A")}{" "}
                      - {moment(item.end_date).format("DD-MM-YYYY")} at{" "}
                      {moment(item.end_time, "hh:mm:ss").format("hh:mm A")}
                    </span>
                  </div>

                  <div className="flex justify end w-auto">
                    <div className="p-2 flex border-[#007BEC] accent-[#007BEC] justify-end  items-center ">
                      {/* <Checkbox className="w-9 h-9 p4"></Checkbox> */}
                      <div className="mr-4">
                        {item.is_completed ? (
                          <input type="hidden" className="mr-4 w-3"></input>
                        ) : (
                          <input
                            onClick={() => {
                              handleCompleteTask(item.id);
                              todoConpletedtoast();
                            }}
                            className="w-5 h-5 mr-4"
                            type="checkbox"
                            name=""
                            id=""
                          />
                        )}
                      </div>
                      <EditandDelete item={item} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default IndividualTodo;
