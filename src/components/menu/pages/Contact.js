import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <div className="container main_title">

                <h2>Мои контакты</h2>
                <br />
                <p>Храпов Роман</p>
                <br />
                <p>Web developer</p>
                <a href="https://github.com/soft-lab-web/">https://github.com/soft-lab-web/</a>
                <br />   <br />
                <a className="telegram" href="@prost_roma">Telegram: prost_roma</a>
            </div>
        )
    }
}

export default Contact;