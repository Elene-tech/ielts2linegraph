(function () {
  var CHK = ['Є старт: рік + цифра', 'Є фініш: рік + цифра', 'Є поворот або ключова ознака (перетин, пік, спад)', 'Дієслова різні, прислівники відповідають розміру зміни', 'Прийменники to / by / of / at / from…to правильні', 'Минулий час для фактів (і is projected to для прогнозу)', 'Немає причин і переліку всіх точок'];
  window.LESSON = {
    id: 'lg-06-body-1',
    title: 'Practice · Main Body 1',
    subtitle: 'Line Graphs · пишемо перший Body paragraph на трьох графіках. Слова й логіка допомагають, а текст пишеш ти.',
    vocab: ['body-templates', 'trend-verbs', 'strength', 'numbers', 'nouns'],

    intro: [
      { type: 'rule', title: 'Логіка Body paragraph', html:
        '<p>Один Body = <b>одна група ліній</b> + <b>2–3 речення</b>. У кожному абзаці одна й та сама логіка:</p>' +
        '<ol style="margin-left:20px"><li><b>Старт</b>: рік + значення</li><li><b>Зміна</b>: дієслово + прислівник + to + значення</li><li><b>Поворот</b>: пік, мінімум, перетин (якщо він є)</li><li><b>Фініш</b>: рік + значення (+ масштаб зміни або порівняння)</li></ol>' +
        '<p class="small" style="margin-top:8px">Спочатку тобі допомагають плани й фрази. З кожним раундом підказок менше. У кінці кожного раунду порівнюєш свій абзац із моделлю.</p>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · UK ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'uk',
      lead: 'Body 1 = fossil fuels. Дві лінії, одна група на абзац. Усі підказки відкриті.',
      words: [['accounted for','становили'],['by far the largest share','безперечно найбільша частка'],['steadily','рівномірно'],['more quickly','швидше'],['a fall of … percentage points','спад на … відсоткових пунктів'],['over the period','протягом періоду']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Fossil fuels: крок за кроком', steps: [
            { title: 'Старт', ua: 'Рік і значення першої точки.', frame: 'In [year], fossil fuels accounted for [figure] of …' },
            { title: 'Зміна', ua: 'Напрямок + прислівник + кінцева точка відрізка.', frame: 'This figure then fell steadily to [figure] in [year] …' },
            { title: 'Поворот', ua: 'Де змінюється темп?', frame: '… before dropping more quickly to [figure] by [year].' },
            { title: 'Фініш і масштаб', ua: 'Підсумкова різниця в percentage points.', frame: '…, a fall of [number] percentage points over the period.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про fossil fuels',
          task: '2–3 речення. Спирайся на план вище й графік.',
          hint: 'Загальна зміна: 75 − 30 = 45 percentage points. Темп спаду зростає після 2015.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'In 2000, fossil fuels <mark>accounted for 75%</mark> of the UK’s electricity generation, by far the largest share. This figure then <mark>fell steadily to 60% in 2010 and 52% in 2015</mark>, before <mark>dropping more quickly to 40% in 2020 and 30% in 2025</mark>, <mark>a fall of 45 percentage points</mark> over the period.'],
            ['Модель B', 'Fossil fuels were the dominant source of electricity at the start of the period, <mark>standing at 75% in 2000</mark>. There was <mark>a steady decline</mark> over the next fifteen years, <mark>to 52% in 2015</mark>, and the fall then accelerated, leaving fossil fuels at <mark>only 30% by 2025</mark>.']],
          after: 'Порівняй: чи є в тебе старт, поворот і фініш? Чи вибрав(ла) ти кілька точок, а не всі? Модель A використовує дієслова, модель B починається з іменників: обидва варіанти хороші.',
          check: CHK }
      ] },

    /* ---------- Раунд 2 · Germany ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'de',
      lead: 'Body 1 = coal і petrol (дві найвищі лінії на старті). Фраз менше: тільки логіка.',
      words: [['the most used fuel','найбільш використовуване паливо'],['overtook','випередив'],['dipped to','трохи впав до'],['apart from','за винятком'],['whereas','тоді як'],['from 1990 onwards','починаючи з 1990']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Coal і petrol: крок за кроком', steps: [
            { title: 'Старт обох ліній', ua: 'Яка лінія була вищою на початку і якими були значення?' },
            { title: 'Coal: напрямок і фініш', ua: 'Спадає чи зростає? До якого значення?' },
            { title: 'Petrol: зміна, поворот, фініш', ua: 'Є невеликий спад (1995)? Яке підсумкове значення?' },
            { title: 'Перетин', ua: 'Коли petrol обігнав coal і що з ним було далі?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про coal і petrol',
          task: '2–3 речення про дві лінії одразу: використай <i>whereas / in contrast</i>.',
          hint: 'Coal: 55 → 30 (−25). Petrol: 45 → 50 → 47 → 62. Petrol випередив coal між 1985 і 1990.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Coal was the most consumed fuel in 1985, <mark>at 55 million tonnes of oil equivalent</mark>, but its use then <mark>fell steadily to 30 million by 2015</mark>. Petrol, <mark>in contrast</mark>, started at 45 million, <mark>rose to 50 million</mark> in 1990 and <mark>overtook coal</mark>. Despite a slight dip to 47 million in 1995, it <mark>climbed consistently to 62 million</mark>, making it the most used fuel <mark>from 1990 onwards</mark>.'],
            ['Модель B', 'In 1985, coal led with 55 million tonnes, followed by petrol at 45 million. Coal then <mark>declined steadily to 30 million in 2015, a fall of 25 million</mark>, <mark>whereas</mark> petrol rose, <mark>apart from a small dip in 1995</mark>, to reach 62 million, having <mark>overtaken coal by 1990</mark>.']],
          after: 'Тут у тебе дві лінії в одному абзаці. Головна навичка: порівнювати їх, а не писати два окремі списки.',
          check: CHK }
      ] },

    /* ---------- Раунд 3 · 65+ ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
      lead: 'Body 1 = Japan (лінія лідера). Графік містить прогноз: <i>is projected to / is expected to</i>.',
      words: [['the highest … throughout','найвищий протягом усього періоду'],['more than doubling','більше ніж подвоївшись'],['is projected to reach','за прогнозом досягне'],['growth is expected to slow','зростання, як очікується, сповільниться'],['in two decades','за два десятиліття']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Japan: план (за потреби)', collapsed: true, steps: [
            { title: 'Старт і позиція', ua: 'Яке значення на початку? Чи Японія вища за інших?' },
            { title: 'Фактичний тренд до 2020', ua: 'Яка зміна? Чи можна використати «more than doubled»?' },
            { title: 'Прогноз до 2040', ua: 'Яке значення за прогнозом? Чи темп змінюється?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про Japan',
          task: '2–3 речення. Фактичні дані (до 2020) у минулому часі, прогноз із <i>is projected to / is expected to</i>.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Japan had <mark>the highest proportion of people aged 65 and over throughout the period</mark>. The figure rose from 17% in 2000 to 36% in 2020, <mark>more than doubling in two decades</mark>, and <mark>is projected to reach 42% by 2040</mark>, although <mark>growth is expected to slow</mark> after 2030.'],
            ['Модель B', 'Japan started ahead of the other two countries, at 17% in 2000, and its share <mark>increased steadily to 36% in 2020</mark>. <mark>Projections suggest</mark> a further rise to 42% by 2040, but at a slower pace.']],
          after: 'Ти вже тричі написав(ла) Body 1 на різних графіках: зверни увагу, що структура абзацу щоразу та сама. Змінюються лише слова й цифри.',
          check: CHK.concat(['Фактичні роки в минулому, прогноз через projected / expected']) }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Будувати Body за схемою <b>старт → зміна → поворот → фініш</b></li>' +
        '<li>Вибирати кілька ключових точок замість переліку всіх</li>' +
        '<li>Писати про прогноз через <i>is projected to</i></li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Practice · Main body 2 — друга група ліній і порівняння з першою.</p>' }
    ]
  };
})();
