/* Словник Module 1 · Line Graphs. Рівень Band 7.0–7.5.
   tier: 'base' = Основа (достатньо для Band 7), 'extra' = Додатково (за бажанням).
   cols — заголовки колонок; rows — рядки таблиці. id використовується в lesson.vocab для "слів цього уроку". */
window.VOCAB = [
{ id:'intro', tier:'base', title:'Introduction: як перефразувати завдання', cols:['Фраза','Переклад','Приклад'], rows:[
  ['The line graph shows / illustrates / presents …','Лінійний графік показує…','The line graph illustrates how sales changed.'],
  ['gives information about / provides data on','надає інформацію про','The graph gives information about visitor numbers.'],
  ['compares … in three countries','порівнює… у трьох країнах','The graph compares energy use in three countries.'],
  ['how much … (незлічуване) / how many … (злічуване)','скільки…','…how much electricity was generated / how many people visited…'],
  ['the proportion / percentage / share of','частка / відсоток','the share of electricity from renewables'],
  ['the number of … / the figure for …','кількість / показник','the figure for Japan'],
  ['between 2000 and 2025 · from 2000 to 2025','період «з… по…»','…between 2000 and 2025.'],
  ['over a 25-year period','протягом 25 років','Compound adjective: 25-year (не years!)'],
  ['measured in thousand euros / million tonnes','вимірюється в…','Consumption is measured in million tonnes.'],
  ['aged 65 and over','віком 65 і старше','the population aged 65 and over'],
  ['with projections up to 2040','з прогнозами до 2040 року','…between 2000 and 2020, with projections up to 2040.'],
  ['sales figures / income / revenue','обсяги продажів / дохід','synonyms for «money earned»']
]},
{ id:'overview', tier:'base', title:'Overview: головні ознаки без цифр', cols:['Функція','Фрази','Приклад'], rows:[
  ['Початок','Overall, … · In general, … · It is clear that … · What stands out is that …','Overall, renewables rose.'],
  ['Загальний напрямок','…saw an overall increase / decline','Coal saw an overall decline.'],
  ['Контраст','…while / whereas … · In contrast, …','Petrol rose, whereas coal fell.'],
  ['Найпомітніше','The most striking feature is that … · Of particular note is …','The most striking feature is that …'],
  ['Лідер / аутсайдер','remained the highest / lowest throughout','Japan remained the highest throughout.'],
  ['Початок vs кінець','ended the period considerably higher / lower than it began','…ended considerably higher.'],
  ['Виняток','… was the only … to + V','Coal was the only fuel to decline.']
]},
{ id:'trend-verbs', tier:'base', title:'Дієслова трендів (основа Band 7)', cols:['Напрямок','Дієслова','Приклад'], rows:[
  ['↑ Зростання','rise · increase · grow · climb · go up','Sales rose to 80,000.'],
  ['↓ Падіння','fall · decrease · decline · drop · go down','The share declined to 30%.'],
  ['→ Стабільність','remain stable / constant · stay the same · level off · stabilise at','Prices remained stable at 20%.'],
  ['~ Коливання','fluctuate (between X and Y / around X)','Sales fluctuated between 40 and 45.'],
  ['⌒ Пік','peak at · reach a peak of · hit a high of','Visitors peaked at 610,000.'],
  ['⌣ Мінімум','dip to · fall to a low of · reach a low point of','Petrol dipped to 47 in 1995.'],
  ['Відновлення','recover · rebound · pick up','Numbers recovered quickly after 2020.'],
  ['Перетин','overtake · exceed · surpass · draw level with','Renewables overtook fossil fuels.']
]},
{ id:'strength', tier:'base', title:'Сила зміни: прислівники й прикметники', cols:['Зміна','Прислівник (з дієсловом)','Прикметник (з іменником)'], rows:[
  ['Невелика','slightly · marginally','slight · marginal · modest'],
  ['Повільна, рівна','gradually · steadily · consistently','gradual · steady · consistent'],
  ['Значна','significantly · considerably · substantially','significant · considerable · substantial'],
  ['Швидка, різка','sharply · rapidly · dramatically','sharp · rapid · dramatic'],
  ['Правило','Слово має відповідати розміру зміни: 50 → 53 це slight rise, а не sharp.','']
]},
{ id:'nouns', tier:'base', title:'Дієслово ↔ іменник (подвоєння діапазону)', cols:['Дієслово','Іменник','Підказка'], rows:[
  ['Prices rose sharply.','There was a sharp rise in prices.','rise / increase / growth'],
  ['Sales fell dramatically.','There was a dramatic fall in sales.','fall / decrease / decline / drop'],
  ['Numbers fluctuated.','There were fluctuations in the numbers.','fluctuation(s)'],
  ['Visitors peaked at 610,000.','Visitors reached a peak of 610,000.','a peak of'],
  ['Growth slowed.','There was a slowdown in growth.','slowdown'],
  ['Use both patterns','≈ 50 / 50 у Body paragraphs','Так видно граматичний діапазон']
]},
{ id:'numbers', tier:'base', title:'Прийменники з цифрами: to / by / of / at / from … to', cols:['Модель','Значення','Приклад'], rows:[
  ['rise / fall to X','кінцевий рівень («до»)','Sales rose to 80,000.'],
  ['rise / fall by X','на скільки змінилось','Sales rose by 15,000.'],
  ['a rise / fall of X','розмір зміни (іменник)','a fall of 45 percentage points'],
  ['from X to Y','старт і фініш','grew from 10% to 35%'],
  ['stand at · peak at · remain at','рівень без руху','peaked at 62%'],
  ['fluctuate between X and Y','діапазон коливань','fluctuated between 40 and 45'],
  ['percentage points','різниця між двома відсотками','from 15% to 25% = a rise of 10 percentage points'],
  ['respectively','відповідно (в тому ж порядку)','at 15% and 12% respectively']
]},
{ id:'approx', tier:'base', title:'Приблизні значення', cols:['Фраза','Значення','Приклад'], rows:[
  ['approximately · about · around · roughly','приблизно','around 600,000 visitors'],
  ['just over / just under','трохи більше / менше','just over 60%'],
  ['nearly · almost','майже','nearly doubled'],
  ['well over / well under','значно більше / менше','well under 10%'],
  ['Правило','Один апроксиматор на речення; якщо точка на лінії сітки — пиши точне число','✗ about approximately 500']
]},
{ id:'multiples', tier:'base', title:'«Вдвічі», «втричі», «наполовину»', cols:['Фраза','Значення','Приклад'], rows:[
  ['doubled · tripled · halved','зросло вдвічі · втричі · зменшилось наполовину','Diesel more than doubled.'],
  ['nearly doubled · almost tripled','майже вдвічі · майже втричі','Gas almost tripled.'],
  ['twice / three times as high as','вдвічі / втричі вище за','…twice as high as in 2000.'],
  ['by a factor of','у … разів','rose by a factor of three'],
  ['half · a third · a quarter','половина · третина · чверть','fell to a quarter of its level']
]},
{ id:'compare', tier:'base', title:'Порівняння, схожість, контраст', cols:['Функція','Фрази','Приклад'], rows:[
  ['Порівняння','higher / lower than · well above / below · the highest / lowest','Japan was higher than the USA.'],
  ['Різниця','the gap between A and B widened / narrowed','The gap narrowed to 1 point.'],
  ['Контраст','while · whereas · in contrast · unlike A, B …','Unlike coal, petrol rose.'],
  ['Схожість','similarly · likewise · a similar trend can be seen in …','Similarly, diesel rose.'],
  ['Обидва','both · all three · neither','All three countries rose.'],
  ['Відповідно','at X and Y respectively','at 20 and 10 respectively']
]},
{ id:'crossing', tier:'base', title:'Перетини ліній', cols:['Стадія','Дієслова','Приклад'], rows:[
  ['Зближення','converge · narrow · close the gap','The lines converged by 2035.'],
  ['Зрівнялись','draw level · meet · be equal','They drew level in 2035.'],
  ['Випередження','overtake · exceed · surpass','Diesel overtook coal.'],
  ['Після','pull ahead · widen the gap · diverge','Renewables pulled ahead.'],
  ['Коли','around 2018 · between 2015 and 2020 · in the mid-2000s','Дані не завжди дають точний рік: безпечніше «between».']
]},
{ id:'forecast', tier:'base', title:'Прогнози', cols:['Модель','Приклад','Примітка'], rows:[
  ['is expected / projected / forecast to + V','The figure is projected to reach 42%.','Не «will» для прогнозу з графіка'],
  ['is likely / unlikely to + V','Growth is likely to slow.',''],
  ['by 2040 / in 2040','By 2040 = до цього моменту; in 2040 = у тому році',''],
  ['projections suggest / indicate that …','Projections suggest a slowdown.',''],
  ['are expected to converge / narrow','The gap is expected to narrow.','']
]},
{ id:'time', tier:'base', title:'Час і період', cols:['Фраза','Значення','Приклад'], rows:[
  ['in 2010 · by 2015 · from 2020 onwards','у · до · починаючи з','From 2020 onwards, numbers rose.'],
  ['between 2000 and 2010','між','Prices fell between 2000 and 2010.'],
  ['throughout the period','протягом усього періоду','Petrol remained the highest throughout the period.'],
  ['over the next decade','упродовж наступного десятиліття','…over the next decade.'],
  ['in the mid-2000s · in the late 2010s','у середині 2000-х · наприкінці 2010-х','Diesel overtook coal in the mid-2000s.'],
  ['at the end of the period · by the end of the period','наприкінці періоду','…by the end of the period.'],
  ['the following year / decade','наступного року / десятиліття','']
]},
{ id:'linkers', tier:'base', title:'Зв’язки за функцією', cols:['Функція','Слова','Примітка'], rows:[
  ['Час','then · next · over the next five years · after that · from that point on','Не повторюй Then… Then…'],
  ['Контраст','while · whereas · in contrast · however · unlike','while / whereas — в одному реченні'],
  ['Схожість','similarly · likewise','Починають нове речення'],
  ['Наслідок / результат','making it … · reaching … · resulting in …','–ing форма: reaching 30%'],
  ['Далі про іншу групу','Turning to … · As for … · Regarding …','Початок Body 2'],
  ['Уступка','despite · although · even though','Despite a dip in 2016, numbers rose.']
]},
{ id:'body-templates', tier:'base', title:'Шаблони речень для Body', cols:['Тип','Шаблон','Приклад'], rows:[
  ['Старт','In [year], [subject] stood at / accounted for [figure].','In 2000, fossil fuels accounted for 75%.'],
  ['Зміна','[Subject] then [verb] [adverb] to [figure] in [year].','It then fell steadily to 60% in 2010.'],
  ['Іменник','There was a [adj] [rise/fall] in [subject], from X to Y.','There was a steady fall in coal, from 55 to 30.'],
  ['Фініш','By [year], [subject] had reached [figure].','By 2025, renewables had reached 58%.'],
  ['Порівняння','[A] was higher than [B], at X and Y respectively.','…at 15% and 12% respectively.'],
  ['Наслідок','…, making it the largest / overtaking [B].','…, overtaking coal in the mid-2000s.'],
  ['Уступка','Despite a slight dip in [year], [subject] ended at [figure].','Despite a dip in 1995, petrol ended at 62.']
]},
{ id:'traps', tier:'base', title:'Пастки для україномовних', cols:['✗ Неправильно','✓ Правильно','Чому'], rows:[
  ['increased in two times','doubled / was twice as high','«у два рази» ≠ in two times'],
  ['Prices grew up','Prices grew / rose','grow up — про дітей'],
  ['The figure will reach 40%','is projected to reach 40%','Графік дає прогноз, не факт'],
  ['the datas show','the data show','data — множина без -s'],
  ['reached 50 percents','reached 50% / fifty percent','percent без -s'],
  ['in the 2008 year','in 2008','Без слова year'],
  ['the amount of visitors','the number of visitors','visitors — злічуване'],
  ['how many money','how much money','money — незлічуване'],
  ['a 30-years period','a 30-year period','У складному прикметнику однина'],
  ['overtook with','overtook','overtake — перехідне дієслово'],
  ['because of the pandemic…','(не пишемо причини)','Task 1 описує тільки дані'],
  ['In conclusion…','Overall,… на початку Overview','Окремого висновку не треба']
]},
{ id:'extra-trend', tier:'extra', title:'Додатково · яскраві слова (C1+, за бажанням)', cols:['Слова','Значення','Коли вживати'], rows:[
  ['soar · surge · rocket · shoot up','різко зростати','тільки для змін 30–50% і більше'],
  ['plummet · plunge · tumble · collapse','різко падати','тільки для дуже різких падінь'],
  ['edge up / down · inch up','трохи зрости / впасти','зміна 1–3%'],
  ['bottom out at','досягти дна','мінімум перед зростанням'],
  ['outstrip · outpace','випереджати','замість overtake'],
  ['fluctuate wildly · volatile','сильно коливатися','нестабільні дані'],
  ['a sevenfold increase','збільшення у 7 разів','множники більше за 3'],
  ['The trend reversed','тенденція змінилась на протилежну','після піку']
]}
];
