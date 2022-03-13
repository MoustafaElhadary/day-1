/**Conditionals**/
const x = 5

if (x > 3) {
    console.log ("x is greater than 3")
} else if ( x < 3) {
    console.log ("x is less than 3")
} else {
    console.log("x is equal to 3")
}

/*********************** */
const title = "manager"

switch (title) {
    case "junior":
        console.log("Salary = 10000")
        break;
    case "senior":
        console.log("Salary = 18000")
        break;
    case "manager":
        console.log("Salary = 30000")
        break;
    default:
        console.log("Ask HR")
}

/************************* */
const balance = 1000;
const amountToWithdraw = 500;

const decision = balance >= amountToWithdraw ? "withdraw" : "not enough funds"


/******************* */
const salary = title === "junior" ? "Salary = 10000" : title ==="senior" ? "Salary = 18000" : title === "manager" ? "Salary = 30000" : "Ask HR"
/**********/