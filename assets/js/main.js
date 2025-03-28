// Задание 1
let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        console.log(i + " ");
    }
}

// Задание 2
function min(a, b) {
    return a < b ? a : b;
}
console.log('Наименьшее число ' + min(a,b));

// Задание 3
let styles = ['Джас', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

const seredina = Math.floor(styles.length / 2);
styles[seredina] = 'Классика';
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);