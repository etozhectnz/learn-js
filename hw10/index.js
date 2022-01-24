// 1

const obj = {
    name: "Misha",
    car: "Elegy"
}

function showName() {
  console.log(this.name)
}

function bindFunc(func, context, ...args) {
    return func.bind(context)
}

let f = bindFunc(showName, obj, 1)
f()


// 2
   
const objectA = {
    a: 1,
    b: 2,
    c: -3,
}

const getSum = function() {
    let sum = 0
    for (const key in this) {
        if (this[key] > 0) {
            sum += this[key]
        }
    }
    return sum
}

console.log('Сумма:', getSum.call(objectA))

// 3

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false]
}

function getNewArray() {
    let newArray = []
    if (this.values){
        for (const val of this.values) {
            if (typeof val === 'number' && val % 2 == 0 && val > 2 && val < 10) {
                newArray.push(val) 
            }
        }
        console.log(newArray)
    } else {
        console.log('Не найдено')
    }
}

getNewArray.call(valObject0)

// 4

user = {
    birthdayDate: new Date("1997-03-12")
}

console.log("birthdayDate.toLocalString=>",user.birthdayDate.toLocaleString());

function getLastBirthday(){
    let now = new Date();
    let lastBirthday = user.birthdayDate;

    if(now.getMonth()>user.birthdayDate.getMonth()|| (now.getMonth()===user.birthdayDate.getMonth() && now.getDate()>user.birthdayDate.getDate())){
        lastBirthday.setFullYear(now.getFullYear())
    } else {
        lastBirthday.setFullYear(now.getFullYear()-1)
    }
    console.log("lastBirthday",(now-lastBirthday)/(1000*60*60*24))
}

getLastBirthday()
