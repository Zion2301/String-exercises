//Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.
//solution
function middleThree(str){
    let length = str.length;
    let midind = str.length/2;
    return str.slice(midind - 1, midind + 2);
  }