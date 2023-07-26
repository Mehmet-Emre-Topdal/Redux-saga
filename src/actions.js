import { INCREMENT, DECREMENT, START_FETCHING, SUCCESS, FAILED } from "./Constants";

export const increment = () => {
    return {
        type: INCREMENT,
    };
}

export const decrement = () => {
    return {
        type: DECREMENT,
    };
}   

export const startFetching = (id) => {
    return {
        type: START_FETCHING,
        payload:{id},
    };
}

export const success = (data) => {
    return {
        type: SUCCESS,
        payload:{data},
    };
}

export const failed = (error) => {
    return {
        type: FAILED,
        payload:{error},
    };
}