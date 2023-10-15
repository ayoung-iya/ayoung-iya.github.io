const backgrounds = [
  'jack-anstey.jpg',
  'julian-timmerman.jpg',
  'luca-bravo.jpg',
  'lucas-franco.jpg',
  'neom.jpg',
  'paul-pastourmatzis.jpg',
  'rebe-adelaida.jpg'
];

const chosenbg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.background = `url(../images/${chosenbg}) no-repeat center/cover`;