import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = { color: 'purple' }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicked!!!!')
  }

  render() {
    return (
      <div className='Box' style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
        <h1>Box Component</h1>
      </div>
    )
  }
}

export default Box
