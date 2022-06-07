export function Gameboard(){
  let grid = [];
  let usedCoordinates = [];
  let gridSize = 101;

  // using an IIFE to set all grid elements to false by default
  (()=>{
    for(let i = 1; i < gridSize; i++){
      grid[i] = false;
    }
  })();


  function placeShip(shipObj){
    let found = usedCoordinates.some(coord => shipObj.getShipCoordinates().includes(coord));
    if(usedCoordinates.length == 0 || !found){
      console.log('shipObjCoords', shipObj.getShipCoordinates());
      usedCoordinates = usedCoordinates.concat(shipObj.getShipCoordinates());
      console.log(usedCoordinates);
    } else{
      console.log('placeShipElse');
    }
  }

  return {
    placeShip
  };
}