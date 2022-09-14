import { pubsub } from "./pubsub";
import { board } from "./board";

export const knight = (() => {
    // Private variables/functions

    const _arrayEquals = (a, b) =>
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);

    // Public variables/functions
    const calcPossibleMoves = (data) => {
        console.log(data);
        // console.log("calc moves");

        const startPos = data.start;
        const startPosX = startPos[0];
        const startPosY = startPos[1];

        const movePos = {};

        movePos.upLeft = [startPosX - 1, startPosY + 2];
        movePos.upRight = [startPosX + 1, startPosY + 2];
        movePos.rightUp = [startPosX + 2, startPosY + 1];
        movePos.rightDown = [startPosX + 2, startPosY - 1];
        movePos.downRight = [startPosX + 1, startPosY - 2];
        movePos.downLeft = [startPosX - 1, startPosY - 2];
        movePos.leftDown = [startPosX - 2, startPosY - 1];
        movePos.leftDown = [startPosX - 2, startPosY + 1];

        console.log(movePos);

        const returnData = {
            movePos,
            end: data.end,
        };

        // pubsub.publish("checkMoveData", returnData);
    };

    const loopMoves = (data) => {
        console.log("loop moves");
        // console.log(data);

        Object.entries(data.movePos).forEach(([key, value]) => {
            if (value === null) {
                return;
            }

            console.log(`value is: ${value}`);

            if (_arrayEquals(value, data.end)) {
                console.log("destination found");
                return;
            }

            const newObj = {
                start: value,
                end: data.end,
                board: data.board,
            };

            console.log(newObj);

            calcPossibleMoves(newObj);
        });
    };

    const knightMoves = (data) => {
        // pubsub.publish("checkBaseData", data);

        const validBase = board.validBasePos(data);
        if (!validBase) {
            return;
        }

        console.log("knight func");
    };

    // const test = (value) => {
    //     const lol = pubsub.publish("testStuff", value);

    //     console.log(lol);
    //     console.log("did this work");
    // };

    // const preKnightMoves = (data) => {
    //     console.log("pre move");
    //     console.log(data);
    // };

    // Pubsubs
    // pubsub.subscribe("pageLoad", preKnightMoves);

    pubsub.subscribe("postCheckBaseData", calcPossibleMoves);

    pubsub.subscribe("postCheckMoveData", loopMoves);

    return {
        knightMoves,
    };
})();

// export default { knight };
