// 1

let userNumber = 0
let n = 0;
for(let i = 1; i <= userNumber; i++){
    n += Math.pow(i,2)
}
console.log('squared number:', n)

// 2

let userNumbers = avg2(3, 4)

function avg2 (a, b) {
    result = (a + b) / 2
}

console.log(result)

// 3

let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']]
let arrFlat = arr.flat(Infinity)
let arrResult = arrFlat.reduce(arrSum, 0)
console.log(arrFlat)
function arrSum (arg, num) {
    if(typeof num === 'number' && num % 2 === 0){
        arg += num
    }
    return arg
}
console.log(arrResult)

// 4

let object = {
    name: "Jhon",
    car: "Lada"
}
let keyInput = prompt('enter new key')
let valueInput = prompt('enter new value')
if (keyInput != null && valueInput != null) {
    addKey(keyInput, valueInput, object)
}

function addKey (key, value, obj) {
    if (obj[key]){
        console.log("Уже есть")
    } else {
        obj[key] = value
    }
}

console.log(object)

// 5

while(!confirm()){}

// 6

let array = [1,23,-12,5,"2",10,-9,"7"]
let sum = array.reduce((a, b) => parseInt(a) + parseInt(b), 0)
console.log('Сумма:', sum)

let sorted = array.slice().sort((a, b) => (parseInt(b) - parseInt(a)))
console.log('Сортировка:', sorted)

let positive = array.filter(a => parseInt(a) > 0)
console.log('Положительные:', positive)

let newArray = []

for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
        newArray[i] = array[i] + 10
    } else {
        newArray[i] = array[i]
    }
}

console.log('тип число +10:', newArray)