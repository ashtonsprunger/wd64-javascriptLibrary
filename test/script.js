function filterNumbersFromArray() {
    // Write the code that goes here
    let newArr = [];
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i< arr.length; i++){
        if(letters.includes(arr[i])){
            newArr += arr[i];
        }
    }
    arr = newArr;
  }
  
  let arr = [1, 'a', 'b', 2];
  filterNumbersFromArray();
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);