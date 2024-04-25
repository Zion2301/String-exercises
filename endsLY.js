//Given a string, return true if it ends in "ly".
//solution
function endsLy(str){
    for(let i = 0; i < str.length; i++){
      if(str.charAt(str.length-1) === "y" && str.charAt(str.length-2) === "l"){
        return true;
      }
    }
   return false;
 }