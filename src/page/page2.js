import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';

@connect(
  state => ({
    ...state.reducer,
  }),
  dispatch => ({
    changeTextValue: newText => dispatch({type: 'CHANGE_VALUE', data: newText}),
  }),
)
class Page2 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const {changeTextValue, inputValue} = this.props;
    console.log('this.props', this.props);
    return (
      <View style={{flex: 1}}>
        <Text> 这是 page2 </Text>

        <TouchableOpacity
          style={{
            width: 200,
            height: 100,
            backgroundColor: '#ef0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            navigate('Page3');
          }}>
          <Text>走去page3</Text>
        </TouchableOpacity>

        <TextInput
          style={{height: 50, width: '100%', backgroundColor: '#44ffffff'}}
          onChangeText={text => {
            changeTextValue(text);
          }}></TextInput>

        <Text> {inputValue} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

// const stateToprops = state => {
//   return {
//     inputValue: state.inputValue,
//   };
// };

// const distpatchToprops = dispatch => {
//   return {
//     changeTextValue(newText) {
//       let actions = {type: 'CHANGE_VALUE', data: newText};
//       dispatch(actions);
//     },
//   };
// };

//export default connect(stateToprops, distpatchToprops)(page2);
export default Page2;
