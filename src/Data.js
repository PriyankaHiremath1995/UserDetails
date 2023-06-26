import axios from "axios";

// const Data = async () => {
const dataValues = await axios({
  url: "https://panorbit.in/api/users.json",
  method: "get",
});
const { data } = dataValues;
const { users } = data;

//   return users;
// };

export default users;
