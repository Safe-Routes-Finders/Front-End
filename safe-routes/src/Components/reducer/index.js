import { AXIOS_START, AXIOS_SUCESS, AXIOS_FAIL, AXIOS_POST, LOGIN_POST } from "../actions/"

const initialState = {
    routeData: [],
    isFetching: false,
    error: '',
    token:""
};

// const formValues = {
//     formData: [],
//     error: ''
// }

const reducer = (state = initialState, action) => {
    switch(action.type){
        case AXIOS_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
        case AXIOS_SUCESS:
            return{
                ...state,
                isFetching: false,
                error: '',
                routeData: action.payload
            }
        case AXIOS_FAIL:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            };
        case AXIOS_POST:
            return{
                ...state,
                error: ''
            }
        case LOGIN_POST:
            return{
                ...state,
                error: action.payload,
                token: action.payload               
            }
        default:
            return state;
    }
}

export default reducer;