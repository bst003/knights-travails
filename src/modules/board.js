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

    const checkValidBasePos = (data) => {
        if (!data.start || !data.end) {
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
            return false;
        }

        if (
            boardArray[endPosX] === undefined ||
            boardArray[endPosY] === undefined
        ) {
            return false;
        }

        return true;
    };

    const checkMovesValid = (moves) => {
        const moveData = moves;

        Object.entries(moveData).forEach(([key, value]) => {
            if (key === "prevVals") {
                return;
            }

            if (
                boardArray[value[0]] === undefined ||
                boardArray[value[1]] === undefined
            ) {
                moveData[key] = null;
            }
        });

        return moveData;
    };

    return {
        checkValidBasePos,
        checkMovesValid,
    };
})();

export default { board };
