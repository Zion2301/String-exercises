//Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
//solution
function lastChars(a, b){
    if(a.length > 0 && b.length == 0){
      return a.charAt(0) + "@";
    }
    
    else if(b.length > 0 && a.length == 0){
       return "@" + b.charAt(b.length-1);
    }
    else if(b.length == 0 && a.length == 0){
       return "@" + "@";
    }
    
    return a.charAt(0) + b.charAt(b.length-1);
  }