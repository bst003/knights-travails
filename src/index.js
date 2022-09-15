import { knight } from "./modules/knight";
import { board } from "./modules/board";

knight.knightMoves({ start: [0, 0], end: [1, 2] }); // Works: [[0,0],[1,2]]
knight.knightMoves({ start: [0, 0], end: [3, 3] }); // Works: [[0,0],[1,2],[3,3]]
knight.knightMoves({ start: [3, 3], end: [0, 0] }); // Works: [[3,3],[1,2],[0,0]]
