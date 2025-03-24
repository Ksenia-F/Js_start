let cost = prompt('Напишите стоимость товара');
let many = prompt('Сколько у вас денежных средств?');

if ((cost < 0) || (many < 0) || isNaN(cost) || isNaN(many) ) {
    console.log('Неверный формат ввода');
} else {
    if (cost == many) {
        console.log('Покупка совершена. ');
    } else if (cost > many) {
        console.log('До покупки не хватает ' + (cost - many) + 'р.');
    } else {
        console.log('Покупка совершена. Сдача' + (many - cost) + 'р.');
    }
}

let answer = prompt('Введите число');
if (answer > 0) {
    alert("1")
} else if (answer < 0) {
    alert("-1")
} else {
    alert("0")
}

let rezult = (a + b < 4) ? 'Мало' : 'Много';