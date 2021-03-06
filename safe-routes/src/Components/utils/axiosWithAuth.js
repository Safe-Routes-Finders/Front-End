import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    //return a new instance of axios
    return axios.create({
        //Change to new baseURL from server
        baseURL: 'https://detman-saferoutes.herokuapp.com',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    };

