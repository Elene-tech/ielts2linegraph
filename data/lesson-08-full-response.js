(function () {
  var CHK = ['Introduction перефразована (не копія заголовка), без цифр', 'Overview: 2 історії, без цифр і причин', 'Body 1: старт, фініш і ключова ознака', 'Body 2: перехід до другої групи й порівняння', 'Дієслова різні, прислівники відповідають розміру зміни', 'Прийменники to / by / of / at правильні', 'Минулий час для фактів, без «In conclusion»', '150+ слів (ціль 160–175)', 'Встиг(ла) за 20 хвилин'];
  window.LESSON = {
    id: 'lg-08-full-response',
    title: 'Final Task · Повна відповідь самостійно',
    subtitle: 'Line Graphs · Introduction + Overview + Body 1 + Body 2 на новому графіку. Таймер 20 хвилин.',
    vocab: ['intro', 'overview', 'trend-verbs', 'strength', 'numbers', 'compare', 'crossing', 'linkers', 'body-templates', 'traps'],

    intro: [
      { type: 'rule', title: 'План на 20 хвилин', html:
        '<ol style="margin-left:20px"><li><b>3 хв — читання й нотатки</b>: вісь, старт/фініш, піки, перетини, групи ліній.</li>' +
        '<li><b>14 хв — письмо</b>: Introduction (1–2 речення) → Overview (2 речення) → Body 1 → Body 2.</li>' +
        '<li><b>3 хв — перевірка</b>: цифри, прийменники, час дієслів, обсяг (160–175 слів, мінімум 150).</li></ol>' +
        '<p class="small" style="margin-top:8px">Словник доступний у будь-який момент (кнопка 📚 угорі). Моделі відкриваються після того, як ти напишеш власну відповідь.</p>' }
    ],

    rounds: [
    { label: 'Завдання 1', sub: 'із підказками', graph: 're',
      lead: 'Три країни, дві з яких зближуються. Підказки до кожного абзацу відкриваються за потреби.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Electricity from renewable sources', minutes: 20, minWords: 150, target: '160–175', showAfter: 100,
          prompt: 'The line graph below shows the percentage of electricity generated from renewable sources in three countries between 2000 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Групи ліній · старт/фініш · перетин/виняток…', ua: 'Яка група ліній піде в Body 1? Яка в Body 2? Що спільне, а що різне?' },
            { key: 'intro', label: 'Introduction', rows: 2, starter: 'The line graph compares the proportion of …', words: 'proportion · generated from · renewable sources · between … and …' },
            { key: 'overview', label: 'Overview', rows: 3, starter: 'Overall, … , whereas …', words: 'all three countries · converge · lagged behind · the most striking feature', ua: 'Дві історії без цифр: загальний напрямок + контраст.' },
            { key: 'body1', label: 'Body 1', rows: 5, starter: 'In 2000, Germany … ', words: 'rose steadily · climbed sharply · overtook · reached · from … to …', ua: 'Група: Germany і United Kingdom.' },
            { key: 'body2', label: 'Body 2', rows: 4, starter: 'Poland, in contrast, …', words: 'modest growth · edged up · less than half · remained the lowest', ua: 'Група: Poland + порівняння з першою групою.' }],
          models: [
            ['Introduction', 'The line graph <mark>compares the proportion of electricity generated from renewable sources</mark> in Germany, the UK and Poland <mark>between 2000 and 2025</mark>.'],
            ['Overview', '<mark>Overall</mark>, the share of renewable electricity <mark>rose in all three countries</mark>. Germany and the UK saw much faster growth and ended the period at similar levels, <mark>whereas</mark> Poland remained well behind.'],
            ['Body 1', 'In 2000, Germany generated 6% of its electricity from renewables, <mark>compared with only 3% in the UK</mark>. Germany’s share then rose steadily to 17% in 2010 and <mark>climbed more sharply over the next decade</mark>, reaching 42% in 2020 before <mark>edging up to 47%</mark> in 2025. The UK, <mark>by contrast</mark>, grew slowly until 2010 (7%), but then <mark>surged to 22% in 2015 and 40% in 2020</mark>, finally standing at 45%, just below Germany.'],
            ['Body 2', 'Poland, <mark>in contrast</mark>, saw only modest growth. Its figure rose slowly from 2% in 2000 to 7% in 2010 and reached 19% in 2025, <mark>less than half the level</mark> recorded in Germany and the UK.']],
          after: 'Порівнюй рішення, а не слова: чи згрупував(ла) ти Germany + UK разом? Чи є в Overview дві історії без цифр? Чи Body 2 починається з контрасту? Сподобалась фраза: випиши її й використай у наступному завданні.',
          check: CHK }
      ] },

    { label: 'Завдання 2', sub: 'як на іспиті', graph: 'rm',
      lead: 'Одна лінія з різким падінням. Без підказок до абзаців: тільки твої знання та словник.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Visitors to a railway museum', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The line graph below shows the number of visitors to a railway museum between 2010 and 2023, in thousands. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Подумай: де розділити Body 1 і Body 2? Яка головна ознака?' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The line graph <mark>illustrates how many people visited a railway museum each year</mark> between 2010 and 2023, with figures given in thousands.'],
            ['Overview', '<mark>Overall</mark>, the number of visitors rose considerably over the period, <mark>despite a dramatic fall in 2020</mark>. <mark>The most striking feature</mark> is the collapse in that year, followed by a rapid recovery to almost the level of the 2019 peak.'],
            ['Body 1', 'In 2010, the museum attracted 320,000 visitors. After <mark>a slight dip to 310,000 in 2012</mark>, the figure rose steadily, <mark>reaching 480,000 in 2015</mark>. Despite a small fall in 2016, numbers continued to climb strongly over the next three years, <mark>peaking at 610,000 in 2019</mark>, almost twice the level recorded at the start of the period.'],
            ['Body 2', 'In 2020, <mark>however</mark>, visitor numbers fell sharply to just 150,000, <mark>a drop of roughly 75%</mark>. They then began to recover, rising to 230,000 in 2021 before <mark>more than doubling to 480,000 in 2022</mark>. By 2023, the museum had welcomed 590,000 visitors, only slightly below the 2019 peak of 610,000.']],
          after: 'Зверни увагу: поділ на Body 1 і Body 2 тут за <b>часом</b> (до і після 2020), бо лінія одна. Причину падіння (pandemic) не пишемо: її немає на графіку.',
          check: CHK }
      ] }
    ],

    outro: [
      { type: 'rule', title: '🎯 Модуль Line Graphs завершено', html:
        '<p>Якщо більшість пунктів чек-листа — «так», ти готовий(а) до наступного типу графіка. Якісь «ні»? Повернись до відповідного уроку: це нормальна частина навчання.</p>' +
        '<p class="small" style="margin-top:8px">Скачай свої відповіді кнопкою «📝 Мої відповіді» й покажи їх викладачеві.</p>' }
    ]
  };
})();
