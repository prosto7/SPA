import React, {Component} from "react";
import Board from "./Board"

class MainTicTacToe extends Component {
    render() {
        return (
            <div className="main_title">
                <h2>Крестики-Нолики</h2>
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