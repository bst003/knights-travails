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
        console.log("calc moves");
        console.log(data);

        const startPos = data.value;
        const startPosX = startPos[0];
        const startPosY = startPos[1];

        const movePos = {};

        if (data.prevVals === null) {
            movePos.prevVals = data.value;
            console.log("should be null at fist");
            console.log(movePos.prevVals);
        } else {
            movePos.prevVals = JSON.parse(JSON.stringify(data.prevVals));
        }

        movePos.upLeft = [startPosX - 1, startPosY + 2];
        movePos.upRight = [startPosX + 1, startPosY + 2];
        movePos.rightUp = [startPosX + 2, startPosY + 1];
        movePos.rightDown = [startPosX + 2, startPosY - 1];
        movePos.downRight = [startPosX + 1, startPosY - 2];
        movePos.downLeft = [startPosX - 1, startPosY - 2];
        movePos.leftDown = [startPosX - 2, startPosY - 1];
        movePos.leftDown = [startPosX - 2, startPosY + 1];

        return movePos;

        // pubsub.publish("checkMoveData", returnData);
    };

    // const loopMoves = (data) => {
    //     console.log("loop moves");
    //     // console.log(data);

    //     Object.entries(data.movePos).forEach(([key, value]) => {
    //         if (value === null) {
    //             return;
    //         }

    //         console.log(`value is: ${value}`);

    //         if (_arrayEquals(value, data.end)) {
    //             console.log("destination found");
    //             return;
    //         }

    //         const newObj = {
    //             start: value,
    //             end: data.end,
    //             board: data.board,
    //         };

    //         console.log(newObj);

    //         calcPossibleMoves(newObj);
    //     });
    // };

    const knightMoves = (data) => {
        // pubsub.publish("checkBaseData", data);
        const queue = [];

        const validBase = board.checkValidBasePos(data);

        // Stop function if values aren't valid
        if (!validBase) {
            return;
        }

        console.log(`start data: ${data.start}`);

        const firstVal = {
            prevVals: null,
            value: data.start,
        };

        console.log(firstVal);

        queue.push(firstVal);

        console.log("queue begins");
        while (queue.length !== 0) {
            console.log(`value is: ${queue[0].value}`);
            console.log(queue[0]);
            console.log("why");

            if (_arrayEquals(queue[0].value, data.end)) {
                console.log("end point found");
                console.log(queue[0]);
                break;
            }

            console.log("before calcMoves");
            console.log(queue[0]);
            const posMoves = calcPossibleMoves(queue[0]);
            const validPosMoves = board.checkMovesValid(posMoves);

            console.log(`valid moves below from ${queue[0].value}`);
            console.log(validPosMoves);

            Object.entries(validPosMoves).forEach(([key, value]) => {
                if (value === null || key === "prevVals") {
                    console.log("return on prevVals");
                    return;
                }

                console.log(`${key}: ${value}, should never be prevVals`);

                const posData = {
                    value,
                    prevVals: null,
                };

                if (_arrayEquals(validPosMoves.prevVals, data.start)) {
                    posData.prevVals = [validPosMoves.prevVals];
                } else {
                    posData.prevVals = JSON.parse(
                        JSON.stringify(validPosMoves.prevVals)
                    );
                }

                const valArray = JSON.parse(JSON.stringify(value));

                console.log(valArray);

                posData.prevVals.push(valArray);

                console.log(`post data for ${value}`);
                console.log(posData);

                queue.push(posData);
            });

            queue.shift();
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

    // pubsub.subscribe("postCheckMoveData", loopMoves);

    return {
        knightMoves,
    };
})();

// export default { knight };
