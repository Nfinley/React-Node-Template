import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    response: '',
  }
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      fetching: true,
    }
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`)
        }
        return response.json()
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false,
        })
      })
      .catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the CFC Interview</h2>
          <p className="App-intro">
            {this.state.fetching
              ? 'Fetching message from API'
              : this.state.message}
          </p>
        </div>
      </div>
    )
  }
}

export default App
