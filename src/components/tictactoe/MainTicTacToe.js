import React, {Component} from "react";
import Board from "./Board"

class MainTicTacToe extends Component {
    render() {
        return (
            <div>
                <h1>Крестики-Нолики</h1>
                <div className={"game-board"}>
                    <Board />
                </div>
                <div className={"game-info"}>

                </div>
            </div>
        )
    }
}

export default MainTicTacToe;