const defaultState = {inputValue: ''};

const reducer = (state = defaultState, actions) => {
  console.log('actions', actions);
  switch (actions.type) {
    case 'CHANGE_VALUE':
      return {...state, inputValue: actions.data};
    case 'success':
      return {...state, inputValue: actions.data};
    case 'ERRO':
      return {...state, inputValue: actions.data};
    case 'thunk_SUCCESS':
      return {...state, thunkData: actions.data};

    case 'thunk_FAIL':
      return {...state, thunkData: actions.data};
    default:
      return state;
  }

  // if (actions.type === 'CHANGE_VALUE') {
  //   // let newState = JSON.parse(JSON.stringify(state));
  //   // newState.inputValue = actions.data;
  //   return {...state,inputValue:actions.data};
  // }
  // return state;
};

export default reducer;
