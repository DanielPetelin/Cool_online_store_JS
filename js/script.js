var goods = {
    "100" : {
        "name" : "Банан",
        "cost" : 30,
        "img" : "https://img.icons8.com/cotton/256/000000/sweet-banana.png",
        "country" : "Россия",
        "sklad" : "Да"
    },
    "101" : {
        "name" : "Помидор",
        "cost" : 40,
        "img" : "https://img.icons8.com/cotton/256/000000/tomato--v2.png",
        "country" : "Россия",
        "sklad" : "Нет"
    },
    "102" : {
        "name" : "Яблоко",
        "cost" : 35,
        "img" : "https://img.icons8.com/cotton/256/000000/apple--v2.png",
        "country" : "Россия",
        "sklad" : "Да"
    }
};

// console.log(goods);
var out = '';

out += '<div class="pricing-table row">'
for (let key in goods) {
    out += '<div class="col col-md-6 col-lg-4">'
    out += '<div class="package featured">'
    out += '<p class="package-name">' + goods[key].name + '<p>';
    out += '<img src="' + goods[key].img + '">';
    out += '<hr>'
    out += '<p class="price">' + goods[key].cost + '₽' + '<p>';
    out += '<p class="disclaimer">' + 'за штуку' + '</p>'
    out += '<hr>'
    out += '<ul class="features">'
    out += '<li>' + 'Страна: ' + goods[key].country + '<br>';
    out += '<li>' + 'Наличие: ' + goods[key].sklad + '<br>';
    out += '</ul>'
    out += '<hr>'
    out += '<button class="button-primary">Buy</button>'
    out += '</div>';
    out += '</div>';
};
out += '</div>';

document.querySelector('#out').innerHTML = out;