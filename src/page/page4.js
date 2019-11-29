import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

@connect(
  state => ({
    ...state.reducer,
  }),
  dispatch => ({
    testSage: () => dispatch({type: 'TEST'}),
    testBinfa: () => dispatch({type: "TEST_Concurrency"}),
  }),
)
class page4 extends Component {
  render() {
    const {inputValue, testSage,testBinfa,thunkData} = this.props;
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
            testSage();
            testBinfa();
          }}>
          <Text>点击发送并发事件</Text>
        </TouchableOpacity>

        <Text> {inputValue} </Text>

        <Text style={{marginTop:50,color:'#ff0',fontSize:18}}>
          名称是：{thunkData}
        </Text>
      </View>
    );
  }
}

export default page4;
