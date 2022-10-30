import React, { useEffect, useState } from "react";
import useBearStore, { handleCompleteTask } from "../../Services/Api/TodoApi";
import AddNewTodoBtn from "../Button/AddNewTodoBtn";
import EditandDelete from "../Icons/EditandDelete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import {
  errorToast,
  successToast,
  todoConpletedtoast,
  todoendtoast,
  todostart,
  todostarttoast,
  warningToast,
} from "../../Services/toastNotification/toast";
import { Dna } from "react-loader-spinner";

const IndividualTodo = () => {
  const { todos, load } = useBearStore();
  const { completeTodo } = useBearStore();
  const { id, SetId } = useState();

  const checkTodo = async () => {
    const completed = todos.filter((item) => {
      return item?.is_completed != 1;
    });
    const data = completed?.map((item) => {
      var start = new Date(item?.start_date + " " + item?.start_time);
      return {
        title: item?.title,
        time: start,
      };
    });
    data?.forEach((item) => {
      if (item?.time < new Date()) {
        warningToast(`It's time to start ${item?.title}`);
      }
    });
  };

  const timeOver = async () => {
    const checkTime = todos?.map((item) => {
      var end = new Date(item?.end_date + " " + item?.end_time);
      return {
        id: item?.id,
        time: end,
      };
    });

    var test = [];
    console.log("test", test);
    await checkTime?.forEach((item) => {
      if (item?.time < new Date()) {
        test.push(item?.id);
      }
    });

    if (test.length > 0) {
      for (let i = 0; i <= test.length; i++) {
        console.log("i", test[i]);
        if (test[i] != undefined) {
          //  handleCompleteTask(test[i]);
        }
      }
    }
  };

  // const taskStartEnd = () => {
  //   //console.log("af");
  //   todos.forEach((element) => {
  //     var start = new Date(element.start_date + " " + element.start_time);
  //     var end = new Date(element.end_date + " " + element.end_time);
  //     //console.log(start + " " + end);

  //     //console.log(start + "" + end);
  //     if (start <= new Date() && !element.is_completed) {
  //       console.log(element.title);
  //     }
  //     if (start <= new Date() && element.is_completed == false) {
  //       const title = `You need to start the task ${element.title}`;
  //       todostarttoast(title);
  //       //console.log(title);
  //     }
  //     if (end < new Date() && element.is_completed) {
  //       const title = `Your Task is Completed ${element.title}`;
  //       console.log(title);
  //       //todoendtoast(title);
  //       //console.log(title);
  //     }
  //
  //   });
  // };
  useEffect(() => {
    checkTodo();
    timeOver();
  }, [checkTodo]);

  return (
    <div className="">
      <AddNewTodoBtn />
      {load ? (
        <div className="flex justify-center items-center">
          <Dna
            visible={true}
            height="80vh"
            width="10vw"
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
                <input type="hidden" value={item.id}></input>
                <div className=" flex gap-4 space-x-20 p-[13px] border rounded-[10px]">
                  <div className=" w-3/4 flex flex-col items-start text-left">
                    <h1
                      className={
                        item.is_completed ? "crossline text-lg" : "text-lg"
                      }
                    >
                      {item.title}
                    </h1>
                    <p>{item.note}</p>
                    <span>
                      Start Date:{" "}
                      {moment(item.start_date).format("MMMM Do YYYY")} at{" "}
                      {moment(item.start_time, "hh:mm:ss").format("hh:mm A")} -{" "}
                      {moment(item.end_date).format("MMMM Do YYYY")} at{" "}
                      {moment(item.end_time, "hh:mm:ss").format("hh:mm A")}
                    </span>
                  </div>

                  <div className="flex justify end w-auto">
                    <div className="p-2 flex border-[#007BEC] accent-[#007BEC] justify-end  items-center ">
                      {/* <Checkbox className="w-9 h-9 p4"></Checkbox> */}
                      <div className="mr-4">
                        {item.is_completed ? (
                          <input
                            hidden
                            type="checkbox"
                            defaultChecked={true}
                            className="mr-4 w-5 h-5"
                          ></input>
                        ) : (
                          <input
                            onClick={() => {
                              handleCompleteTask(item.id);
                              todoConpletedtoast();
                            }}
                            className="w-5 h-5 mr-4 "
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
