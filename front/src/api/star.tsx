import axios from "axios";

export const applyHost = () => {
  axios.post("/back/streaming/apply_host", {
    artist_id: 56,
    sns: ["INSTAGRAM"],
    indtroduction: "hello",
    email: "test@email.com"
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    });
};