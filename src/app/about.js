import React from 'react'
import {Link} from 'react-router-dom'

class About extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav">
            <li><Link to={'/'}>Home</Link></li>
          </ul>
        </nav>
        <h2>All about me</h2>
      </div>
    )
  }
}

module.exports = About