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
        const startPos = data.value;
        const startPosX = startPos[0];
        const startPosY = startPos[1];

        const movePos = {};

        if (data.prevVals === null) {
            movePos.prevVals = data.value;
        } else {
            movePos.prevVals = JSON.parse(JSON.stringify(data.prevVals));
        }

        movePos.upLeft = [startPosX - 1, startPosY - 2];
        movePos.upRight = [startPosX + 1, startPosY - 2];
        movePos.rightUp = [startPosX + 2, startPosY - 1];
        movePos.rightDown = [startPosX + 2, startPosY + 1];
        movePos.downRight = [startPosX + 1, startPosY + 2];
        movePos.downLeft = [startPosX - 1, startPosY + 2];
        movePos.leftDown = [startPosX - 2, startPosY + 1];
        movePos.leftDown = [startPosX - 2, startPosY - 1];

        return movePos;
    };

    const knightMoves = (data) => {
        const queue = [];
        let finalMoves;

        const validBase = board.checkValidBasePos(data);

        // Stop function if values aren't valid
        if (!validBase) {
            return;
        }

        const firstVal = {
            prevVals: null,
            value: data.start,
        };

        queue.push(firstVal);

        while (queue.length !== 0) {
            if (_arrayEquals(queue[0].value, data.end)) {
                finalMoves = JSON.parse(JSON.stringify(queue[0].prevVals));
                break;
            }

            const posMoves = calcPossibleMoves(queue[0]);
            const validPosMoves = board.checkMovesValid(posMoves);

            Object.entries(validPosMoves).forEach(([key, value]) => {
                if (value === null || key === "prevVals") {
                    return;
                }

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

                posData.prevVals.push(valArray);

                queue.push(posData);
            });

            queue.shift();
        }

        console.log(finalMoves);
    };

    pubsub.subscribe("postCheckBaseData", calcPossibleMoves);

    return {
        knightMoves,
    };
})();

// export default { knight };
