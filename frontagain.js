//Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
//solution
function frontAgain(str){
    if(str.charAt(0) == str.charAt(str.length-2) && str.charAt(1) == str.charAt(str.length-1) && str.length > 0){
        return true;
    }
    return false;
  }