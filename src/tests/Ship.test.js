const Ship = require('../Ship');

// getLength check
test('getLength 3', () => {
  expect(Ship(3, 21, 'horizontal').getLength()).toBe(3);
});

// coordinate legality check
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