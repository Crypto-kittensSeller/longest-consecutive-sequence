module.exports = function longestConsecutiveLength(array) {
  let arr1 = array;
  let maxLength = 0;
  let counter = 0;
  arr1.sort(function(a,b){return a - b});
  for (let i=1; i < arr1.length; i++ ){
      if (arr1[i-1] === (arr1[i] - 1)){
          counter++;
          if (counter > maxLength){
              maxLength = counter;
          }
        }
      else if(arr1[i-1] === (arr1[i])){
          continue;
      } else {counter = 0;}
    
      }
  maxLength = maxLength + 1;    
  if (array.length === 0){maxLength = 0}    
  return maxLength;
}
