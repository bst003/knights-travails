import { pubsub } from "./pubsub";

export const board = (() => {
    // Private variables/functions

    // Public variables/functions

    const boardArray = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];

    const boardFunc = () => {
        console.log("board func");
        console.log("anote test");
    };

    const checkValidBasePos = (data) => {
        if (!data.start || !data.end) {
            console.error("data must have start and end keys");
            return false;
        }

        const startPos = data.start;
        const startPosX = startPos[0];
        const startPosY = startPos[1];

        const endPos = data.end;
        const endPosX = endPos[0];
        const endPosY = endPos[1];

        if (
            boardArray[startPosX] === undefined ||
            boardArray[startPosY] === undefined
        ) {
            console.error("the start value does not exists on the board");
            return false;
        }

        if (
            boardArray[endPosX] === undefined ||
            boardArray[endPosY] === undefined
        ) {
            console.error("the end value does not exists on the board");
            return false;
        }

        return true;
    };

    const checkMovesValid = (moves) => {
        const moveData = moves;
        console.log("checking singe move");

        Object.entries(moveData).forEach(([key, value]) => {
            if (
                boardArray[value[0]] === undefined ||
                boardArray[value[1]] === undefined
            ) {
                moveData[key] = null;
            }
        });

        return moveData;
        // pubsub.publish("postCheckMoveData", newData);
    };

    // const altTest = (value) => value.toUpperCase();

    // Pubsubs
    // pubsub.subscribe("pageLoad", boardFunc);

    // pubsub.subscribe("checkBaseData", checkBasePos);

    // pubsub.subscribe("checkMoveData", checkMovePos);

    // pubsub.subscribe("testStuff", altTest);

    return {
        checkValidBasePos,
        checkMovesValid,
    };
})();

export default { board };
