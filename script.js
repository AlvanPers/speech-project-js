/* 10 x 4  array of phrase */
const lozung = [
    ['Красота девушки - не в бровях, а в трудоднях!'],
    ['Удвой удой, утрой удой, а то пойдешь ты на убой!'],
    ['Жди не дождя и грома, а жди агронома!'],
    ['Все пути ведут к коммунизму! По путям не ходить!'],
    ['Течёт вода Кубань-реки, куда велят большевики.'],
    ['Прошла зима, настало лето - спасибо партии за это.'],
    ['Сегодня ты играешь джаз, а завтра родину продашь! '],
    ['Рубль, сбереженный в сберкнижке тобой, Отчизне поможет в стройке большой!'],
    ['Народ и партия - едины, В любой борьбе непобедимы! '],
    ['За тепло и ласку И за детский сад Партии спасибо Ото всех ребят!'],
    ['Не можешь - научим, не хочешь - заставим: позорить отряд не дадим!'],
    ['Хочешь быть передовым? Сей квадратно гнездовым!'],
    ['Наша главная задача,молотьба и хлебосдача!'],
    ['Самогон ваш враг - Гоните его! '],
    ['Если делать - то по-большому!'],
    ['Встретим покупателя полновесной гирей!'],
    ['Сталевар, помни! Вся сила - в плавках!'],
    ['Поел - дай дpугому!'],
    ['Кончил - оботри станок!'],
    ['Берегите природу - мать вашу!'],
    ['Спасибо товарищу Сталину за счастливое детство!'],
    ['Молодежь! Тебя ждет Сибирь!'],

];


const phraseArr = [
    [' Товарищи!', ' реализация намеченных планов', ' играет важную роль в формировании', ' существующих финансовых и административных условий'],
    [' С другой стороны', ' рамки и место обучения кадров', ' требуют от нас анализа', ' дальнейших направлений развития'],
    [' Равным образом', ' постоянный количественный рост и сфера нашей активности', ' требуют определения и уточнения', ' системы массового участия'],
    [' Не следует, однако, забывать, что', ' сложившаяся структура организации', ' способствуют подготовке и реализации', ' позиций, занимаемых участниками в отношении поставленных задач'],
    [' Таким образом', ' новая модель организационной деятельности', ' обеспечивает широкому кругу специалистов участие в формировании', ' новых предложений'],
    [' Повседневная практика показывает, что', ' дальнейшее развитие различных форм деятельности', ' позволяет выполнить важные задания по разработке', ' направлений прогрессивного развития'],
    [' Значимость этих проблем настолько очевидна, что', ' постоянное информационно-пропагандистское обеспечение нашей деятельности', ' в значительной степени обусловливает создание', ' системы обучения кадров, соответствующей насущным потребностям'],
    [' Разнообразный и богатый опыт', ' укрепления и развития структуры', ' позволяет оценить значение', ' соответствующий условий активизации'],
    [' Задача организации, в особенности же', ' консультация с широким активом', ' представляет собой интересный эксперимент проверки', ' модели развития'],
    [' Идейные соображения высшего порядка, а также', ' начало повседневной работы по формированию позиции', ' влечет за собой процесс внедрения и модернизации', ' форм воздействия'],
];
let randOne, randTwo, randThree, randFour = 0;
let speech, cashOneColumn, cashTwoColumn, cashThreeColumn, cashFourColumn = '';
var indexPhrase = 15;
let value = phraseArr[0][0];

const select1 = document.querySelector('.select-1');

function marqueescrpt() {
    randLozung = Math.floor(Math.random() * lozung.length);
    document.getElementById('marquee').innerHTML = lozung[randLozung];
}


marqueescrpt();
doc();
select1.onchange = function () {
    let item = Number(select1.value);
    // console.log(item);
    // let index = select1.selectedIndex;
    // console.log(index);
    // let options = select1.options;
    // console.log(options[index].value);

    indexPhrase = Number(this.value);
    console.log(indexPhrase);
    doc();
}

function doc() {

    for (i = 0; i < indexPhrase; i++) {

        randOne = Math.floor(Math.random() * phraseArr.length);
        randTwo = Math.floor(Math.random() * phraseArr.length);
        randThree = Math.floor(Math.random() * phraseArr.length);
        randFour = Math.floor(Math.random() * phraseArr.length);

        if (phraseArr[randOne][0] === cashOneColumn) { i--; continue; }

        if (phraseArr[randTwo][1] === cashTwoColumn) { i--; continue; }

        if (phraseArr[randThree][2] === cashThreeColumn) { i--; continue; }

        if (phraseArr[randFour][3] === cashFourColumn) { i--; continue; }

        // так не катит потому что document.write перерисовывает всю страницу
        // console.log(`${phraseArr[randOne][0]} ${phraseArr[randTwo][1]} ${phraseArr[randThree][2]} ${phraseArr[randFour][3]}. `);
        // document.writeln(`${phraseArr[randOne][0]} ${phraseArr[randTwo][1]} ${phraseArr[randThree][2]} ${phraseArr[randFour][3]}. `);

        value = value + phraseArr[randOne][0] + phraseArr[randTwo][1] + phraseArr[randThree][2] + phraseArr[randFour][3] + '.';
        // console.log(value);


        cashOneColumn = phraseArr[randOne][0];
        cashTwoColumn = phraseArr[randTwo][1];
        cashThreeColumn = phraseArr[randThree][2];
        cashFourColumn = phraseArr[randFour][3];

    }
    document.getElementById('speech').innerHTML = value;
    value = "";
}
