//Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
//solution
function right2(str){
    if(str.length == 2){
      return str;
    }
    else if(str.length == 3){
      return str.substring(1) + str.charAt(0);
    }
    else if(str.length == 4){
      return str.substring(2) +str.substring(0, 2);
    }
    return str.substring(str.length-2) + str.substring(0, str.length-2);
  }