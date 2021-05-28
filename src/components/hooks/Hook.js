import React, {Component, useState} from "react";
// class Hook extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h3>вы кликнули: {this.state.count}</h3>
//                 <button onClick={() => {this.setState({
//                     count: this.state.count + 1
//                 })}}>Тыкай</button>
//             </div>
//         )
//     }
// }
// тот же пример с хуком
function Hook() {
    const[count, setCount] = useState(0);
    return (
            <div className="counter">
                <h1>Counter:</h1>
                <h3>Вы кликнули: <span className="counter_pick">{count}</span></h3>
                <br />
                <button onClick={() => {setCount(count + 1)}}>Клик</button>
            </div>
        )
    }
export default Hook;