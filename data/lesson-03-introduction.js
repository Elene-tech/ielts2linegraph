window.LESSON = {
  id: 'lg-03-introduction',
  title: 'Practice · Introduction',
  subtitle: 'Line Graphs · тренуємо перше речення відповіді на трьох графіках: від розбору прикладу до самостійного написання.',

  intro: [
    { type: 'rule', title: 'Introduction: формула', html:
      '<p>Introduction — це <b>1–2 речення</b>, у яких ти <b>своїми словами</b> кажеш, що показує графік. Без цифр, без висновків: вони будуть далі.</p>' +
      '<ul><li><b>The line graph</b> + <b>shows / illustrates / compares / presents</b> + <b>що саме</b> (тема + одиниці) + <b>коли / де</b> (період).</li>' +
      '<li>Не копіюй заголовок: <i>share → proportion / percentage</i>, <i>shops → stores</i>, <i>number → figure</i>.</li>' +
      '<li>Період: <i>between 2000 and 2025</i> · <i>from 2000 to 2025</i> · <i>over a 25-year period</i>.</li></ul>' },
    { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
      ['The graph shows the Share of Electricity Generation in the UK: Fossil Fuels and Renewables, 2000–2025.', 'Копія заголовка — це не перефразування.', 'The line graph illustrates how the share of electricity generated from fossil fuels and renewables changed in the UK between 2000 and 2025.'],
      ['The line graph shows that coal fell from 55 to 30 million tonnes.', 'Цифри й факти — для Body paragraphs.', 'The line graph compares the consumption of four fuels in Germany from 1985 to 2015.'],
      ['The graph shows the old people in three countries in year 2040.', 'Розмита тема, «in year 2040» — калька з української.', 'The line graph shows the percentage of people aged 65 and over in three countries between 2000 and 2040.']
    ] }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'з підказками', graph: 'uk',
    lead: 'Повна підтримка: приклад, банк слів, пояснення до кожної відповіді.',
    blocks: [
      { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
          ['type', 'The line graph'], ['verb', 'illustrates'], ['what', 'how the share of electricity generated from fossil fuels and renewable sources changed in the UK'], ['when', 'between 2000 and 2025'], '.' ],
        legend: [['type','вид графіка'],['verb','дієслово'],['what','ЩО показано (тема + де)'],['when','КОЛИ (період)']],
        note: 'Зверни увагу: <i>share</i> замість <i>percentage</i> з заголовка, <i>renewable sources</i> замість <i>renewables</i>, <i>generated</i> замість <i>generation</i>. Цифр немає.' },

      { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', intro: 'Використай слова з банку. У деяких реченнях підійдуть і інші варіанти — ми їх теж зарахуємо.',
        bank: ['illustrates', 'generated', 'between', 'percentage', 'over'], items: [
          { pre: 'The line graph ', post: ' the share of electricity produced in the UK.', ok: ['illustrates', 'shows', 'presents', 'compares'], why: 'Після <i>the line graph</i> — дієслово з -s: shows / illustrates / presents.' },
          { pre: 'It shows how much electricity was ', post: ' from fossil fuels and renewable sources.', ok: ['generated', 'produced'], why: '<i>generated / produced from</i> — стійке сполучення для енергії.' },
          { pre: 'The data cover the period ', post: ' 2000 and 2025.', ok: ['between'], why: '<i>between … and …</i>. Не «since» і не «till».' },
          { pre: 'The vertical axis shows the ', post: ' of total electricity generation.', ok: ['percentage', 'share', 'proportion'], why: 'Вісь у відсотках, тому <i>percentage / share / proportion</i>, а не <i>amount</i>.' },
          { pre: 'The graph tracks the changes ', post: ' a 25-year period.', ok: ['over', 'during'], why: '<i>over a … period</i>. Прийменник over — «протягом».' }
        ] },

      { type: 'choose', tag: 'Крок 3 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Яка Introduction найкраща для цього графіка?', opts: [
            ['The line graph shows the share of electricity generated from fossil fuels and renewable sources in the UK between 2000 and 2025.', 1, 'Є вид графіка, дієслово, тема (share), джерела, місце й період.'],
            ['The line graph shows information about electricity in the UK from fossil fuels and renewables.', 0, 'Немає періоду, і незрозуміло, що саме показано (частку? обсяг?).'],
            ['The line graph shows that renewables overtook fossil fuels around 2018.', 0, 'Гарне речення, але це вже Overview. Introduction не містить висновків.'],
            ['In 2000, fossil fuels generated 75% of electricity, but by 2025 the figure had fallen to 30%.', 0, 'Це деталь з цифрами. Її місце — Body paragraph.']] },
          { q: 'Яке речення граматично правильне?', opts: [
            ['The graph shows the percentage of electricity produced from renewables.', 1, 'Скорочене означальне підрядне речення: electricity (which was) produced from renewables.'],
            ['The graph shows the percentage of electricity what was produced from renewables.', 0, '<i>what</i> не може бути сполучним словом після іменника. Потрібно <i>that / which</i> або скорочена форма.'],
            ['The graph shows the percentage of electricity which produced from renewables.', 0, 'Після which потрібне дієслово у пасиві: which <b>was</b> produced.']] },
          { q: 'Графік показує відсотки. Яка фраза відповідає цьому?', opts: [
            ['the proportion of electricity produced', 1, 'Proportion = частка. Саме те, що показує вісь.'],
            ['the amount of electricity produced', 0, '<i>amount</i> — це кількість (наприклад, у гігават-годинах). Вісь у %, тому змінюється зміст.'],
            ['the total electricity produced', 0, '<i>total</i> — загальний обсяг, а не частка від нього.']] },
          { q: 'Як правильно вказати період 2000–2025?', opts: [
            ['between 2000 and 2025', 1, 'Правильно. Також: from 2000 to 2025.'],
            ['from 2000 till 2025 years', 0, 'Калька з української: слово years зайве, till не вживається в письмовому стилі Task 1.'],
            ['during the period 2000 and 2025', 0, 'Після <i>between</i> потрібен and, а після <i>during the period</i> — from … to …']] }
        ] },

      { type: 'rewrite', tag: 'Крок 4 · Перепиши і порівняй', tagc: 'blue', title: 'Скажи те саме іншими словами',
        given: 'The graph shows the percentage of electricity from fossil fuels and renewables in the UK from 2000 to 2025.',
        task: 'Перепиши речення: <b>1)</b> інше дієслово, <b>2)</b> інша структура (наприклад, <i>how the share … changed</i>), <b>3)</b> принаймні одне слово-синонім.',
        models: [
          ['Модель A · how … changed', 'The line graph <mark>illustrates how the share</mark> of UK electricity <mark>generated</mark> from fossil fuels and <mark>renewable sources changed between</mark> 2000 and 2025.'],
          ['Модель B · compares', 'The line graph <mark>compares the proportion</mark> of electricity <mark>produced</mark> from fossil fuels with that from renewables in the UK <mark>over a 25-year period</mark>.'],
          ['Модель C · presents data', 'The graph <mark>presents data on</mark> UK electricity generation by source, <mark>measured as a percentage</mark> of the total, from 2000 to 2025.']],
        check: ['Я змінив(ла) дієслово', 'Я замінив(ла) принаймні одне слово синонімом', 'Є і тема, і період', 'У моєму реченні немає цифр і висновків'] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The line graph shows the proportion of UK electricity produced from two sources between 2000 and 2025.',
          'The graph compares the share of electricity generated from fossil fuels and renewables in the UK.',
          'The line graph illustrates how the electricity mix in the UK changed over a 25-year period.'],
        hint: 'Починай з <b>The line graph</b>, потім дієслово, потім тема, у кінці період.' }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'менше підказок', graph: 'de',
    lead: 'Тепер без прикладу й банку слів. Спочатку подумай сам(а), потім звіряйся з поясненнями.',
    blocks: [
      { type: 'choose', tag: 'Крок 1 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Яка Introduction найкраща?', opts: [
            ['The line graph illustrates how much energy Germany consumed from four different fuels between 1985 and 2015, measured in million tonnes of oil equivalent.', 1, 'Повна: тема, кількість джерел, країна, період, одиниці.'],
            ['The line graph shows energy consumption in Germany from 1985 to 2015.', 0, 'Грамотно, але неповно: не сказано, що графік порівнює чотири види палива, і немає одиниць.'],
            ['The line graph shows that coal fell while petrol, diesel and gas rose in Germany.', 0, 'Це вже Overview. Introduction не містить висновків.'],
            ['The line graph is about petrol, diesel, coal and natural gas in Germany.', 0, '<i>is about</i> звучить розмовно, і не сказано, ЩО саме про ці палива: споживання? ціни?']] },
          { q: 'Яке речення правильне?', opts: [
            ['…how much energy was consumed in Germany from four fuels.', 1, 'Пасив + how much + незлічуваний іменник (energy).'],
            ['…how much energy consumed in Germany from four fuels.', 0, 'Бракує пасиву: energy <b>was</b> consumed.'],
            ['…how many energy was consumed in Germany from four fuels.', 0, 'energy — незлічуваний: how <b>much</b>.']] },
          { q: 'Як позначити одиниці виміру?', opts: [
            ['in million tonnes of oil equivalent', 1, 'Одиниці виміру: <b>in</b> million tonnes.'],
            ['by million tonnes of oil equivalent', 0, '<i>by</i> позначає різницю (rose by 5 million tonnes), а не одиницю виміру.'],
            ['at million tonnes of oil equivalent', 0, '<i>at</i> позначає конкретний рівень (peaked at 62), а не одиницю.']] }
        ] },

      { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'The line graph illustrates how much energy Germany consumed ', post: ' four different types of fuel.', ok: ['from'], why: 'consume energy <b>from</b> sources (coal, gas…).' },
          { pre: 'The data cover the period between 1985 ', post: ' 2015.', ok: ['and'], why: '<i>between … and …</i>.' },
          { pre: 'Consumption is measured ', post: ' million tonnes of oil equivalent.', ok: ['in'], why: 'Одиниці виміру: <i>in</i>.' },
          { pre: 'The data cover a ', post: '-year period.', ok: ['thirty', '30'], why: 'У складному прикметнику іменник стоїть в однині: a thirty-<b>year</b> period, а не «thirty-years».' }
        ] },

      { type: 'write', tag: 'Крок 3 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction для цього графіка',
        task: 'Подивись на графік і напиши 1–2 речення. Використай формулу з початку уроку.',
        hint: 'Вид графіка + дієслово + <i>how much energy was consumed</i> + <i>from four fuels</i> + <i>between … and …</i>.',
        models: [
          ['Модель A', 'The line graph <mark>illustrates how much energy was consumed in Germany from four fuels</mark>: petrol, diesel, coal and natural gas, <mark>between 1985 and 2015</mark>, measured in million tonnes of oil equivalent.'],
          ['Модель B', 'The line graph <mark>compares German consumption of four types of fuel over a thirty-year period</mark>, in million tonnes of oil equivalent.']],
        check: ['Є вид графіка і дієслово', 'Названо тему своїми словами, не копією заголовка', 'Є період (1985–2015)', 'Немає цифр і висновків'] },

      { type: 'build', tag: 'Крок 4 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The line graph compares German consumption of four types of fuel between 1985 and 2015.',
          'The graph shows how much energy Germany consumed from four fuels over thirty years.'] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
    lead: 'Графік із прогнозом (пунктир після 2020). Спочатку пишеш сам(а), потім порівнюєш.',
    blocks: [
      { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction',
        task: 'Подивись на графік. Не забудь, що друга половина даних — це <b>прогноз</b>.',
        hint: 'Скористайся словом <i>projections</i> або фразою <i>up to 2040</i>. Одиниця виміру — відсотки (percentage / proportion).',
        models: [
          ['Модель A', 'The line graph <mark>shows the percentage of the population aged 65 and over</mark> in Japan, the USA and Sweden <mark>between 2000 and 2020, with projections up to 2040</mark>.'],
          ['Модель B', 'The line graph <mark>compares the proportion of people aged 65 and over</mark> in three countries, <mark>with figures given from 2000 to 2040</mark>, including forecasts for the final twenty years.']],
        after: 'Зверни увагу: у Introduction досить сказати <i>projections</i>. Слова <i>will / is projected to</i> знадобляться у Body.',
        check: ['Названо «65 і старше» (aged 65 and over), а не «old people»', 'Згадано три країни або «three countries»', 'Є період і слово projections / forecast', 'Немає цифр і висновків'] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Перевір себе', qs: [
          { q: 'Яка Introduction правильно враховує прогноз?', opts: [
            ['The line graph shows the percentage of the population aged 65 and over in three countries from 2000, with projections up to 2040.', 1, 'Є тема, країни, період і слово projections.'],
            ['The line graph shows the old people in Japan, the USA and Sweden until 2040.', 0, '<i>old people</i> — занадто просто, не вказано, що саме: відсоток? кількість? І <i>until 2040</i> не показує початок.'],
            ['The line graph shows that Japan will have the oldest population in 2040.', 0, 'Це не Introduction, а висновок про майбутнє, до того ж із <i>will</i>.']] },
          { q: 'Як сказати «люди віком 65+»?', opts: [
            ['people aged 65 and over', 1, 'Нейтральна і точна фраза для Band 7.'],
            ['old people', 0, 'Розмовно й неточно: графік показує конкретну вікову групу.'],
            ['people older than 65 years', 0, '<i>older than 65</i> не включає самих 65-річних, а слово years зайве.']] }
        ] },

      { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The line graph compares the proportion of people aged 65 and over in three countries between 2000 and 2040.',
          'The figures from 2025 onwards are projections rather than actual data.'] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Бачити 3 частини Introduction: <b>вид графіка + дієслово + тема + період</b></li>' +
      '<li>Перефразовувати заголовок: <i>share → proportion</i>, <i>generation → generated</i></li>' +
      '<li>Правильно писати <i>how much / how many</i>, <i>between … and …</i>, <i>in million tonnes</i></li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Overview — як записати дві головні історії графіка без цифр.</p>' }
  ]
};
