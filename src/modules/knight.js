import { pubsub } from "./pubsub";

const knight = (() => {
    // Private variables/functions

    // Public variables/functions
    const knightMoves = (startPos, endPos) => {
        console.log("knight func");
    };

    // Pubsubs
    pubsub.subscribe("pageLoad", knightMoves);

    return {};
})();

export default { knight };
