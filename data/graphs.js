/* Графіки Module 1 (Line Graphs). Один раз описані тут — використовуються в усіх уроках.
   series[].values — по одному значенню на кожну мітку x. projFrom — індекс, з якого дані є прогнозом (пунктир). */
window.GRAPHS = {
  uk: {
    name: 'UK electricity',
    title: 'Share of Electricity Generation in the UK: Fossil Fuels and Renewables, 2000–2025',
    svgTitle: 'UK electricity generation by source, 2000–2025',
    yLabel: 'Share of electricity generation (%)',
    x: ['2000','2005','2010','2015','2020','2025'],
    yMax: 90, step: 10,
    series: [
      {name:'Fossil fuels', color:'#4A4F44', values:[75,68,60,52,40,30]},
      {name:'Renewables',  color:'#4A7C59', values:[18,24,30,40,50,58]}
    ]
  },
  de: {
    name: 'Germany energy',
    title: 'Energy Consumption in Germany by Fuel Type, 1985–2015',
    svgTitle: 'Energy consumption in Germany by fuel, 1985–2015',
    yLabel: 'Consumption (million tonnes of oil equivalent)',
    x: ['1985','1990','1995','2000','2005','2010','2015'],
    yMax: 70, step: 10,
    series: [
      {name:'Petrol',      color:'#2E5A88', values:[45,50,47,52,55,58,62]},
      {name:'Diesel',      color:'#C94F7C', values:[20,24,27,32,38,44,48]},
      {name:'Coal',        color:'#4A4F44', values:[55,48,42,40,36,33,30]},
      {name:'Natural gas', color:'#E8890C', values:[10,13,15,18,21,25,28]}
    ]
  },
  el: {
    name: '65+ population',
    title: 'Population Aged 65 and Over in Three Countries, 2000–2040',
    svgTitle: 'Population aged 65 and over, 2000–2040',
    yLabel: 'Population aged 65 and over (%)',
    x: ['2000','2005','2010','2015','2020','2025','2030','2035','2040'],
    yMax: 45, step: 5, projFrom: 4,
    series: [
      {name:'Japan',  color:'#7A5AA0', values:[17,23,29,33,36,38,40,41,42]},
      {name:'USA',    color:'#1F6A80', values:[12,13,16,20,23,26,28,30,31]},
      {name:'Sweden', color:'#C94F7C', values:[15,17,19,24,26,28,29,30,31]}
    ]
  }
  ,
  re: {
    name: 'Renewable electricity',
    title: 'Electricity Generated from Renewable Sources in Three Countries, 2000–2025',
    svgTitle: 'Electricity from renewable sources, 2000–2025',
    yLabel: 'Share of electricity (%)',
    x: ['2000','2005','2010','2015','2020','2025'],
    yMax: 50, step: 10,
    series: [
      {name:'Germany',        color:'#2E5A88', values:[6,10,17,30,42,47]},
      {name:'United Kingdom', color:'#E8890C', values:[3,5,7,22,40,45]},
      {name:'Poland',         color:'#4A7C59', values:[2,3,7,13,16,19]}
    ]
  },
  rm: {
    name: 'Railway Museum',
    title: 'Number of Visitors to a Railway Museum, 2010–2023',
    svgTitle: 'Visitors to a railway museum, 2010–2023',
    yLabel: 'Visitors (thousands)',
    x: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
    yMax: 700, step: 100,
    series: [
      {name:'Visitors', color:'#1F6A80', values:[320,335,310,350,420,480,465,520,580,610,150,230,480,590]}
    ]
  }
};
