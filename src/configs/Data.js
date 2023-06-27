import axios from "axios";

const dataValues = await axios({
  url: "https://panorbit.in/api/users.json",
  method: "get",
});
const { data } = dataValues;
const { users } = data;

const allUserId = users.map((user) => user.id);

localStorage.setItem("Ids", JSON.stringify(allUserId));
export default users;
