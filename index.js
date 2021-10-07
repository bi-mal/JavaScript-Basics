//Solving codewars challenges

// Problem 1 : Given two arrays of strings a1 and a2 return a sorted array r in 
//             lexicographical order of the strings of a1 which are substrings 
//             of strings of a2.

let array1=["xyz", "live", "strong"];
let array2=["live", "strong"];

let array3=array1.filter(word=>{
    index=array2.findIndex(x=>x.includes(word));
    if(index==-1)
      return false;
    else
      return true;
  })

console.log("array1"+array1);
console.log(array3);
