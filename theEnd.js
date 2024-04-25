//Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.
//solution
function theEnd(str, front){
    if(front == true){
      return str.charAt(0);
    }
    return str.charAt(str.length-1);
  }