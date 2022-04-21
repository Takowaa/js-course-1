// function num(a,b){
//     if (a > b){
//         return `${a} bolwe ${b}`
//     }else if (a === b){
//         return `${a} ravna ${b}`
//     }
//     return `${a} menwe ${b}`
// }
//
// console.log(num(34,24))
// console.log(num(34,34))
// console.log(num(24,34))

// function num(a){
//     if (a % 5 === 0){
//         return "true"
//     }
//     return "false"
// }
//
// console.log(num(25))
// console.log(num(24))

// function str(a){
//     return a.length
// }
//
// console.log(str("Taalai"))

// function num(a){
//     return  Math.sqrt(a)
// }
//
// console.log(num(9))
// console.log(num(36))

// function num(a){
//     return a.toString().length
// }
//
// console.log(num(145))
// let a = "Taala beka"
// function str(a){
//   return  a.substr(-1)
// }
//
// console.log(str(a))

// function randomInteger(min, max) {
//
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
//
// console.log(randomInteger(-7,7))

// function student(exam, project){
//     if (exam >= 90 || project >= 10){
//         return 100
//     }else if(exam >= 75 && project >=5){
//         return 90
//     }else if(exam >= 50 && project >= 2){
//         return 75
//     }return 0
// }
//
// console.log(student(98,9))
// console.log(student(85,6))
// console.log(student(55,3))
// console.log(student(40,1))



// function num(a,b,c,d){
//     return Math.min(a,b,c,d // Минимальное число
// }
//
//
// console.log(num(1,4,6,8))


//
// let age = 99
//
// if (age >= 3 && age <= 10){
//     console.log("Baby")
// }else if (age >= 11 && age <=18){
//     console.log("Подросток")
// }else if(age >= 19 &&  age <= 30){
//     console.log("Взрослый")
// }else if (age >= 31 && age <= 50 ){
//     console.log("В возврасте")
// }else if (age >= 51 && age <= 80) {
//     console.log( "Старик")
// }else {
//     console.log("мертвец")
// }
//
// let age = 22
// switch (age) {
//     case  15:
//         console.log( "emu 15")
// break
//
//     case 22 :
//         console.log("emu 22")
// }
//
// let age = 10
// console.log(age > 3 ? "bolwe" : "menwe")

// console.log(1 && null && 2)

// const  solution =(str) =>{
//     return str.split('').reverse().join('');
// }
//
// console.log(solution("word"))
//


// const user = {
//     name: "Taalai",
//     age: 24,
//     work: "React.js",
//     adress: {
//         email:"Tako250494@gmail.com",
//         phone:"0223001002"
//     },
//     friends:["altywa", "Lida","elya"]
//
// }
// console.log(user.friends[1])


// let obj = {
//     key: "value",
//     num: 12,
//     v: null,
//
// }
// obj.key2 = "value2" // добавляет переменные
// delete  obj.key2 // удаляет
// obj.key2 = undefined // удаляет
//
//
// console.log(obj.key)

// let array = ["Taalai", "Beka","Altywa"]
//
// array[0] = "not Taalai"
// array.push("4") // Добовляет еще значения в самый конец
// array.unshift("0") // добавляет в начало массива
// array.pop()// удаления одного элемента с конца
// array.shift() // удаления одного элемента с начало
//
// console.log(array)

// let  styles = ["jaz", "bluz"]
// styles.push("rock and roll")
// styles[1] = "clasic"
// styles.shift()
// styles.unshift("rap", "raggi")
// console.log(styles)
// let array2 = []
// let array = [ 0,2,4,5,-1,6]
// array.forEach((item) =>{
//         if (item > 0){
//             array2.push(item)
//         }
// })


//
// console.log(array2)
// function num(a){
//     return a.toString().length
// }
//
// console.log(num(145))



// let array = [1, 5, -8, 13, 0, 111, -88, -1] // массив
// let result = 0 // сюда записываем результат
// array.forEach((item) => result += item > 0 ? item : 0) // перебор массива array + условие (что нужно прибавить к value)
// console.log(result)



//  let array = [ 1, 5, -8, 13, 0, 111, -88, -1]
// let result = 0
// array.forEach((item) =>{
//
//     if ( item > 0 ) {
//         return result += item
//     }
// })
// console.log(result)


// let result = 0
//
//
//
// let array = [1, 5, -8, 13, 0, 111, -88, -1]
// array.forEach((item) =>{
//     if (item < 0){
//         result.toString().length
//     }
// })
// console.log(result)
//
//  let array = [ 1, 5, -8, 13, 0, 111, -88, -1]
// let result = 0
// array.forEach((item) =>{
//
//     if ( item   < 0 ) {
//         array.length = result
//     }
// })
//
// console.log(result)


