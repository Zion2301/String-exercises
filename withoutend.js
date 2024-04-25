//Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
//solution
function withoutEnd(str){
    return str.slice(1, str.length - 1);
 }