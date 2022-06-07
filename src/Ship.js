export function Ship(length, startingCoordinate, direction) {

  const getLength = () => length;

  let shipCoordinates = [];
  let hitCoordinates = [];

  function getShipCoordinates() {

    shipCoordinates[0] = startingCoordinate;
    let grid_width = 10;

    // 10 is the assumed grid width here b/c I'm planning a 10x10 grid
    // checking final points for legality
    let finalPointVertical = (length * grid_width) + startingCoordinate - grid_width;
    let finalPointHorizontal = startingCoordinate + (length - 1);
    let finalPointHorizontal__firstDigit = (Math.floor(finalPointHorizontal / 10));
    let startingCoordinate__firstDigit = Math.floor(startingCoordinate / grid_width);

    for (let i = 1; i < length; i++) {

      if (direction == 'horizontal' && (finalPointHorizontal__firstDigit == startingCoordinate__firstDigit)) {
        shipCoordinates[i] = startingCoordinate + i;
      } else if (direction == 'vertical' && (finalPointVertical <= 100)) {
        shipCoordinates[i] = startingCoordinate + i * grid_width; // 3
      } else {
        shipCoordinates = [];
        return shipCoordinates;
      }
    }

    return shipCoordinates;
  }

  getShipCoordinates();

  const setShipCoordinates = (newShipCoordinates) => { shipCoordinates = newShipCoordinates };

  function hit(num) {
    if (shipCoordinates.includes(num) && !hitCoordinates.includes(num)) {
      hitCoordinates.push(num);
    }
  }

  function isSunk() {
    let sortedHitCoordinates = hitCoordinates.sort((a, b) => { return a - b });
    return (sortedHitCoordinates.toString() == shipCoordinates.toString()) ? true : false;
  }

  return {
    setShipCoordinates, getShipCoordinates, getLength, hit, isSunk, hitCoordinates
  };
}