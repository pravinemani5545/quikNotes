import React, { useState } from "react";
import "@asseinfo/react-kanban/dist/styles.css";
import Board, { moveCard, addCard, addColumn, } from '@asseinfo/react-kanban';

import "./styles.css";

const board = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [

            ]
        },
        {
            id: 2,
            title: "Doing",
            cards: [

            ]
        },
        {
            id: 3,
            title: "Q&A",
            cards: [

            ]
        },

    ]
};



// function ControlledBoard() {
//     // You need to control the state yourself.
//     const [controlledBoard, setBoard] = useState(board);

//     function handleCardMove(_card, source, destination) {
//         const updatedBoard = moveCard(controlledBoard, source, destination);
//         setBoard(updatedBoard);
//     }

//     function handleColumnNew(_board, inColumn, card, destination) {
//         const updatedBoard = addCard(_board, inColumn, card, destination);
//         setBoard(updatedBoard);
//     }

//     return (
//         <Board onCardDragEnd={handleCardMove}
//             allowAddCard={{ on: "top" }}
//             allowAddColumn={{ on: "right" }}
//             onNewColumnConfirm={handleColumnNew}
//             onColumnNew={console.log}>
//             {controlledBoard}
//         </Board>
//     );
// }

function UncontrolledBoard() {
    return (
        <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
                id: new Date().getTime(),
                ...draftCard
            })}
            onCardNew={console.log}
        />
    );
}

export default function Kanban() {
    return (
        <>
            <UncontrolledBoard />
            {/* <ControlledBoard /> */}
        </>
    );
}