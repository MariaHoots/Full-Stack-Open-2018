import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  render() {
    const setGood = () => () => {
      this.setState({ good: this.state.good + 1  })
    }
    const setNeutral = () => () => {
      this.setState({ neutral: this.state.neutral + 1  })
    }
    const setBad = () => () => {
      this.setState({ bad: this.state.bad + 1  })
    }

    return (
      <div>
        <h2>Anna palautetta</h2>
          <button onClick={setGood()}>hyvä</button>
          <button onClick={setNeutral()}>neutraali</button>
          <button onClick={setBad()}>huono</button>
        <h2>Statistiikka</h2>
          <p>hyvä {this.state.good}</p>
          <p>neutraali {this.state.neutral}</p>
          <p>huono {this.state.bad}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
