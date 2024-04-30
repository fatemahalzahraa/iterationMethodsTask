const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const greaterThanOrEqual = numbers.filter (
    (number)=>{
        return number>=25
    }
)
console.log (greaterThanOrEqual)

const divide = numbers.filter (
    (number)=> {
        return number %5 == 0
    }
)

console.log (divide)

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squared = numbers.map (
    (number) => {
        return number*number

    }
)
console.log(squared)

const multiply = numbers.map (
    (number) => {
        return number*2

    }
)
console.log(multiply)

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//Q5

const greaterThan = numbers.filter (
    (number)=>{
        return number>=20
    }
)
const square = greaterThan.map (
    (number) => {
        return number*number

    }
)

console.log (square)

//Q6

const dividableBy = numbers.filter (
    (number)=> {
        return number %5 == 0
    }
)

const multiplyBy = dividableBy.map (
    (number) => {
        return number*3

    }
)

console.log(multiplyBy)
