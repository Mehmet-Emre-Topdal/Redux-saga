/* eslint-disable no-unused-vars */

import {call, put, takeEvery} from 'redux-saga/effects'

import axios from 'axios';
import { failed, success } from './actions';

async function fetchTodo(id) {

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id);
    const todo = response.data.title;
    return todo;
  } catch (error) {
    return error.message;
  }
}

//worker saga: will be fired on  actions
function* fetchTodoSaga(action) {
    try {
        const response = yield call(fetchTodo, action.payload.id);
        yield put(success(response));
    } catch (error) {
        console.log(error)
        yield put(failed(error.message));
    }
}

//watcher saga: watches for actions dispatched to the store, starts worker saga
function* todoSaga() {
    yield takeEvery("START_FETCHING", fetchTodoSaga);
}

export default todoSaga;