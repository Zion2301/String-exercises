//Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
//solution
function seeColor(str){
    if(str.charAt(0) == "r" && str.charAt(1) == "e" && str.charAt(2) == "d"){
       return "red";
    }
    
    else if(str.charAt(0) == "b" && str.charAt(1) == "l" && str.charAt(2) == "u" && str.charAt(3) == "e"){
      return "blue"
    }
    
    return "";
  }