//Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.
//solution
function extraFront(str){
    if(str.length >= 2){
      return str.charAt(0) + str.charAt(1) + str.charAt(0) + str.charAt(1) + str.charAt(0) + str.charAt(1);
    }
    else if(str.length == 1){
       return str.charAt(0) + str.charAt(0) + str.charAt(0);
    }
    return "";
  }