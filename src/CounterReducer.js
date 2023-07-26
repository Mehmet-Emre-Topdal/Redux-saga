/* eslint-disable no-unused-vars */

import { INCREMENT, DECREMENT } from "./Constants";

const INITIAL_STATE = {
    count: 0
};

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default CounterReducer;
