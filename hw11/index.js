const studentsArr = [
  {
    name: "Сергей",
    surname: "Войлов",
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
  },
  {
    name: "Татьяна",
    surname: "Коваленко",
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
  },
  {
    name: "Анна",
    surname: "Кугир",
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
  },
  {
    name: "Станислав",
    surname: "Щелоков",
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
  },
  {
    name: "Денис",
    surname: "Хрущ",
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
  },
  {
    name: "Татьяна",
    surname: "Капустник",
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
  },
  {
    name: "Максим",
    surname: "Меженский",
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
  },
  {
    name: "Денис",
    surname: "Марченко",
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
  },
  {
    name: "Антон",
    surname: "Завадский",
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3,
  },
  {
    name: "Игорь",
    surname: "Куштым",
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
  },
  {
    name: "Инна",
    surname: "Скакунова",
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
  },
];

const listOfStudents = [];
let budgetCount = 0;

class Student {
  constructor(enrollee) {
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
  }

  id = null;
  isSelfPayment = null;

  studentId(newId) {
    this.id = newId + 1;
  }

  selfPaymentCheck() {
    if (this.ratingPoint >= 800) {
      budgetCount++;
      if (budgetCount > 5) {
        for (let student of listOfStudents) {
          if (!student.isSelfPayment) {
            if (student.ratingPoint < this.ratingPoint || (student.ratingPoint == this.ratingPoint && student.schoolPoint < this.schoolPoint)) {
              budgetCount--;
              student.isSelfPayment = true;
              this.isSelfPayment = false;
              break;
            } else {
              budgetCount--;
              this.isSelfPayment = true;
              break;
            }
          }
        }
      } else {
        this.isSelfPayment = false;
      }
    } else {
      this.isSelfPayment = true;
    }
  }
}

for (let i = 0; i < studentsArr.length; i++) {
  let entry = new Student(studentsArr[i]);
  entry.studentId(i);
  entry.selfPaymentCheck();
  listOfStudents.push(entry);
}

console.log(listOfStudents);

class CustomString {
  constructor() {}
  reverse(string) {
    return string.split("").reverse().join("");
  }

  ucFirst(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  ucWord(string) {
    return string.replace(/\b[a-zA-Z]/g, (letter) => letter.toUpperCase());
  }
}

const myString = new CustomString();

console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWord("qwerty qwerty qwerty"));

class Validator {
  constructor() {}
  checkIsEmail(email) {
    return !!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }
}

let validator = new Validator();

console.log(validator.checkIsEmail("vasya.pupkin@gmail.com"));
console.log(validator.checkIsEmail("v@h.com"));

console.log(validator.checkIsEmail("vasya.pupkin@gmail.c"));
console.log(validator.checkIsEmail("vasya.pupkin@gmail."));
console.log(validator.checkIsEmail("vasya.pupkimail.com"));
console.log(validator.checkIsEmail("@gmail..com"));
