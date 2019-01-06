function produceDrivingRange(n){
  return function(start, end){
    // debugger
    let dist = Math.abs(start.slice(0,2) - end.slice(0,2))

    if ( dist <= n){
      return `within range by ${n- dist}`
    }
    else {
      return `${dist - n} blocks out of range`
    }
  }
}

function produceTipCalculator(n){
  return function(bill){
    return bill * n
  }
}

function createDriver(){
  driverId = 0
  return class{
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
