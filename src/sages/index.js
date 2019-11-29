import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* showPostsAsync(params) {
  //这里的params 为'TEST'对应的整个actions
  //比如actions为 {"params": {"h": "dsfs", "tag": "df"}, "type": "TEST"}
  //那么对应的params 为 整个actions对象而不是 actions对象里面对应的params   重点。
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/posts',
    );
    console.log('params', params);
    yield put({type: 'success', data: response.data[0].body});
  } catch (e) {
    yield put({type: 'ERRO', data: e});
  }
}

function* testConcurrencyAsync(params) {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log('params', params);
    yield put({type: 'thunk_SUCCESS', data: response.data[0].name});
  } catch (e) {
    yield put({type: 'thunk_FAIL', data: e});
  }
}

export default function* rootSaga() {
  //这里启动和监听一步写好，不要拆开否则只会运行第一个。之后不再往下运行。
  //这里的TEST是page4.js中发送的TEST actions showPostsAsync为接到活动所需要执行的任务
  yield takeLatest('TEST', showPostsAsync);
  yield takeLatest('TEST_Concurrency', testConcurrencyAsync);
}
