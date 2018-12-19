import 'flatpickr/dist/themes/material_green.css'

import React, { Component } from 'react'
import { render } from 'react-dom'

import Flatpickr from '../lib/index.js'

class App extends Component {
  state = {
    value: ''
  }

  render() {
    const { date } = this.state
    return (
      <main>
        <Flatpickr
          className='test'
          value={date}
          onChange={(_, str) =>
            this.setState({
              date: str
            })
          }
          onInput={val => this.setState({ val })}
          options={{
            allowInput: true
          }}
        />
      </main>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
