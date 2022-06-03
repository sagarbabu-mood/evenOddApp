import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  updateCount = () => {
    const a = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + a}))
  }

  render() {
    const {number} = this.state
    const text = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="number">Count {number}</h1>
          <p className="number-type">Count is {text}</p>
          <button className="button" type="button" onClick={this.updateCount}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
