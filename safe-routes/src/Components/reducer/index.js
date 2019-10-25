import { 
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAIL,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL, 
    AXIOS_POST,
    FETCH_ALL_USERS,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAIL, 
    LOGIN_POST, 
} from "../actions/"

const initialState = {
    routeData: [],
    userDelete: [],
    allUsers: [],
    isFetching: false,
    error: '',
    token:"",
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: '',
                routeData: action.payload
            }
        case FETCH_USER_FAIL:
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
        case DELETE_USER_START:
            return{
                ...state,
                userDelete: action.payload
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                userDelete: action.payload
            }    
        case DELETE_USER_FAIL:
            return{
                ...state,
                error: '',
                userDelete: action.payload
            }
        case FETCH_ALL_USERS:
            return{
                ...state,
                isFetching: action.payload
            }
        case FETCH_ALL_SUCCESS:
            return{
                ...state,
                allUsers: action.payload
            }            
        case FETCH_ALL_FAIL:
            return{
                ...state,
                allUsers: action.payload
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