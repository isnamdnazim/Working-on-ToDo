export const base_url = "http://task.atiar.info/api/todo";
export const add_todo = base_url + "/create";
export const update_todo = base_url + "/update";
export const delete_todo = base_url + "/delete";
export const complete_todo = base_url + "/complete";

export const disablePastDate = () => {
  let today, dd, mm, yyyy;
  today = new Date();
  dd = today.getDate();
  mm = today.getMonth() + 1;
  yyyy = today.getFullYear() + 1;
  return yyyy + "-" + mm + "-" + dd;
  //return mm + "-" + dd + "-" + yyyy;
};

// export const disableTime = () =>{
//   let time, hh, mm;
//   time = new Date();
//   hh =

// }
