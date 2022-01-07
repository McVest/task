// Task 1
// const a = {};
// const b = {};
// console.log(a);   

// Task 2
// На одномірній координатній прямій задано два відрізки: AB і CD. Написати умову, яка визначає, чи вони перетинаються (мають хоча б одну спільну точку).
const init = () => {
    let points = [];
    let array = ["Кордината Х начала первого отрезка:", "Кордината Y начала первого отрезка:", "Кордината Х конца первого отрезка:", "Кордината Y конца первого отрезка:", "Кордината Х начала второго отрезка:", "Кордината Y начала второго отрезка:", "Кордината Х конца второго отрезка:", "Кордината Y конца второго отрезка:"]
    for (let i = 0; i < array.length; i += 2) {
        points.push({ x: Number(prompt(array[i])), y: Number(prompt(array[i + 1])) });
    }
    tempCheck(points);
}

const crossProduct = (ax, ay, bx, by) => {
    return ax * by - bx * ay;
}

const IntersectionCheck = (p1, p2, p3, p4) => {

    var v1, v2, v3, v4;

    v1 = crossProduct(p4.x - p3.x, p4.y - p3.y, p1.x - p3.x, p1.y - p3.y);
    v2 = crossProduct(p4.x - p3.x, p4.y - p3.y, p2.x - p3.x, p2.y - p3.y);
    v3 = crossProduct(p2.x - p1.x, p2.y - p1.y, p3.x - p1.x, p3.y - p1.y);
    v4 = crossProduct(p2.x - p1.x, p2.y - p1.y, p4.x - p1.x, p4.y - p1.y);

    if (v1 * v2 < 0 && v3 * v4 < 0)
        return true;
    else
        return false;
}

const tempCheck = (points) => {
    if (IntersectionCheck(points[0], points[1], points[2], points[3])) {

        alert('Отрезки пересекаются ');
    }
    else {
        alert("Отрезки не пересекаются");
    }
}

let task2 = document.getElementById('task2');
task2.addEventListener('click', () => {
    init();
});

// Task 3
// Написати функцію вищого порядку revert, яка приймає на вхід деяку функцію f, що має довільну кількість параметрів, і повертає функцію, результат якої буде завжди протилежний результату f.
const revert = f => (...arg) => -f(...arg);
const f = (a, b) => a * b;
const x = revert(f);
const temp = [f(4,5), x(4,5)];

alert(temp);


// Task 4
//Написати функцію бінарного пошуку (пошуку індекса елемента у відсортованому масиві)
// let sortedArray = [1,2,3,4,5,6,7,8,9,10];
// function binarySearch(sortedArray, key){
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
//             return middle;  
//         } else if (sortedArray[middle] < key) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(sortedArray, Math.floor(Math.random() * 10)));

// Такой способ я использовал когда делал игру => https://mcvest.github.io/HW_general/hw-js-cycles/index.html