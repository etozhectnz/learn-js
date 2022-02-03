// 1

let content = document.querySelector('body')
let table = document.createElement('table')

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < 10; j++) {
        const col = document.createElement('td')
        let sum = i * j
        if (sum === 0) {
            sum = i || j
        }
        col.innerHTML = sum
        row.appendChild(col)
    }
    table.appendChild(row)      
}
content.appendChild(table)

//2 

const arr = [1, 1, 2, 2, 3, 'a', 'a']

Array.prototype.getUnique = function() {
    let newArray = []
    for(let i = 0; i < this.length; i++) {
        if (!newArray.includes(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const newArr = arr.getUnique()
console.log(newArr)

// 3

let a = 0
function counter(count) {
    return function() {
        return a = count + a;
    }();
}
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

// 4 

class Calculator {
    constructor() {
        this.firstNumber
        this.secondNumber
        this.operator
    };
    setAction() {
        this.operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ')
    }
    read() {
        this.firstNumber = parseFloat(prompt('Enter the first number'))
        this.secondNumber = parseFloat(prompt('Enter the second number'))
    }
    doAction() {
        if (this.operator == '+') { 
            return this.firstNumber + this.secondNumber
        }
        else if (this.operator == '-') { 
            return this.firstNumber - this.secondNumber
        }
        else if (this.operator == '*') { 
            return this.firstNumber * this.secondNumber
        }
        else {
            return this.firstNumber / this.secondNumber
        }
    }

}
let calc = new Calculator();
calc.read();
calc.setAction();
let result = calc.doAction();
console.log(" Result:",result);