import React, {Component} from "react";

class Form extends Component {
    render() {
        return (
            <form action="" onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Введите город"/>
                <select name = "country">
                    <option value=""></option>
                    <option value="ru">Russia</option>
                    <option value="us">США</option>
                    <option value="uk">Англия</option>
                    <option value="fr">Франция</option>
                </select>
                <button>Узнать погоду</button>
            </form>
        )
    }
}

export default Form;