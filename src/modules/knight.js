import { pubsub } from "./pubsub";

export const knight = (() => {
    // Private variables/functions

    // Public variables/functions
    const calcPossibleMoves = (data) => {
        console.log(data);
        console.log("calc moves");
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
