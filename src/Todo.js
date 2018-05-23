import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    borderTop: 10,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
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
        <View style={styles.form}>
          <TextInput style={styles.input} ref={input => (this.todoInput = input)} value={this.state.newTodo} onChangeText={this.handleChange} />
          <TouchableOpacity style={styles.button} onPress={this.handleTouch}>
            <Text style={styles.buttonText}>Tap</Text>
          </TouchableOpacity>
        </View>
        {this.state.todos.map(todo => <Text key={todo} >{todo}</Text>)}
      </View>
    );
  }
}
