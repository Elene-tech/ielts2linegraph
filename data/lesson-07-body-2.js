(function () {
  var CHK = ['Є вступне слово або перехід до другої групи (in contrast, as for…)', 'Є старт і фініш із роком і цифрою', 'Є порівняння з першою групою або між лініями', 'Дієслова різні, прислівники відповідають розміру зміни', 'Прийменники to / by / of / at правильні', 'Минулий час для фактів (і is projected to для прогнозу)', 'Немає причин і переліку всіх точок'];
  window.LESSON = {
    id: 'lg-07-body-2',
    title: 'Practice · Main Body 2',
    subtitle: 'Line Graphs · пишемо другий Body paragraph: нова група ліній і порівняння з першою.',
    vocab: ['compare', 'crossing', 'linkers', 'body-templates', 'multiples'],

    intro: [
      { type: 'rule', title: 'Чим Body 2 відрізняється від Body 1', html:
        '<ul><li>Починай з <b>переходу</b>: <i>In contrast, … · Turning to … · As for …</i></li>' +
        '<li>Та сама схема: <b>старт → зміна → поворот → фініш</b>.</li>' +
        '<li>Додай <b>порівняння з Body 1</b>: <i>almost double the share of… · less than half the level of… · the gap narrowed</i>.</li>' +
        '<li>Кожну групу ліній описуємо в окремому абзаці. Не повертайся до першої групи цифрами.</li></ul>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · UK ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'uk',
      lead: 'Body 2 = renewables. Перехід від fossil fuels, зміна, перетин, порівняння на фініші.',
      words: [['in contrast','навпаки'],['started from a much lower base','починали з набагато нижчої бази'],['gradually','поступово'],['overtaken','випередили'],['almost double','майже вдвічі більше'],['an increase of … percentage points','зростання на … відсоткових пунктів']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Renewables: крок за кроком', steps: [
            { title: 'Перехід + старт', ua: 'Покажи контраст з fossil fuels і назви стартову точку.', frame: 'Renewables, in contrast, started from a much lower base, at [figure] in [year] …' },
            { title: 'Зміна', ua: 'Як змінювалась лінія в першій частині?', frame: '… and grew gradually to [figure] in [year].' },
            { title: 'Поворот / перетин', ua: 'Коли темп зріс? Коли renewables випередили fossil fuels?', frame: 'The rise then accelerated, … by which time renewables had overtaken fossil fuels.' },
            { title: 'Фініш + порівняння', ua: 'Підсумок і порівняння з іншою групою.', frame: 'By 2025, they stood at [figure], almost double the share of fossil fuels.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про renewables',
          task: '2–3 речення. Не повторюй цифри fossil fuels, лише порівняй.',
          hint: 'Renewables: 18 → 30 (2010) → 40 (2015) → 50 (2020) → 58. До 2020 renewables уже випередили fossil fuels. У 2025 вони майже вдвічі більші (58 проти 30).',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Renewables, <mark>in contrast</mark>, started from a much lower base, at 18% in 2000, and <mark>grew gradually to 30% in 2010</mark>. The rise then accelerated, reaching 40% in 2015 and 50% in 2020, <mark>by which time renewables had overtaken fossil fuels</mark>. By 2025, they stood at 58%, <mark>almost double the share of fossil fuels</mark>.'],
            ['Модель B', 'Renewable sources <mark>moved in the opposite direction</mark>. Their share rose from 18% in 2000 to 30% in 2010, and growth then picked up, with the figure <mark>climbing to 50% in 2020</mark>. Renewables finished the period at 58%, <mark>an increase of 40 percentage points</mark>.']],
          after: 'Порівняй: чи є в тебе перехід до другої групи? Чи згадав(ла) ти перетин? Чи було порівняння з fossil fuels?',
          check: CHK }
      ] },

    /* ---------- Раунд 2 · Germany ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'de',
      lead: 'Body 2 = diesel і natural gas (дві нижчі лінії). Фраз менше: тільки логіка.',
      words: [['respectively','відповідно'],['more than doubled','зросло більш ніж удвічі'],['almost tripled','зросло майже втричі'],['surpassed','перевищив'],['remained the least used','залишався найменш використовуваним']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Diesel і natural gas: крок за кроком', steps: [
            { title: 'Перехід + старт обох ліній', ua: 'Звідки стартують diesel і gas порівняно з coal і petrol?' },
            { title: 'Diesel: зміна і фініш', ua: 'Яка загальна зміна? Чи можна сказати «more than doubled»?' },
            { title: 'Перетин', ua: 'Коли diesel випередив coal?' },
            { title: 'Gas: фініш і ранжування', ua: 'Яка зміна і яке місце gas серед усіх чотирьох?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про diesel і natural gas',
          task: '2–3 речення. Використай <i>respectively</i> для двох значень.',
          hint: 'Diesel: 20 → 48. Gas: 10 → 28. Diesel випередив coal між 2000 і 2005. Gas найнижчий весь період.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Diesel and natural gas were the two least used fuels in 1985, <mark>at 20 and 10 million tonnes respectively</mark>. Both rose steadily, with diesel <mark>more than doubling to 48 million by 2015</mark> and <mark>overtaking coal in the mid-2000s</mark>. Natural gas <mark>almost tripled to 28 million</mark> but <mark>remained the least used fuel throughout the period</mark>.'],
            ['Модель B', '<mark>Starting from lower levels</mark> than coal and petrol, diesel rose from 20 million tonnes in 1985 to 48 million in 2015, <mark>an increase of 28 million</mark>, while natural gas grew more slowly, from 10 to 28 million. Diesel <mark>surpassed coal between 2000 and 2005</mark>, whereas gas stayed in last place.']],
          after: 'Зверни увагу: перетин diesel і coal ми описуємо через <i>between 2000 and 2005</i>, а не точним роком: на графіку немає цієї точки.',
          check: CHK }
      ] },

    /* ---------- Раунд 3 · 65+ ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
      lead: 'Body 2 = USA і Sweden. Графік із прогнозом: <i>is projected to / are expected to</i>.',
      words: [['started from a higher base','починала з вищої бази'],['the gap is expected to narrow','розрив, як очікується, скоротиться'],['are projected to draw level','за прогнозом зрівняються'],['respectively','відповідно'],['by 2035','до 2035 року']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'USA і Sweden: план (за потреби)', collapsed: true, steps: [
            { title: 'Перехід + старт обох країн', ua: 'Хто стартує вище і наскільки?' },
            { title: 'Фактичні дані до 2020', ua: 'Яка динаміка? Яка різниця в 2020?' },
            { title: 'Прогноз', ua: 'Коли й на якому рівні країни зрівнюються?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про USA і Sweden',
          task: '2–3 речення. Не повторюй цифри Японії.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Sweden <mark>started from a higher base than the USA</mark>, at 15% <mark>compared with</mark> 12% in 2000. Both countries saw steady increases, reaching 26% and 23% <mark>respectively</mark> in 2020. According to projections, <mark>the gap between them is expected to narrow</mark>, and both are <mark>projected to reach 31% by 2040</mark>.'],
            ['Модель B', 'The USA and Sweden followed similar upward trends, although the figure for Sweden was slightly higher until 2030. By 2035 the two countries <mark>are expected to draw level at 30%</mark>, and they are forecast to remain together at 31% in 2040.']],
          after: 'Це третій Body 2 на різних даних: ти вже бачиш, що для будь-якого графіка діє одна й та сама логіка.',
          check: CHK.concat(['Для майбутніх років: projected / expected / forecast']) }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Переходити до другої групи ліній: <i>in contrast, as for…</i></li>' +
        '<li>Описувати перетини через <i>overtook / drew level / the gap narrowed</i></li>' +
        '<li>Порівнювати групи: <i>almost double, respectively</i></li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: фінальний урок — повна відповідь Introduction + Overview + Body 1 + Body 2 самостійно, за 20 хвилин.</p>' }
    ]
  };
})();
