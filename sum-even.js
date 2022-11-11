//Algorithm
// initialize "sum" as 0
// initialise arr as empty array
// read user input "smallNum", "bigNum" (starting & ending number)
// use a loop to iterate numbers in range("smallNum" - "bigNum") 
// let iterant = i
// add i to "sum" when i % 2 == 0;, and then push i to arr
// 
// return [sum, arr] 



//the function
let sumOfEven = (smallNum, bigNum) =>{
    let sum = 0;
    let arr = []
    for (let i = smallNum; i <= bigNum; i++){if (i % 2 == 0){sum += i; arr.push(i)}};
    return [sum, arr];
};

// the code below is for implementation in the DOM 
let result = document.querySelector("#result");

result.addEventListener("click", function(){
    let startNum = parseInt(document.querySelector("#smallNum").value);

    let endNum = parseInt(document.querySelector("#bigNum").value); 

    result.innerHTML = "The sum is " + sumOfEven(startNum, endNum)[0];

    document.querySelector('#listOfEven').textContent = "The even numbers in the range given is " + sumOfEven(startNum, endNum)[1];
    });