// let array=[1,2,3,4,5]
// let result=array.map
// (function(x) {
//     return x*x
// } )
// console.log(result)

// let array=[1,2,3,4,5]
// let result = []
// array.forEach((item) => {
//     result.push(item*item)
// })
// console.log(result)
//
// let ss =444
//
// f3()
// f1()
// f2()
//
// const f1 = function() {
//
// }
//
// const f2 = () => {
//
// }
//
// function f3() {
//
// }
//

// function num(a){
//     let result = 0
//         a.forEach((item) =>{
//             if (item < 0){
//                 result +=1
//             }
//     })
//     console.log(result)
// }
// num([1,4,6,-7,-6])
// num([1,4,6,7,-6])

// let func = function (){
//
// }

// let func3 = () => {
//
// }

// function min(a,b){
//     if ( a < b ){
//         return a
//     }else {
//
//         return b
//     }
// }
//
// console.log(min(2,4))

// function str(a,b){
//         return Math.pow(a,b)
// }
//
// console.log(str(5,5))
//
// let i = 0
// while ( i < 10 ){
//         console.log(3)
//         i++
// }

// function pow(a){
//         let i = 1
//         while ( i <= a){
//                 console.log(i + " Барашек")
//                 i++
//         }
// }
//
// pow(10)


// function multiplyAll(arr) {
//         let product = 1;
//
//         for(let i = 0; i< arr.length;i++ ){
//
//                 for (let j = 0; j < arr[i].length; j++){
//                         console.log(     product = product * arr[i][j])
//                 }
//         }
//
//         return product;
//
// }
//
//
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//
// let i = 0;
// while (++i < 5)
//         console.log(i)

// let i = 0;
// while (i++ < 5)
//         console.log(i)

// function num(a){
//         let arr = []
//         for (let i = 0; i < a;  i += 2){
//               arr.push(i)
//         }
//         console.log(arr)
// }
// num(12)
// for (let i = 2; i <=10;i ++){
//         if (i % 2=== 0){
//                 console.log(i)
//         }
// }
//           Task 1

// function num(a){
//         let arr = []
//         for (let i = 0; i < a; i++){
//                 console.log(arr.push(i))
//         }
// }
// num(10)


//         let arr = [2,1,6,8,3,4,9]
//         let min = Math.min(...arr)
//         let max = Math.max(...arr)
// console.log(`Наименьшее число ${min}
//              Наибольшее число ${max}`)

// function num (a){
//         let b = 92
//       let result = a / b
//         console.log( result + " Доллара")
//
// }
//
// num(4000)
//
// function num (a,b){
//         let array = []
//         let array2 = []
//         for (let i = a; i <b; i++ ){
//
//              if ( i % 2 === 0){
//                      array.push(i)
//
//              }else if (i % 2 === 1){
//                      array2.push(i)
//              }
//                 console.log(array)
//                 console.log(array2)
//         }
//
// }
// num(41,80)
// //
//
// let user = {
//         name: " some name",
//         username: "Tala",
//         walk: () =>{
//                 console.log(" я хожу")
//         },
//         sayName: () =>{
//                 console.log(this.name)
//         }
// }
//
// user.walk()
// user.sayName()


// let array = [ 1, 5, -8, 13, 0, 111, -88, -1]
// let array2 = array.filter((item) =>{
//         if( item > 0){
//                return true
//         }
//
// })
// console.log(array2)


// const lang = ["java","typescript","javascript"]
// const jlang = lang.filter(function (language){
//         return language.startsWith("j")
// })
// console.log(jlang)

// let nums = [122,22323,444,333,22]
//
// let sum2 = nums.reduce((sum,item) =>{
//         return sum + item
// }, 0)
// console.log(sum2)

// function pow(){
//         let count = 0
//         return function (){
//                 console.log(count)
//         }
// }
// let func2 = pow()
// func2()
//
// let obj ={
//         key: "value",
//         key2: "value2",
//         num: 3,
//         array:[1,3,5,3],
//         obj2:{},
//         func(){},
//         funcstr:() =>{}
//
//
// }
// console.log(obj.num)

// let client = {
//         name: "Taalai",
//         email:"tako@gmail.com",
//         tel: "0223001002",
//         password: "beka",
//
// }


// var getConcatenation = function(nums) {
//         let length = nums.length
//         for(let i =  0; i < length; i++){
//                 nums.push(nums[i])
//         }
//         return nums
// };
//
//
// getConcatenation([1,2,3])

// var maximumWealth = function(accounts) {
//         let maxSum = 0
//         for(let i = 0; i < accounts.length; i++) {
//
//                 let result = accounts[i].reduce((sum, item) => {
//                        return   sum += item
//                 }, 0)
//                if (result > maxSum) maxSum = result
//
//
//         }
//         console.log(maxSum)
// }
//
// maximumWealth([[1,2,3],[1,4,3]])


