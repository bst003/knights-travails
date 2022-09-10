import { pubsub } from "./modules/pubsub";
import { knight } from "./modules/knight";
import { board } from "./modules/board";

pubsub.publish("pageLoad", { start: [0, 0], end: [3, 3] });

console.log("test");

console.log("lol");

/*

NOTES

Create Knight "node" with all possible options it could go to?
    Could work similar to social network graph
    Would have to accomodate for 8 children at points
        Level order traversal? - https://www.youtube.com/watch?v=86g8jAQug04
        Could get exponentially larger with each move
    Would this lead to an infinite loop?
    Where does game board come in on this solution?

Create gameboard similar to Tic Tac Toe board?
    How dow this accomplish getting to another spot as quickly as possible?
    Use board as quick wway to check coordinates are valid?
        If the coords don't exist in array then don't run function.
*/
