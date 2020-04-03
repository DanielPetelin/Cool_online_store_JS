var goods = {
    "100" : {
        "name" : "Банан",
        "cost" : 30,
        "img" : "https://img.icons8.com/cotton/256/000000/sweet-banana.png",
        "sklad" : "Да"
    },
    "101" : {
        "name" : "Помидор",
        "cost" : 40,
        "img" : "https://img.icons8.com/cotton/256/000000/tomato--v2.png",
        "sklad" : "Нет"
    },
    "102" : {
        "name" : "Яблоко",
        "cost" : 35,
        "img" : "https://img.icons8.com/cotton/256/000000/apple--v2.png",
        "sklad" : "Да"
    }
};

console.log(goods);
var out = '';

for (let key in goods) {
    out += 'Название: ' + goods[key].name + '<br>';
    out += 'Цена: ' + goods[key].cost + '<br>';
    out += 'Наличие: ' + goods[key].sklad + '<br>';
    out += '<img src="' + goods[key].img + '">'
    out += '<hr>'
};

document.querySelector('#out').innerHTML = out;