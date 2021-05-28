import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="main_header">Домашняя страница</h2>
                <p className="main_title">Добро пожаловать! <br></br>SPA приложение с небольшим функционалом,
                в виде счетчика кликов, списка todo, игры крестики-нолики, информации о погоде в вашем городе и курсом криптовалют. </p>
            </div>
        )
    }
}

export default Home;