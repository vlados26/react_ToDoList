import React from 'react';
import styles from './css/todoItem.css';

//Create TodoItem component
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <button className="item-delete" onClick={this.handleDelete.bind(this)}> x </button>
        </div>
      </li>
    )
  }

  handleDelete() {
    this.props.onDelete(this.props.item)
  }
}

module.exports = TodoItem