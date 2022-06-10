import { Ship } from '../Ship';

describe('Ship object tests', () => {

  // getLength check
  test('getLength 3', () => {
    expect(Ship(3, 21, 'horizontal').getLength()).toBe(3);
  });

  // coordinate legality check (possibly remove if offloaded onto Gameboard object)
  test('shipCoordinates horizontal legal', () => {
    expect(Ship(3, 21, 'horizontal').getShipCoordinates()).toStrictEqual([21, 22, 23]);
  });
  test('shipCoordinates horizontal illegal', () => {
    expect(Ship(3, 29, 'horizontal').getShipCoordinates()).toStrictEqual([]);
  });
  test('shipCoordinates vertical legal', () => {
    expect(Ship(5, 30, 'vertical').getShipCoordinates()).toStrictEqual([30, 40, 50, 60, 70]);
  });
  test('shipCoordinates vertical illegal', () => {
    expect(Ship(5, 80, 'vertical').getShipCoordinates()).toStrictEqual([]);
  });
  // hit checks
  test('correctly assigns hit', () => {
    let shipA = Ship(4,1,'horizontal');
    shipA.hit(1);
    shipA.hit(2);
    expect((shipA.hitCoordinates.includes(1)&&shipA.hitCoordinates.includes(2))).toBe(true);
  });
  test('correctly does not assign hit if no hit occurred', () => {
    let shipA = Ship(4,1,'horizontal');
    shipA.hit(5);
    shipA.hit(7);
    expect((shipA.hitCoordinates.includes(5)||shipA.hitCoordinates.includes(7))).toBe(false);
  });
  test('avoid false positive', () => {
    let shipA = Ship(4,1,'horizontal');
    shipA.hit(1);
    shipA.hit(4);
    expect((shipA.hitCoordinates.includes(1)&&shipA.hitCoordinates.includes(4))).toBe(true);
  });
  test('avoid false negative', () => {
    let shipA = Ship(4,1,'horizontal');
    shipA.hit(3);
    shipA.hit(7);
    expect((shipA.hitCoordinates.includes(3)||shipA.hitCoordinates.includes(7))).toBe(true);
  });

  // sunken ship check
  test('sunkenShip true', () => {
    let shipA = Ship(4,1,'horizontal');
    shipA.hit(1); 
    shipA.hit(2);
    shipA.hit(3);
    shipA.hit(4);
    expect(shipA.isSunk()).toBe(true);
  });
  test('sunkenShip false', () => {
    let shipA = Ship(4,1,'vertical');
    shipA.hit(1); 
    shipA.hit(2);
    shipA.hit(3);
    shipA.hit(4);
    expect(shipA.isSunk()).toBe(false);
  });
});

