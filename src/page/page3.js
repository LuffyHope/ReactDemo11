import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

class page3 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {inputValue,testThunk} = this.props;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 40,
            backgroundColor: '#ff0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            testThunk();
          }}>
          <Text>点击发送thunk事件</Text>
        </TouchableOpacity>
        <Text> {inputValue} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const stateToprops = state => {
  return {
    inputValue: state.reducer.thunkData,
  };
};

const distpatchToprops = dispatch => {
  return {
    changeTextValue(newText) {
      let actions = {type: 'CHANGE_VALUE', data: newText};
      dispatch(actions);
    },

    testThunk(){
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({type: 'thunk_SUCCESS', data: response.data[0].name});
      })
      .catch(error => {
        dispatch({type: 'thunk_FAIL', data: error});
      });
    },
  };
};

export default connect(stateToprops, distpatchToprops)(page3);
