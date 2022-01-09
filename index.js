console.log(typeof 1)
console.log(typeof NaN)
console.log(typeof Infinity)
console.log(typeof '')
console.log(typeof true)
console.log(typeof {index: 0})
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof (() => {}))

let userName = 'Alex'

if (typeof userName === 'string') {
    console.log('Привет ' + userName)
} else {
    console.log('Ошибка, не тот тип данных')
}

let playerName = typeof userName === 'string' ? 'Привет ' + userName : 'Ошибка, не тот тип данных'
console.log(playerName)

let n = 0

switch (n) {
    case 1:
        console.log('Понедельник - начало рабочей недели.')
        break
    case 2:
        console.log('Вторник - день рабочий.')
        break
    case 3:
        console.log('Среда - середина рабочей недели.')
        break
    case 4:
        console.log('Четверг - ближе к концу рабочей недели.')
        break
    case 5:
        console.log('Пятница - конец рабочей недели.')
        break
    case 6:
        console.log('Суббота - начало выходного.')
        break
    case 7:
        console.log('Воскресенье - конец выходного.')
        break
    default: 
        console.log('Такой день недели не существует.')            
}

let fDayOff = (n === 6 || n === 7)

if (fDayOff) {
    console.log('Ура сегодня выходной!')
} else if (n > 7 || n < 1) {
    console.log('В неделе только 7 дней!')
} else {
    console.log('Опять работа!')
}