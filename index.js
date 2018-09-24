function produceDrivingRange(blockRange){
  return (startingBlock, endingBlock) => {
    debugger
    let start = startingBlock.slice(-2);
    let end = endingBlock.slice(-2);

    let difference = blockRange - rideDistance;
    let result = difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`

  }

}
