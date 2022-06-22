import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe('Gameboard tests', () => {

  // placeShip tests
  test('ship placement legal', () => {
    let gameboardA = Gameboard();
    let ship = Ship(2, 1, 'horizontal');
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
  test('attack hit', () => {
    let atkCoord = 12;
    let gameboardA = Gameboard();

    let ship = Ship(2, 1, 'horizontal');
    let usedC = gameboardA.placeShip(ship);
    let shipB = Ship(3, 11, 'horizontal');
    usedC += gameboardA.placeShip(shipB);
    let shipC = Ship(4, 21, 'horizontal');
    usedC += gameboardA.placeShip(shipC);
    let shipD = Ship(5, 31, 'horizontal');
    usedC += gameboardA.placeShip(shipD);
    let shipE = Ship(5, 41, 'horizontal');
    usedC += gameboardA.placeShip(shipE);

    gameboardA.receiveAttack(atkCoord);

    expect(gameboardA.grid[atkCoord]).toBe(true);

  });
  test('attack miss', () => {
    let atkCoord = 12;
    let gameboardA = Gameboard();

    let ship = Ship(2, 1, 'horizontal');
    let usedC = gameboardA.placeShip(ship);
    let shipB = Ship(3, 14, 'horizontal');
    usedC += gameboardA.placeShip(shipB);
    let shipC = Ship(4, 21, 'horizontal');
    usedC += gameboardA.placeShip(shipC);
    let shipD = Ship(5, 31, 'horizontal');
    usedC += gameboardA.placeShip(shipD);
    let shipE = Ship(5, 41, 'horizontal');
    usedC += gameboardA.placeShip(shipE);

    gameboardA.receiveAttack(atkCoord);

    expect(gameboardA.grid[atkCoord]).toBe('miss');

  });
  test('attack default', () => {
    let atkCoord = 12;
    let gameboardA = Gameboard();

    let ship = Ship(2, 1, 'horizontal');
    let usedC = gameboardA.placeShip(ship);
    let shipB = Ship(3, 11, 'horizontal');
    usedC += gameboardA.placeShip(shipB);
    let shipC = Ship(4, 21, 'horizontal');
    usedC += gameboardA.placeShip(shipC);
    let shipD = Ship(5, 31, 'horizontal');
    usedC += gameboardA.placeShip(shipD);
    let shipE = Ship(5, 41, 'horizontal');
    usedC += gameboardA.placeShip(shipE);

    gameboardA.receiveAttack(atkCoord);

    expect(gameboardA.grid[88]).toBe(false);

  });
  // gameOver check
  test('gameOver', () => {
    let gameboardA = Gameboard();

    let ship = Ship(1, 1, 'horizontal');
    gameboardA.placeShip(ship);
    let shipB = Ship(1, 11, 'horizontal');
    gameboardA.placeShip(shipB);
    let shipC = Ship(1, 21, 'horizontal');
    gameboardA.placeShip(shipC);
    let shipD = Ship(1, 31, 'horizontal');
    gameboardA.placeShip(shipD);
    let shipE = Ship(1, 41, 'horizontal');
    gameboardA.placeShip(shipE);

    gameboardA.receiveAttack(1);
    gameboardA.receiveAttack(11);
    gameboardA.receiveAttack(21);
    gameboardA.receiveAttack(31);
    gameboardA.receiveAttack(41);

    console.log(gameboardA.usedCoordinates);

    expect(gameboardA.gameOver()).toBe('over');
  });
});