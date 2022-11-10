//Algorithm
// initialize sum as 0
// read starting number as smallNum, ending number as bigNum
// create a loop to add numbers from smallNum - bigNum to sum when
// number % 2 == 0;
// return sum 



//the major function
let sumOfEven = (smallNum, bigNum) =>{
    let sum = 0;
    for (let i = smallNum; i <= bigNum; i++){if (i % 2 == 0){sum += i}};
    return sum;
};

// DOM stuff
let result = document.querySelector("#result");

result.addEventListener("click", function(){
    let startNum = parseInt(document.querySelector("#smallNum").value);

    let endNum = parseInt(document.querySelector("#bigNum").value); 

    result.textContent = sumOfEven(startNum, endNum);
    });