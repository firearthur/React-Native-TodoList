import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    // console.warn(JSON.stringify(this.state, null, 2));
  }

  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handleTouch() {
    this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' });
    this.todoInput.blur();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => <Text key={todo} >{todo}</Text>)}
        <TextInput ref={input => (this.todoInput = input)} value={this.state.newTodo} onChangeText={this.handleChange} />
        <TouchableOpacity onPress={this.handleTouch}>
          <Text>Tap me </Text>
        </TouchableOpacity>
      </View>
    );
  }
}