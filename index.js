function produceDrivingRange(blockRange){
  return (startingBlock, endingBlock) => {
    let start = startingBlock.split("th")[0];
    let end = endingBlock.split("th")[0];
    
    let difference = blockRange - rideDistance;
    let result = difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
    debugger
  }

}
