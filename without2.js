//Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.
//solution
function without2(str){
    if(str.charAt(0) == str.charAt(str.length-2) && str.charAt(1) == str.charAt(str.length-1)){
       return str.slice(2);
    }
    return str;
  }