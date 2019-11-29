import { combineReducers } from 'redux';
import reducer from './reducer';

//combineReducers辅助函数的作用是，把一个由多个不同 reducer 函作为 value 的 object，合并成一个最终的 reducer 函数
//，然后就可以对这个 reducer 调用 createStore
const rootReducer = combineReducers({
    reducer,
  });
  
export default rootReducer;