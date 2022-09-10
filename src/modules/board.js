import { pubsub } from "./pubsub";

const board = (() => {
    // Private variables/functions

    // Public variables/functions

    let boardArray = [
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
    };

    // Pubsubs
    pubsub.subscribe("pageLoad", boardFunc);

    return {};
})();

export default { board };
