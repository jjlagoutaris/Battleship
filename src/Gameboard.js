export function Gameboard(){
  let grid = [];
  let usedCoordinates = [];
  let gridSize = 101;
  let shipsPlaced = [];
  let sunkenShips = [];

  // using an IIFE to set all grid elements to false by default
  (()=>{
    for(let i = 1; i < gridSize; i++){
      grid[i] = false;
    }
  })();


  function placeShip(shipObj){
    let found = usedCoordinates.some(coord => shipObj.getShipCoordinates().includes(coord));
    if(usedCoordinates.length == 0 || !found){
      usedCoordinates = usedCoordinates.concat(shipObj.getShipCoordinates());
      shipsPlaced += shipObj;
      return usedCoordinates;
    } else{
      console.log('placeShipElse');
      return usedCoordinates;
    }
  }

  function receiveAttack(atkCoord){
    // if one of the ships is hit
    if(usedCoordinates.includes(atkCoord)){
      grid[atkCoord] = true;
      // cycle through looking for the correct ship
      for(let i = 0; i < shipsPlaced; i++){
        // if correct, add hit
        if(shipsPlaced[i].getShipCoordinates.includes(atkCoord)){
          // insert UI update here
          shipsPlaced[i].hit(atkCoord);
          // if sunk, add ship to sunkenShips
          if(shipsPlaced[i].isSunk()){
            // insert UI update here
            console.log('p1, your ship is sunk.');
            sunkenShips += shipsPlaced[i];
          }
        } 
      }
    } else {
      console.log('Miss');
      // insert UI update here
    }
  }

  return {
    placeShip, usedCoordinates, shipsPlaced, receiveAttack
  };
}