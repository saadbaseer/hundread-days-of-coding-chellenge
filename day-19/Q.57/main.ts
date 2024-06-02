// Question 57:
//  Find the Average Grade: Given a list of grades,
//  calculate the average grade.

// A list of grades
let grades = [4,2,3,5,6];

// reduce method is used for the avg
let avg=grades.reduce((accum,curVal,index,array)=>{

// totel stores the the sum of the array
    let total = accum += curVal;

    if(index===array.length -1){
        return total/array.length
    }
    return total
})
//prints the avg
console.log(avg);



