import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe('Gameboard tests', () => {

  // placeShip tests
  test('ship placement legal', () => {
    let gameboardA = Gameboard();
    let ship = Ship(2, 1, 'horizontal');
    gameboardA.placeShip(ship);
    let usedC = gameboardA.placeShip(ship);
    expect((usedC.includes(1) && usedC.includes(2))).toBe(true);
  });
  test('ship placement illegal', () => {
    let gameboardA = Gameboard();
    let ship = Ship(2, 2, 'horizontal');
    let usedC = gameboardA.placeShip(ship);
    expect((usedC.includes(1) && usedC.includes(2))).toBe(false);
  });
  // receiveAttack tests

});