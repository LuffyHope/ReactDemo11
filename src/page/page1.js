import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class page1 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.contain}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>PAGE1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {navigate('Page2')}}>
          <Text>PAGE2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {navigate('Page3')}}>
          <Text>PAGE3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {navigate('Page4')}}>
          <Text>PAGE4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {flex: 1, alignItems: 'center', justifyContent: 'space-evenly'},
  button: {
    height: 50,
    width: 100,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
