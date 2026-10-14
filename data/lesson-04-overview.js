window.LESSON = {
  id: 'lg-04-overview',
  title: 'Practice · Overview',
  vocab: ['overview', 'trend-verbs', 'crossing', 'forecast'],
  subtitle: 'Line Graphs · знаходимо дві головні історії графіка й записуємо їх 1–2 реченнями без цифр.',

  intro: [
    { type: 'rule', title: 'Overview: формула', html:
      '<p>Overview — це <b>2 «історії»</b> графіка, записані <b>без цифр</b> (1–2 речення, зазвичай після Introduction).</p>' +
      '<ul><li><b>Історія 1</b> — загальний напрямок (<i>rose, fell, remained stable</i>) або лідер.</li>' +
      '<li><b>Історія 2</b> — найяскравіша ознака: перетин ліній, виняток, різкий стрибок, прогноз.</li>' +
      '<li>Фрази: <i>Overall, … , while / whereas …</i> · <i>The most striking feature is that …</i> · <i>It is clear that …</i></li>' +
      '<li>Не пиши: цифри, причини («because of…»), свою думку, «In conclusion».</li></ul>' },
    { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
      ['Overall, fossil fuels fell from 75% to 30%, while renewables rose from 18% to 58%.', 'Цифри — для Body. Overview їх не містить.', 'Overall, the share of electricity from fossil fuels declined steadily, while that of renewables increased.'],
      ['In conclusion, renewable energy is better for the planet.', 'Власна думка й «In conclusion» в Task 1 не потрібні.', 'The most striking feature is that renewables overtook fossil fuels in the late 2010s.'],
      ['Overall, the graph shows fossil fuels and renewables.', 'Немає жодної історії: що сталося з лініями?', 'Overall, fossil fuels fell while renewables rose, becoming the main source by 2025.']
    ] }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'з підказками', graph: 'uk',
    words: [['Overall,','Загалом,'],['while / whereas','тоді як'],['overtook','випередив'],['the main source','основне джерело']],
    lead: 'Дві лінії, один перетин: найпростіший графік для відпрацювання формули.',
    blocks: [
      { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
          ['link', 'Overall,'], ['type', 'the share of electricity from fossil fuels fell steadily'], ['verb', 'while'], ['what', 'that of renewables rose, overtaking fossil fuels in the late 2010s'], '.' ],
        legend: [['type','історія 1: загальний напрямок'],['link','вступне слово'],['verb','сполучник контрасту'],['what','історія 2: ключова ознака (перетин)']],
        note: 'Цифр немає. Слово <i>that</i> замінює повторення <i>the share</i>. «The late 2010s» замість точного року, бо дані подано з кроком у 5 років.' },

      { type: 'pick', tag: 'Крок 2 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
          ['Fossil fuels fell steadily over the whole period.', 1, 'Загальний напрямок — історія 1.'],
          ['Renewables rose and overtook fossil fuels in the late 2010s.', 1, 'Перетин ліній — найяскравіша ознака, історія 2.'],
          ['Fossil fuels fell from 75% to 30%.', 0, 'Цифри — деталь для Body paragraph.'],
          ['The government built more wind farms, so renewables grew.', 0, 'Причина, якої немає на графіку. Task 1 описує тільки дані.'],
          ['Renewables were at 24% in 2005.', 0, 'Окрема точка даних: теж деталь для Body.']] },

      { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', bank: ['fell', 'while', 'overtook', 'main'], items: [
          { pre: 'Overall, the share of electricity from fossil fuels ', post: ' steadily.', ok: ['fell', 'declined', 'decreased', 'dropped'], why: 'Минулий час: графік показує період із минулого.' },
          { pre: 'Overall, fossil fuels fell, ', post: ' the share of renewables rose.', ok: ['while', 'whereas'], why: '<i>while / whereas</i> — для контрасту. Не «in the time when».' },
          { pre: 'The most striking feature is that renewables ', post: ' fossil fuels around 2018.', ok: ['overtook', 'surpassed', 'exceeded'], why: '<i>overtook</i> без прийменника. Не «overtook with».' },
          { pre: 'By 2025, renewables had become the ', post: ' source of electricity.', ok: ['main', 'leading', 'primary', 'dominant', 'largest'], why: '<i>main / leading / primary source</i> — природні колокації.' }
        ] },

      { type: 'choose', tag: 'Крок 4 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, the share of electricity from fossil fuels declined steadily, while renewables grew and became the main source by the end of the period.', 1, 'Дві історії, без цифр, правильна мова.'],
            ['Overall, fossil fuels fell from 75% to 30%, while renewables rose from 18% to 58%.', 0, 'Тут цифри. Їх місце — у Body paragraphs.'],
            ['In conclusion, renewable energy is better for the environment, so fossil fuels should be replaced.', 0, 'Власна думка й «In conclusion». Task 1 це не оцінює.'],
            ['Overall, the graph shows fossil fuels and renewables over time.', 0, 'Немає історії: що сталося з лініями?']] },
          { q: 'Як сказати «у той час як» у контрасті?', opts: [
            ['while / whereas', 1, 'Саме ці сполучники виражають контраст між двома тенденціями.'],
            ['in the time when', 0, 'Калька з української («в той час як»).'],
            ['because', 0, 'because — причина. Графік причин не показує.']] },
          { q: 'Який опис перетину ліній безпечний?', opts: [
            ['Renewables overtook fossil fuels around 2018.', 1, '<i>around</i> — безпечно, бо дані подано кожні 5 років.'],
            ['Renewables overtook fossil fuels exactly in 2018.', 0, 'На графіку немає точки 2018. Не вигадуй точні роки.'],
            ['Renewables overtook with fossil fuels in 2018.', 0, '<i>overtake</i> — перехідне дієслово: overtook <b>fossil fuels</b>, без with.']] }
        ] },

      { type: 'rewrite', tag: 'Крок 5 · Перепиши і порівняй', tagc: 'blue', title: 'Підвищ рівень до Band 7',
        given: 'Fossil fuels went down and renewables went up.',
        task: 'Перепиши речення як Overview: почни з <i>Overall,</i>, використай точніші дієслова та сполучник контрасту.',
        models: [
          ['Модель A', '<mark>Overall</mark>, the share of electricity from fossil fuels <mark>declined steadily</mark>, <mark>whereas</mark> that of renewables <mark>increased</mark>.'],
          ['Модель B', '<mark>It is clear that</mark> the UK <mark>moved away from</mark> fossil fuels, with renewables <mark>overtaking</mark> them in the late 2010s.']],
        check: ['Є Overall або схожа фраза', 'Дієслова точніші, ніж went up / went down', 'Є сполучник контрасту', 'Немає цифр'] },

      { type: 'build', tag: 'Крок 6 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          ['Overall, the share of fossil fuels fell steadily, while that of renewables increased.', 'Overall, the share of fossil fuels steadily fell, while that of renewables increased.'],
          ['The most striking feature is that renewables overtook fossil fuels around 2018.', 'The most striking feature is that around 2018 renewables overtook fossil fuels.'],
          'By 2025, renewable sources had become the main source of electricity.'] }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'менше підказок', graph: 'de',
    words: [['the only … to decline','єдиний, що знизився'],['overtook … as the most used','випередив і став найпоширенішим'],['remained the least','залишався найменшим'],['In contrast,','Навпаки,']],
    lead: 'Чотири лінії: головне — не потонути в деталях і знайти виняток.',
    blocks: [
      { type: 'pick', tag: 'Крок 1 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
          ['Consumption of petrol, diesel and natural gas rose, while coal was the only fuel to decline.', 1, 'Загальний напрямок + виняток (coal). Історія 1.'],
          ['Petrol overtook coal as the most used fuel by 1990 and stayed on top until the end.', 1, 'Зміна лідера — найяскравіша ознака. Історія 2.'],
          ['Petrol was the most consumed fuel throughout the period.', 0, 'Невірно: у 1985 році лідером було вугілля (coal). Перевіряй початок графіка!'],
          ['Diesel rose from 20 to 48 million tonnes.', 0, 'Цифри — для Body.'],
          ['Coal use fell because Germany closed its mines.', 0, 'Причина, якої немає на графіку.']] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Читаємо графік уважно', qs: [
          { q: 'Яке твердження правильне?', opts: [
            ['Natural gas remained the least consumed fuel throughout the period.', 1, 'У всіх роках лінія природного газу найнижча.'],
            ['Diesel was the least consumed fuel throughout the period.', 0, 'Дизель вищий за газ у всіх роках: 20 проти 10 у 1985, 48 проти 28 у 2015.'],
            ['Coal was the least consumed fuel by 2015.', 0, 'У 2015 вугілля (30) все ще вище за газ (28). Різниця мала, але вона є.']] },
          { q: 'Який варіант оформлений правильно?', opts: [
            ['Overall, petrol, diesel and gas rose. In contrast, coal fell.', 1, '<i>In contrast</i> на початку нового речення, з комою після нього.'],
            ['Overall, petrol, diesel and gas rose, in contrast, coal fell.', 0, 'Кома замість крапки: <i>in contrast</i> не поєднує два речення.'],
            ['Overall, petrol, diesel and gas rose, so coal fell.', 0, '<i>so</i> виражає наслідок, а не контраст.']] },
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, consumption of three fuels increased, whereas coal was the only fuel to fall. Petrol overtook coal as the most used fuel by 1990.', 1, 'Дві історії без цифр.'],
            ['Overall, petrol was always the most popular fuel in Germany.', 0, 'Фактична помилка: у 1985 році лідером було вугілля.'],
            ['Overall, there are four fuels and all of them changed.', 0, 'Нічого не говорить про напрямок змін.']] }
        ] },

      { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'Overall, consumption of three fuels ', post: ', with coal being the only exception.', ok: ['rose', 'increased', 'grew'], why: 'Минулий час, дієслово зміни.' },
          { pre: 'Coal was the ', post: ' fuel to decline.', ok: ['only'], why: '<i>the only … to decline</i>: типова модель для винятку.' },
          { pre: 'Petrol ', post: ' coal as the most widely used fuel by 1990.', ok: ['overtook', 'surpassed', 'replaced'], why: '<i>overtook / surpassed</i> без прийменника.' },
          { pre: 'Natural gas remained the ', post: ' used fuel throughout the period.', ok: ['least'], why: '<i>the least used</i>: найменше використовуваний.' }
        ] },

      { type: 'write', tag: 'Крок 4 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview (2 речення)',
        task: 'Дві історії: загальний напрямок + виняток або зміна лідера. Без цифр.',
        hint: 'Історія 1: <i>three fuels rose, coal fell</i>. Історія 2: <i>petrol overtook coal / gas was the lowest</i>.',
        models: [
          ['Модель A', '<mark>Overall</mark>, consumption of petrol, diesel and natural gas <mark>rose</mark>, <mark>whereas</mark> coal was the only fuel to <mark>decline</mark>. Petrol <mark>overtook</mark> coal as the most used fuel by 1990 and <mark>remained at the top</mark> until 2015.'],
          ['Модель B', 'Three of the four fuels <mark>became more widely used</mark>, <mark>while</mark> coal consumption <mark>fell steadily</mark>. By 2015, petrol was clearly the <mark>most consumed</mark> fuel and natural gas the <mark>least</mark>.']],
        check: ['Є дві історії (напрямок + ключова ознака)', 'Немає цифр', 'Немає причин і власної думки', 'Є сполучник контрасту (while / whereas / In contrast)'] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, consumption of petrol, diesel and natural gas increased, whereas coal declined.',
          'Petrol overtook coal as the most used fuel by 1990 and stayed on top until the end.'] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
    words: [['is projected to','за прогнозом'],['remains the highest','залишається найвищою'],['are expected to converge','мають зблизитися'],['It is clear that','Очевидно, що']],
    lead: 'Прогноз змінює мову: замість will використовуємо is projected to / is expected to.',
    blocks: [
      { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview (2 речення)',
        task: 'Знайди дві історії: <b>1)</b> що відбувається з усіма трьома країнами, <b>2)</b> як співвідносяться Японія, США та Швеція. Без цифр.',
        hint: 'Історія 1: <i>the proportion rises in all three countries</i>. Історія 2: <i>Japan stays highest; the USA and Sweden are projected to become almost equal</i>.',
        models: [
          ['Модель A', '<mark>Overall</mark>, the proportion of people aged 65 and over <mark>rises in all three countries</mark> and is <mark>projected to</mark> keep increasing until 2040. Japan <mark>remains the highest throughout</mark>, whereas the USA and Sweden are <mark>expected to converge</mark> by the end of the period.'],
          ['Модель B', '<mark>It is clear that</mark> the share of older people grows steadily in all three countries, <mark>and this trend is forecast to continue</mark>. Japan stays well ahead of the other two, whose figures are predicted to become almost identical.']],
        after: 'Зверни увагу: <i>is projected to / is expected to / is forecast to</i>, а не «will». У Task 1 ми не знаємо майбутнього, а передаємо прогноз із графіка.',
        check: ['Є дві історії', 'Немає цифр', 'Для майбутнього використано is projected to / is expected to', 'Японія згадана як найвища'] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Перевір себе', qs: [
          { q: 'Яка форма правильна для прогнозу?', opts: [
            ['The proportion is projected to increase.', 1, 'Нейтральна форма для прогнозів у Task 1.'],
            ['The proportion will increase for sure.', 0, '<i>for sure</i> — упевненість, якої графік не дає. Прогноз — це припущення.'],
            ['The proportion increased by 2040.', 0, 'Минулий час для майбутньої дати — помилка.']] },
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, the proportion of people aged 65 and over rises in all three countries. Japan remains the highest, while the USA and Sweden are projected to become similar.', 1, 'Напрямок + співвідношення країн, без цифр.'],
            ['Overall, Japan has 36% and the USA 23% in 2020.', 0, 'Цифри й одна точка даних: це не Overview.'],
            ['Japan will be the oldest country in the world.', 0, 'Інформація поза графіком + will.']] }
        ] },

      { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, the proportion of people aged 65 and over rises in all three countries.',
          ['Japan remains the highest, while the USA and Sweden are projected to become similar.', 'Japan remains the highest, while Sweden and the USA are projected to become similar.']] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Знаходити <b>2 історії</b> на графіку: напрямок + ключова ознака</li>' +
      '<li>Писати Overview <b>без цифр і без причин</b></li>' +
      '<li>Говорити про прогноз через <i>is projected to</i>, а не <i>will</i></li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Main body 1 — як розписати першу групу ліній з цифрами.</p>' }
  ]
};
