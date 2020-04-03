let goods = {
    "100" : {
        "name" : "Телевизор LG 49UM7090PLA",
        "cost" : 29990,
        "img" : "./images/download.jpg",
        "diagonal" : "49",
        "country" : "Россия",
        "town" : 'Таганрог',
        "sklad" : "Да"
    },
    "101" : {
        "name" : "Телевизор Samsung UE55RU7200U",
        "cost" : 49590,
        "img" : "./images/samsung.jpg",
        "diagonal" : "55",
        "country" : "Россия",
        "town" : 'Москва',
        "sklad" : "Да"
    },
    "102" : {
        "name" : "Телевизор Samsung UE32N5300AU",
        "cost" : 18990,
        "img" : "./images/comp.jpg",
        "diagonal" : "37",
        "country" : "Россия",
        "town" : 'Москва',
        "sklad" : "Да"
    },
    "103" : {
        "name" : "Аналоговый синтезатор Moog One 16",
        "cost" : 663720,
        "img" : "./images/Mongo.jpg",
        "country" : "США",
        "town" : 'Вашингтон',
        "sklad" : "Да"
    }
};

// console.log(goods);
let out = '';

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
    out += '<li>' + 'Город: ' + goods[key].town + '<br>';
    out += '<li>' + 'Наличие: ' + goods[key].sklad + '<br>';
    out += '<li>' + 'Диагональ: ' + goods[key].diagonal + ' "' + '<br>';
    out += '</ul>'
    out += '<hr>'
    out += '<button class="button-primary">Купить</button>'
    out += '</div>';
    out += '</div>';
};
out += '</div>';

document.querySelector('#out').innerHTML = out;