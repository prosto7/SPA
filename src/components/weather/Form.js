import React, {Component} from "react";

class Form extends Component {
    render() {
        return (
            <div className="container">
            <form className="weather_form" action="" onSubmit={this.props.weatherMethod}>
                <input className="city" type="text" name="city" placeholder="  Введите город"/>
                <select className="country" name = "country" >
                    <option value=""></option>
                    <option value="ru">Russia</option>
                    <option value="us">США</option>
                    <option value="uk">Англия</option>
                    <option value="fr">Франция</option>
                </select>
                <button>Узнать погоду</button>
            </form>
            </div>
        )
    }
}

export default Form;