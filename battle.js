let randomLoc = Math.floor(Math.random() * 5) // генератор случайных чисел от 0 до 5, позиция корабля будет опр рандомно
let location1  = randomLoc // хранения позиции каждой клетки корабля
let location2 = location1 + 1
let location3 = location2 + 1

let guess  // для номера текущей попытки

let hits = 0  // для количества попаданий
let guesses = 0  // для количества попыток

let  isSunk = false  // для хранения информации о том, потоплен корабль или нет.


while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Пожалуйста, введите действительный номер!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Ты потопил мой корабль!!!");
               }
             } else {
              alert("MISS");
         }
    }
}

let stats = "ты взял " + guesses + " guesses to sink the battleship," + "which means your shooting accuracy was " + (3/guesses);
alert(stats)