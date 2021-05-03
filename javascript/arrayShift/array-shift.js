module.exports= function insertShiftArray(arr,value ){
  let newArr=[];
  if(arr.length){
    for(let i=0;i<arr.length;i++){
      if(i===Math.ceil(arr.length/2)){
        newArr.push(value);
        newArr.push(arr[i]);
      }else{
        newArr.push(arr[i]);
      }
    }
  }else{
    return [];
  }
  return newArr;
};
