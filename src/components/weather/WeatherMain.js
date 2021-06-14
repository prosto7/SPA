import React, {Component} from "react";
import WeatherController from "./WeatherController";
import Info from "./Info";
import Form from "./Form";

const API_KEY = '2d95aa5d7d700b669673f00687181a27';

class WeatherMain extends Component {
    state = {
        main: null,
        // iconUrl: null,
        alt: null,
        wind: null,
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        error: null,
       
    }
    //http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2d95aa5d7d700b669673f00687181a27
    // Promise(промис/обещание) - объект, представляющий окончательное завершение или сбойасинхронного запроса. Промис возвращает объект, к которому прикрепляется колбэк.
    gettingWeather = async (event) => {
        event.preventDefault(); // отменяет обновление страницы
        const city = event.target.elements.city.value; //получаем значение введенного в поле формы с name='city'
        const country = event.target.elements.country.value;

        // выполняем асинронный запрос по Url через функцию fetch
        const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        console.log(apiUrl);  // при успешном выполнении получаем статус ответа от сервера 200, т.е. все ОК
        const data = await apiUrl.json(); // считываем данные
        console.log(data); // полные данные по городу
        //console.log(data.city.population); // узнать сколько людей в городе
        
        try {
            let sunrise =data.sys.sunrise;
            let sunset = data.sys.sunset;
            let timezone = data.timezone;

            let date = new Date();
            date.setTime(sunrise * 1000 - timezone);
            let sunriseDate = date.toLocaleString();

            // data.setTime(sunset * 1000 -timezone);
            // let sunsetDate = date.ToLocaleTimeString();

            let icon = data.weather[0].icon;

            this.setState({
                main: data.weather[0].main,
                iconUrl: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                alt: data.weather.description,
                temp: (data.main.temp -273.15).toFixed(2),
                wind: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                // sunset: null,
                // sunrise:null,
            });
        } catch (error) {
            alert(`error.message`);
            console.log(error);
        }
        // setState = позволяет установить новое значение в state и как толкьо это произойдет наш компонент будет перерисован с новыми данными

    }


    render() {
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather}/>
                <WeatherController 
                main={this.state.main}
                iconUrl={this.state.iconUrl}
                alt={this.state.alt}
                wind={this.state.wind}
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.sunrise}
                sunset={this.sunset}
                />
            </div>
        )
    }
}

export default WeatherMain;