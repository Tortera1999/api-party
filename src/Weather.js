import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './Weather.css'
import WeatherPlace from './WeatherPlace'

class Weather extends Component {
  state = {
      city: '',
  }

  handleChange = (ev) => {
    this.setState({city: ev.target.value})
  }

  handleSubmit = (ev) => {
      ev.preventDefault();
      this.props.history.push(`/weather/${this.state.city}`)
      this.setState({city: ''})
  }
  render() {
    return (
      <div className="Weather">
        <img
          className="logo"
          src="https://3.bp.blogspot.com/-Xr-mQztrigA/Whr4z2qGQqI/AAAAAAAADN4/BquTYOtQj48PCkEu6ZpqG_ySnm0N3JBxwCLcBGAs/s1600/weather1.gif"
          alt="Weather"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.city} onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">Look up the weather for a place</button>
          </div>
        </form>
        <Route path="/weather/:city" component={WeatherPlace}/>
        <Route exact path="/weather" render={() => <h3>Please enter the name of a place</h3>}/>
      </div>
    )
  }
}

export default Weather