let str = 'Вася;Петя;Вова;Олег'
let arr = str.split(";")
console.log(arr)

hello2('Vasya')



function hello2 (name){
    console.log('Hello', name)
}

const val = addOneForAll(1,2,3,4)
console.log(val)

function addOneForAll (...args){
    for(let i = 0; i < args.length; i++){
        args[i] ++
    }
    return args
}



let i = 0;
while(true) {
    if(Math.random() > 0.9) {
        alert(++i)
        break
    } else {
        i++
    } 
}
