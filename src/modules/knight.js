import { pubsub } from "./pubsub";

export const knight = (() => {
    // Private variables/functions

    // Public variables/functions
    const calcPossibleMoves = (data) => {
        console.log(data);
        console.log("calc moves");

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

        pubsub.publish("checkMoveData", returnData);
    };

    const knightMoves = (data) => {
        pubsub.publish("checkBaseData", data);

        console.log("knight func");
    };

    // const preKnightMoves = (data) => {
    //     console.log("pre move");
    //     console.log(data);
    // };

    // Pubsubs
    // pubsub.subscribe("pageLoad", preKnightMoves);

    pubsub.subscribe("postCheckBaseData", calcPossibleMoves);

    return {
        knightMoves,
    };
})();

// export default { knight };
