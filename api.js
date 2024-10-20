import axios from 'axios';

export default {
getData: ()=>
axios({method: "GET", url: "http://localhost:3000/user"}),
};


const getUsers = async () => {
    try {
      const res = await axios.get({method: "GET", url: "http://localhost:3000/user" });
      const users = res.data;
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  getUsers();