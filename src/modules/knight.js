import { pubsub } from "./pubsub";

const knight = (() => {
    // Private variables/functions

    // Public variables/functions
    const knightMoves = (startPos, endPos) => {
        console.log("knight func");
    };

    const preKnightMoves = (data) => {
        console.log("pre move");
        console.log(data);
    };

    // Pubsubs
    pubsub.subscribe("pageLoad", preKnightMoves);

    return {};
})();

export default { knight };
