import { axiosWithAuth } from "../../Components/utils/axiosWithAuth";
import axios from "axios";

export const AXIOS_START = 'AXIOS_START';
export const AXIOS_SUCESS = 'AXIOS_SUCESS';
export const AXIOS_FAIL = 'AXIOS_FAIL';
export const AXIOS_POST = 'AXIOS_POST';
export const LOGIN_POST = "LOGIN_POST";
// export const AXIOS_PUT = 'AXIOS_PUT';
// export const AXIOS_DELETE = 'AXIOS_DELETE';

export const fetchUser = () => dispatch => {
    //AXIOS_START
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .get("/users")
        //AXIOS_SUCESS
        .then(response => {
            console.log("Get Response", response);
            dispatch({ type: AXIOS_SUCESS, payload: response.data});
        })
        //AXIOS_FAIL
        .catch(error => dispatch({ type: AXIOS_FAIL, payload: error.response}))
};

//AXIOS_POST
export const postUser = () => dispatch => {
    dispatch({ type: AXIOS_POST });
    axiosWithAuth()  
        .post("/users/user")
        .then(response => dispatch({ type: AXIOS_POST, payload: response.data}))
        .catch(error => {
            console.log(error)
        })
}

//LOGIN_POST
export const postLogin = (obj,props) => dispatch => {
    dispatch({ type: LOGIN_POST });
    axios
        .post(`https://detman-saferoutes.herokuapp.com/login`, `grant_type=password&username=${obj.username}&password=${obj.password}`,{
            headers: {
              // btoa is converting our client id/client secret into base64
              Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
        .then(response => {
            console.log("Login Post Response", response)
            dispatch({ type: LOGIN_POST, payload: response.data.access_token},
            localStorage.setItem('token', response.data.access_token)
            );
            props.history.push('/map')
            // browserHistory.push('/map')

            // response.history.push("/map")
        })
        .catch(error => console.log("Login Error", error))
}



//AXIOS_DELETE

// const deleteFriend = id => {
//     axiosWithAuth()
//     .delete(`/api/friends/${id}`)
//     .then(response => {
//         console.log("Delete Response", response)
//         //Updates rendered data to show that friend was deleted
//         //Try on add!
//         setFriends(response.data);
//     })
// }



//AXIOS_PUT