//Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.
//solution
function middleTwo(str){
    if(str.length % 2 == 0){
      return str.slice(str.length / 2 - 1, str.length / 2 + 1);
    }
    
  }