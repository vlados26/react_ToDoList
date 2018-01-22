import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import styles from './css/index.css';

//Import modules
import TodoItem from './todoItem'
import AddItem from './addItem'
import About from './about'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={TodoComponent}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    )
  }
}

//Create component
class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
    }
    this.onDelete = this.onDelete.bind(this)
    this.onAdd = this.onAdd.bind(this)
  }
  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      )
    })
    return (
      <div id="todo-list">
        <nav>
          <ul className="nav">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
        <p>List of different todos:</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    )
  }

  //Custom functions
  onDelete(item) {
    var updatedTodos = this.state.todos.filter((val, index) => { return item !== val })
    this.setState({
       todos: updatedTodos
    })
  }

  onAdd(item) {
    var updatedTodos = this.state.todos
    updatedTodos.push(item)
    this.setState({
       todos: updatedTodos
    })
  }

}

//Put component into html page
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('todo-wrapper')
)


