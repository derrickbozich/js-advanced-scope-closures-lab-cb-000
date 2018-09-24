function produceDrivingRange(blockRange){
  return (startingBlock, endingBlock) => {
    debugger
    let start = parseInt(startingBlock.slice(0, -2));
    let end = parseInt(endingBlock.slice(0, -2));

    let difference = blockRange - rideDistance;
    let result = difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`

  }

}
