//Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
//solution
function hasBad(str){
    for(let i = 0; i < str.length; i++){
      if((str.charAt(0) === "b" && str.charAt(1) === "a" && str.charAt(2) === "d") || (str.charAt(1) === "b" && str.charAt(2) === "a" && str.charAt(3) === "d")){
        return true;
      }
    }
    return false;
  }