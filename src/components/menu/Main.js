import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stuff from "./pages/Stuff";
import WeatherMain from "../weather/WeatherMain";
import MainTicTacToe from "../tictactoe/MainTicTacToe";
import Hook from "../hooks/Hook.js"
import Todo from "../Todo/Todo"
import mainApi from "../crypto/MainApi"


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className={"header"}>
                        <li><NavLink to={"/home"} exact>Home</NavLink></li>
                        <li><NavLink to={"/stuff"}>Stuff</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                        <li><NavLink to={"/weather"}>Weather</NavLink></li>
                        <li><NavLink to={"/tictactoe"}>TicTacToe</NavLink></li>
                        <li><NavLink to={"/hook"}>Hook button</NavLink></li>
                        <li><NavLink to={"/todo"}>Todo</NavLink></li>
                        <li><NavLink to={"/crypto"}>CryptoCurrency</NavLink></li>
                    </ul>
                    <div className={"content"}>
                        <Route path={"/home"} component={Home} />
                        <Route path={"/stuff"} component={Stuff} />
                        <Route path={"/contact"} component={Contact} />
                        <Route path={"/weather"} component={WeatherMain} />
                        <Route path={"/tictactoe"} component={MainTicTacToe} />
                        <Route path={"/hook"} component={Hook} />
                        <Route path={"/todo"} component={Todo} />
                        <Route path={"/crypto"} component={mainApi} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;