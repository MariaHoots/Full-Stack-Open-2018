import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <p>{props.kurssi}</p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa} {props.tehtavia}</p>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
      <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
      <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <h1><Otsikko kurssi={kurssi} /></h1>
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
