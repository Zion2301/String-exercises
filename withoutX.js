//Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.
//solution
function withoutX(str){
    if(str.length == 1){
      return "";
   }
   else if(str.charAt(0) == "x" && str.charAt(str.length-1) == "x"){
    return str.substring(1, str.length-1);
  }
  else if(str.charAt(0) == "x"){
    return str.substring(1);
  }
  else if(str.charAt(str.length-1) == "x"){
    return str.substring(0, str.length-1);
  }
  return str;
}