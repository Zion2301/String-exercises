//Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.
//solution
function atFirst(str){
    if(str.length < 2 && str.length > 0){
      return str.charAt(0) + "@";
    }
    else if(str.length == 0){
      return "@" + "@";
    }
    return str.charAt(0) + str.charAt(1);
  }

  console.log(atFirst("z"));