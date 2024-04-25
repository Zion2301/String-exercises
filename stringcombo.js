//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
//solution
function comboString(a, b){
    let bettera = a.substring(0);
   let betterb = b.substring(0);
    if(a.length > b.length){
       return b + bettera + b;
    }
   else if(b.length > a.length){
      return a + betterb + a;
   }
 }