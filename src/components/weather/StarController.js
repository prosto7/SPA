import React, {Component} from "react";

class WeatherController extends Component {
    render() {
        return (
            <div className="container">
                <h3>{this.props.main}</h3>
                <img src={this.props.iconUrl} alt={this.props.alt}/>
                <hr/>
                <p>город: {this.props.city}</p>
                <p>страна: {this.props.country}</p>
                <p>Температура: {this.props.temp}</p>
                <p>скорость ветра: {this.props.wind}</p>
                <p>восход солнца: {this.props.sunrise}</p>
                <p>закат: {this.props.sunset}</p>
            </div>
        )
    }
}

export default WeatherController;