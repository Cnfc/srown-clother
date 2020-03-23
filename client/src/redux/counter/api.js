import axios from "axios";

export const createCourse = (name, price) => {
  return postData("/courses", {
    name,
    price
  });
};

function postData(url = ``, data = {}) {
  return axios.post(url, data);
  // return fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // }).then(res => res.json());
}

export const getCourses = () => {
  return axios.get("/courses").then(res => res.data);
};
