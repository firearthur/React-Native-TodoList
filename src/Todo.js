import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const JSON_SERVER = 'http://172.16.0.12:3000/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding: 20,
    marginTop: 20,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 60,
  },

  todo: {
    fontSize: 24,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
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

  componentDidMount() {
    fetch(JSON_SERVER, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }
  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handleTouch() {
    // this.setState({ todos: [this.state.newTodo, ...this.state.todos], newTodo: '' });
    // this.todoInput.blur();
    fetch(JSON_SERVER, {

      method: 'POST',
      body: JSON.stringify({
        name: this.state.newTodo,
      }),
      headers: {
        'Accept': 'application/json',
      },
    }).then(res => res.json())
      .then((data) => {
        this.setState(prevState => ({
          todos: [...prevState.todos, data],
          newTodo: '',
        }));
      });
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
        <View style={styles.todos}>
          {this.state.todos.map(todo => <Text style={styles.todo} key={todo} >{todo.name}</Text>)}
        </View>
      </View>
    );
  }
}
