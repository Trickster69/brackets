module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      for (let b = 0; b < bracketsConfig.length; b++) {
        if(bracketsConfig[b][0] == arr[i] && bracketsConfig[b][1] == arr[i+1]){
          arr.splice(i,2);
          i = 0;
          b = -1;
        }      
      }    
    }

    if(arr.length == 0){
      return true;    
    }else{
      return false;
    }
};
