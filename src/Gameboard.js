export function Gameboard(){
  let grid = []; // contains true (hit), false (default state), or 'miss' for misses
  let usedCoordinates = [];
  let gridSize = 101;
  let shipsPlaced = [];
  let sunkenShips = [];
  let outcome = 'active';

  // using an IIFE to set all grid elements to false by default
  (()=>{
    for(let i = 1; i < gridSize; i++){
      grid[i] = false;
    }
  })();


  function placeShip(shipObj){
    // returns true if any of the coordinates have been previously used for placement or false if not
    let found = usedCoordinates.some(coord => shipObj.getShipCoordinates().includes(coord));
    // if there are no coordinates taken up or the new coordinates are available, place the ship & update the usedCoordinates accordingly
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
            if(gameOver() == 'over'){
              // gameOver, something happens
            }
          }
        } 
      }
    } else {
      grid[atkCoord] = 'miss';
      console.log('Miss');
      // insert UI update here
    }
  }

  function gameOver(){
    let numberOfShips = 5;
    if(sunkenShips.length == numberOfShips){
      outcome = setOutcome('over');
      return outcome;
    }
  }
  
  const setOutcome = (newOutcome) => { outcome = newOutcome };
  const getOutcome = () => { outcome };

  return {
    grid, placeShip, usedCoordinates, shipsPlaced, receiveAttack, setOutcome, getOutcome, gridSize, gameOver
  };
}