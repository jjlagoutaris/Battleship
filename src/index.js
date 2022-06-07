import './style.scss';
import { Ship } from './Ship';
import { Gameboard } from './Gameboard';

let shipA = Ship(3, 12, 'horizontal');
let shipB = Ship(4, 10, 'vertical');
let shipC = Ship(5, 70, 'vertical');
let shipD = Ship(3, 21, 'horizontal');
console.log(shipA.getShipCoordinates());

let gameBoardA = Gameboard();
gameBoardA.placeShip(shipA);
gameBoardA.placeShip(shipB);
// gameBoardA.placeShip(shipC);
gameBoardA.placeShip(shipD);