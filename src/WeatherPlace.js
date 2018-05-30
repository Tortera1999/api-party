import React, { Component } from 'react'

class WeatherPlace extends Component {
  constructor(props) {
    super(props)

    

    this.state = {
      weathers: {
          main: {
              temp_max: null,
              temp_min: null
          },
          sys: {
              country: null,
          },
          weather: [{description: null, icon: null}]
      },
    }

    this.fetchUserData(this.props)
    
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }


  fetchUserData = (props) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.city}&appid=de6fd5d09cbc62b40fc1814a1e49ad42`)
      .then(response => response.json())
      .then(weathers => this.setState({weathers}))
      .catch((() => console.log(props.match.params.city)))
  }

  render() {
    const { weathers } = this.state
    const url = "http://openweathermap.org/img/w/" + weathers.weather[0].icon + ".png" 

    return (
      <div className="WeatherPlace">
        <img src={url} alt="yo" />
        <h2>{weathers.name}'s weather:</h2>
        <h3>Country: {weathers.sys.country}</h3>
        <h3>High Temp: {weathers.main.temp_max}</h3>
        <h3>Low Temp: {weathers.main.temp_min}</h3>
        <h3>Description: {weathers.weather[0].description}</h3>
      </div>
    )
  }
}
export default WeatherPlace