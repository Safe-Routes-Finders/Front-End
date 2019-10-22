import { axiosWithAuth } from "../../Components/utils/axiosWithAuth";

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
        .get("/users/getuserinfo")
        //AXIOS_SUCESS
        .then(response => {
            console.log("Get Response", response);
            dispatch({ type: AXIOS_SUCESS, payload: response.data});
        })
        //AXIOS_FAIL
        .catch(error => dispatch({ type: AXIOS_FAIL, payload: error.response}))
};

//LOGIN_POST
export const postLogin = () => dispatch => {
    dispatch({ type: LOGIN_POST });
    axiosWithAuth()
        .post("/login")
        .then(response => {
            console.log("Login Post Response", response)
            dispatch({ type: LOGIN_POST, payload: response},
            localStorage.setItem('token', response.data.payload)
            )
        })
        .catch(error => console.log("Login Error", error))
}

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