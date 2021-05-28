import React, {Component} from "react";

class WeatherController extends Component {
    render() {
        return (
            <div>
              <h1>{this.props.city}</h1>
                <h2>{this.props.main}</h2>
                <img src={this.props.iconUrl} alt={this.props.alt}/>
                <h3>Температура: {this.props.temp} C</h3>
                <br></br>
                <hr/>
                <br />
                <div className="info_block">
                <p>Город: {this.props.city}</p>
                <p>Страна: {this.props.country}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Скорость ветра: {this.props.wind}</p>
                <p>Восход солнца: {this.props.sunrise}</p>
                <p>Закат: {this.props.sunset}</p>
            </div>
            </div>
        )
    }
}

export default WeatherController;