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

    const checkBasePos = (data) => {
        if (!data.start || !data.end) {
            console.error("data must have start and end keys");
            return;
        }

        const startPos = data.start;
        const startPosX = startPos[0];
        const startPosY = startPos[1];

        // console.log(startPosX);

        const endPos = data.end;
        const endPosX = endPos[0];
        const endPosY = endPos[1];

        if (
            boardArray[startPosX] === undefined ||
            boardArray[startPosY] === undefined
        ) {
            console.error("the start value does not exists on the board");
            return;
        }

        if (
            boardArray[endPosX] === undefined ||
            boardArray[endPosY] === undefined
        ) {
            console.error("the end value does not exists on the board");
            return;
        }

        const newData = {
            start: data.start,
            end: data.end,
            board: boardArray,
        };

        pubsub.publish("postCheckBaseData", newData);
    };

    const checkMovePos = (data) => {
        const newData = data;

        console.log(data);

        console.log("checking singe move");

        Object.entries(newData.movePos).forEach(([key, value]) => {
            if (
                boardArray[value[0]] === undefined ||
                boardArray[value[1]] === undefined
            ) {
                newData.movePos[key] = null;
            }
        });

        console.log("testing post entries");

        newData.board = boardArray;

        console.log(newData);

        pubsub.publish("postCheckMoveData", newData);
    };

    // const altTest = (value) => value.toUpperCase();

    // Pubsubs
    pubsub.subscribe("pageLoad", boardFunc);

    pubsub.subscribe("checkBaseData", checkBasePos);

    pubsub.subscribe("checkMoveData", checkMovePos);

    // pubsub.subscribe("testStuff", altTest);

    return {};
})();

export default { board };
