import React from 'react';
import styles from './css/addItem.css'

class AddItem extends React.Component {
  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" required ref="newItem"/>
        <input type="submit" value="Hit me"/>
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value)
    this.refs.newItem.value = ''
  }
}

module.exports = AddItem