// var getConcatenation = function (nums) {
//     const ans = [];
//     for (i = 0; i < nums.length; i++) {
//         ans[i] = nums[i];
//         ans[i + nums.length] = nums[i];
//     }
//     console.log(ans);
// };
// getConcatenation([1, 3, 5])


// let arr = ['12','56', '11','99','33322333']
//
// let total = arr.reduce((tot,item) =>{
//     return tot + item
// },'')

// const  users = [
//     {id: "1", name: "Jonh"},
//     {id: "2", name: "Anna"},
//     {id: "3", name: "Kate"}
// ]
//
// const userNameById = users.reduce(function (result,user){
//     return{
//         ...result,
//         [user.id]: user.name,
//     }
// },{})
// console.log(userNameById)

// var isPalindrome = function(x) {
//     let str = String(x)
//     let reverse = str.split('').reverse().join('')
//     if(str === reverse){
//         return true
//     }else {
//         return false
//     }
//
//
// };
// console.log(isPalindrome(123))

// let plusOne = function(digits) {
//     for(let i = digits.length - 1; i >= 0; i--){
//         digits[i]++;
//         if(digits[i] > 9){
//             digits[i] = 0;
//         }else{
//             return digits;
//         }
//     }
//     digits.unshift(1);
//     return digits;
// };
// console.log(plusOne([1,2,9]))



//
//
// var lengthOfLastWord = function(s) {
//     return s.trim().split(" ").pop().length
// };
// console.log(lengthOfLastWord("hello word"))


// var runningSum = function (nums) {
//     let val = 0
//     let sum = nums.map(res=>{
//         return val = res + val
//     })
//     console.log(sum)
// };
// runningSum([1,2,3,4,5])
// var arrayStringsAreEqual = function(word1, word2) {
//
//     word1 = word1.join('')
//     word2 = word2.join('')
//     if (word1 === word2){
//         return true
//     } else {
//         return false
//     }
//
// };
// console.log(arrayStringsAreEqual("ab,c","a,bc"))


// function singleNumber(nums) {
//   return nums.reduce((prev, curr) => {
//        return  prev ^ curr
//     });
//
// }
//
// console.log(singleNumber([1,1,2,2,4]))



// var mostWordsFound = function(sentences) {
//     let max = 0;
//     let temp = 0;
//     for (let i = 0; i < sentences.length; i++) {
//         temp = sentences[i].split(" ").length;
//         if (temp > max) {
//             max = temp;
//         }
//     }
//
//     console.log(max)
// };
// mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])


// var smallerNumbersThanCurrent = function(nums) {
//     let arr = []
//     for (let  i = 0; i < nums.length; i++) {
//         let result = 0
//
//         for (let j = 0; j < nums.length; j++) {
//
//             if (nums[i] > nums[j]) {
//                 result++
//             }
//         }
//         arr.push(result)
//     }
//   return arr
// };
// console.log(
//     smallerNumbersThanCurrent([8,2,1,3,4,5,6,7]))


// let num = Math.floor(Math.random() * 101)
//
// console.log(num)
// //
//

// let num = function (arr){
// let result = arr.map((item) =>{
//   return   item * 2
//
// })
//     console.log(result)
// }
// num([1,2,3,4,5])



// let num = function (arr){
//     let result = arr.reduce((item,rec)=>{
//         return item + rec
//     })
//     console.log(result)
// }
// num([1,2,3,4,5])
// num([3,5,6,4,5])

// let num = function (arr){
//    for (let i = 0; i < arr.length; i++){
//        let result = arr[i] * 2
//        if (result % 10 === 0){
//            console.log(result)
//        }
//    }
//
// }
// num([1,2,3,7,10,5])


// const arr = [0,2,3,4,4]
// let [first, second, ...restArr] = arr
// console.log(first,second,restArr)

// let num = 10 % 2 === 0? "true" : "false"
// console.log(num)
// console.log(3 && 5 && 9)

// decloration
// function name (){
//
// }
// // exspration
// let name = function (){
//
// }

// let arr = [1, 2, 3, 4, 5, 6];
//
// let result = arr.reduce(function(sum, elem) {
//     return sum + elem;
// }, 0);
//
// console.log(result);

// let arr = function (arr2){
//     let result = arr2.reduce ((item, element) =>{
//     return item  + element
//     },0)
//     console.log(result)
//
// }
// arr([1, 2, 3, 4, 45, 6])
// arr([1, 2, 3, 4, 33, 6])
// arr([1, 2, 3, 4, 44, 6])

// let num = function (arr){
//     let arr2 = []
//     let sum = arr.reduce((elem,item)=>{
//         return elem + item
//     })
// arr2.push(sum / 2)
//     console.log(arr2)
//
//
// }
// num([4,6])
// num([2,4])
// num([5,7])
//
// function basicOp(operation, value1, value2) {
//     if (operation === '+'){
//         return value1 * value2
//
//     }else if (operation === '-'){
//         return value1 - value2
//     }else if (operation === '*'){
//         return value1 * value2
//     }else if (operation === '/'){
//         return value1 / value2
//     }
// }
//
// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))

// function printArray(array){
//     console.log(array.join())
// }
//
// console.log(printArray(["h","o","l","a"]))

// function rentalCarCost(d) {
//    if (d >=1 &&  d <=3){
//        return d *40
//    }if (d >= 3 && d < 7){
//        return  d * 40 -20
//     }if (d >= 7){
//        return  d * 40 - 50
//     }
// }
//
// console.log(rentalCarCost(7))
// function getMiddle(s) {
//   let mindex = s.length / 2
//     if (s.length % 2 ===0){
//         return s.slice(mindex -1, mindex +1)
//     }else {
//        return  s.charAt(mindex)
//     }
// }
//
// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))

// function array(arr){
//     return arr.split(",").slice(1,-1).join(" ") || null
//
// }
//
// console.log(array("1,2,3" ))
// console.log(array("1,2,3,4" ))
// console.log(array("1,2,3,4,5" ))
// console.log(array(""))

// let massage
// massage ||= "cms" // Присваевает значение если massege === false
// massage &&=  "cmc" // Присваевает значение если massege === true

// let srt = "abc"
// console.log(srt.replace("b","Б"))

// let m = 1_000_000_000_000 // числовые разделители

// function someFunc(...pirojki){ // получить аргумент
//     console.log(pirojki)
// }
// someFunc("1","2",false,true,1000,2999,)

// function someFunc(name = "Tala", age = 20){ // Параметры по умолчанию
//     console.log(name)
// }
// someFunc()

// setTimeout(function (){
//     console.log("Прошло 3 секунд")
// },3000)
//
// let i = 0 // Счетчик
// const firstInterval = setInterval(function (){ // Интервал
//     console.log("Прошло 2 сукунды")
//     i++
//     if (i > 3){
//         clearInterval(firstInterval) // остановка цикла интервала
//     }
// },2000)

// let num = function (set){
//     let i = 0
//     let firstInterval = setInterval(function (){
//         console.log(set)
//         i++
//         if (i > 15){
//             clearInterval(firstInterval)
//         }
//     },2000)
//
// }
// num("Вам запрещено тут находиться")

// function nameShuffler(str){
//   return   str.split(" ").reverse().join(" ")
//
// }
//
// console.log(nameShuffler('john McClane'))

// Promise - асинхронный код имеет 3 состояния
// pending = ожидание
// fullfilled = выполнился успешно
// rejected = Безуспешно
// let some = new Promise((resolve,reject) =>{
//     let isFinished = false
//     if (isFinished){
//         resolve(1)
//     }else{
//         reject("Потому что isFinished не положительное значение ")
//     }
// })
// some.then(() =>{  // then
//     console.log("Успешно!")
// }).catch(() =>{
//     console.log(" Не успешно")
// })

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

// async function loadJson(url){
//     const  res = await fetch(url)
//
//             if (res.status == 200) {
//                 return res.json();
//             } else {
//                 throw new Error(res.status);
//             }
//
// }

// const  wait = (seconds) =>{
//     return new Promise((res) =>{
//         setTimeout(() =>{
//             res ("Какоето сообщение")
//         }, seconds * 1000)
//     })
// }
//
// // анлаог async await
//
// async function someAsyncFunction(){
//     console.log("Началось ожидание")
//     const res = await  wait(3) // await пишется до функкции которую должны ожидать
//     // ожидание 3 сеекунды , ничего не выполняеться
//     // через 3 секунды выполниться следующий код
//
//     //  await работает только с промисами
//     // три точки под await означает что никого эффекта он не даст
//     await setTimeout(() =>{},1000)
//     console.log("Прошло какоето время  и мы получили сообщение: " + res)
//
// }
// someAsyncFunction()


const  wait = (operation) =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res (operation)
        },3000)
    })
}

const getSomeCalculation = async ( ) =>{
    console.log(" Просто сообщение которое озночает что сообщение началось")
     let fortyFive = 45
    console.log("Второе сообщение")
    let getSomeSumVar = fortyFive + 100
    console.log("Мы получили " + getSomeSumVar)
    // типа очень сложная операция которая занимает 3 секунды
    const result = await wait(155 + getSomeSumVar)
    console.log("Наше вычесление = " + result)
}
getSomeCalculation()