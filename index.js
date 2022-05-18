
// constant
const categories = ['Animals', 'Home', 'Clothes', 'Food', 'Jobs', 'Sports', 'Countries', 'Colors', 'Transport'];


const problem_words = [
  [
    { problem: 'DOG', hint: './img/dog.jpg' },
    { problem: 'CAT', hint: './img/cat.jpg' },
    // { problem: 'FROG', hint: './img/frog.jpg' },
    // { problem: 'CHICKEN' , hint: './img/chicken.jpg'},
    // { problem: 'TURTLE', hint: './img/turtle.jpg' },
    // { problem: 'CRAB' , hint: './img/crab.jpg'},
    { problem: 'RABBIT', hint: './img/rabbit.jpg' },
    // { problem: 'SHARK', hint: './img/shark.jpg' },
    // { problem: 'CROCODILE', hint: './img/crocodile.jpg' },
    // { problem: 'GIRAFFE' , hint: './img/giraffe.jpg'},
  ]
  ,
  [
    { problem: 'SOFA', hint: './img/sofa.jpg' },
    { problem: 'BED', hint: './img/bed.jpg' },
    { problem: 'COMPUTER', hint: './img/computer.jpg' },
    { problem: 'AIRCONDITIONER', hint: './img/airconditional.jpg' },
    { problem: 'MIRROR', hint: './img/mirror.jpg' },
    { problem: 'BIN', hint: './img/bin.jpg' },
    { problem: 'CHAIR', hint: './img/chair.jpg' },
    { problem: 'DOOR', hint: './img/door.png' },
    { problem: 'PICTURE', hint: './img/picture.png' },
    { problem: 'FIREPLACE', hint: './img/fireplace.jpg' },
  ],
  [
    { problem: 'SOCKS', hint: './img/socks.jpg' },
    { problem: 'TSHIRT', hint: './img/tshirt.png' },
    { problem: 'SUIT', hint: './img/suit.jpg' },
    { problem: 'BELT', hint: './img/belt.jpg' },
    { problem: 'PANTS', hint: './img/pants.jpg' },
    { problem: 'HELMET', hint: './img/helmet.jpg' },
    { problem: 'GLOVES', hint: './img/gloves.jpg' },
    { problem: 'DRESS', hint: './img/dress.jpg' },
    { problem: 'RING', hint: './img/ring.jpg' },
    { problem: 'SKIRT', hint: './img/skirt.jpg' },
  ],
  [
    { problem: 'CHOCOLATE', hint: './img/chocolate.jpg' },
    { problem: 'HAMBURGER', hint: './img/hamburger.jpg' },
    { problem: 'NOODLES', hint: './img/noodles.jpg' },
    { problem: 'BAGUETTE', hint: './img/baguette.jpg' },
    { problem: 'APPLE', hint: './img/apple.jpg' },
    { problem: 'SANDWICH', hint: './img/sandwich.jpg' },
    { problem: 'PEAS', hint: './img/peas.jpg' },
    { problem: 'MANGOES', hint: './img/mangoes.jpg' },
    { problem: 'MUFFIN', hint: './img/muffin.jpg' },
    { problem: 'ORANGES', hint: './img/oranges.jpg' },
  ],
  [
    { problem: 'DOCTOR', hint: './img/doctor.jpg' },
    { problem: 'POLICEMAN', hint: './img/policeman.jpg' },
    { problem: 'NURSE', hint: './img/nurse.jpg' },
    { problem: 'MECHANIC', hint: './img/mechanic.jpg' },
    { problem: 'DANCER', hint: './img/dancer.jpg' },
    { problem: 'FIREFIGHTER', hint: './img/firefighter.jpg' },
    { problem: 'HAIRDRESSER', hint: './img/hairdresser.jpg' },
    { problem: 'PILOT', hint: './img/pilot.jpg' },
    { problem: 'DRIVER', hint: './img/driver.jpg' },
  ],
  [
    { problem: 'SOCCER', hint: './img/soccer.jpg' },
    { problem: 'CYCLING', hint: './img/cycling.jpg' },
    { problem: 'WRESTLING', hint: './img/wrestling.jpg' },
    { problem: 'DIVING', hint: './img/diving.jpg' },
    { problem: 'BASKETBALL', hint: './img/basketball.jpg' },
    { problem: 'BASEBALL', hint: './img/baseball.jpg' },
    { problem: 'HOCKEY', hint: './img/hockey.jpg' },
    { problem: 'BOWLING', hint: './img/bowling.jpg' },
    { problem: 'SWIMMING', hint: './img/swimming.jpg' },
    { problem: 'BOXING', hint: './img/boxing.jpg' },
  ],
  [
    { problem: 'CHINA', hint: './img/china.png' },
    { problem: 'AMERICA', hint: './img/america.png' },
    { problem: 'AUSTRAILIA', hint: './img/austrailia.png' },
    { problem: 'CANADA', hint: './img/canada.png' },
    { problem: 'KOREA', hint: './img/korea.png' },
    { problem: 'FRANCE', hint: './img/france.png' },
    { problem: 'ENGLAND', hint: './img/england.png' },
    { problem: 'SPAIN', hint: './img/spain.png' },
    { problem: 'INDIA', hint: './img/india.png' },
    { problem: 'ITALY', hint: './img/italy.png' },
  ],
  [
    { problem: 'BLUE', hint: './img/blue.jpg' },
    { problem: 'RED', hint: './img/red.jpg' },
    { problem: 'YELLOW', hint: './img/yellow.jpg' },
    { problem: 'BLACK', hint: './img/black.jpg' },
    { problem: 'ORANGE', hint: './img/orange.jpg' },
    { problem: 'PURPLE', hint: './img/purple.jpg' },
    { problem: 'GREEN', hint: './img/green.jpg' },
    { problem: 'WHITE', hint: './img/white.jpg' },
    { problem: 'GREY', hint: './img/grey.jpg' },
  ],
  [
    { problem: 'BOAT', hint: './img/boat.jpg' },
    { problem: 'BIKE', hint: './img/bike.jpg' },
    { problem: 'CAR', hint: './img/car.jpg' },
    { problem: 'SCOOTER', hint: './img/scooter.jpg' },
    { problem: 'BUS', hint: './img/bus.jpg' },
    { problem: 'TRUCK', hint: './img/truck.jpg' },
    { problem: 'SKATEBOARD', hint: './img/skateboard.jpg' },
    { problem: 'PLANE', hint: './img/plane.jpg' },
    { problem: 'TRAIN', hint: './img/train.jpg' },
    { problem: 'HELICOPTER', hint: './img/helicopter.jpg' },
  ]
];

// 모음 알파벳
// a, e, i, o, u

window.onload = function () {
  const collection_alphabet = ['A', 'E', 'I', 'O', 'U'];
  const consonant_alphabet = ['B', 'C', 'D', 'F','G','H', 'J','K','L','M','N' ,'P','Q','R','S','T','V','W','X','Y','Z'];

  // container 
  const header_container = document.querySelector('.header-wrapper');
  const problem_header_container = document.querySelector('.problem-header-wrapper');
  const start_container = document.querySelector('.start-wrapper');
  const category_container = document.querySelector('.category-wrapper');
  const problem_page_container = document.querySelector('.problem-container');
  const loading_container = document.querySelector('.progress-wrapper');
  const alphabet_container = document.querySelector('.alphabet-wrapper');
  const collection_container = document.querySelector('.collection-alphabet-wrapper');
  

  // wrapper 
  const count_wrapper = document.querySelector('.problem-header-wrapper__count');
  const category_wrapper = document.querySelector('.category-wrapper__wrap');
  const problem_wrapper = document.querySelector('.problem-wrapper__problem');
  const hint_wrapper = document.querySelector('.problem-wrapper__hint');
  const hint_img = document.querySelector('.problem-wrapper__img')
  const hangman = document.getElementById('hangman');
  const context = hangman.getContext('2d');
  
  // modal 
  const end_modal = document.querySelector('.congratulation-modal');

  // element
  const start_button = document.querySelector('.start-wrapper__button');
  const hint_button = document.querySelector('.button-wrapper__hint-button');
  const replay_button = document.querySelector('.button-wrapper__replay-button');
  // const back_button = document.querySelector('.button-wrapper__back-button')
  const modal_button = document.querySelector('.congratulation-modal__button');

  // variables
  let chosen_category_id = '';
  let chosen_category_problems = [];
  let chosen_category_problems_count = 0;
  let chosen_category_problems_now = 0;
  let chosen_problem = '';
  let chosen_problem_word = '';
  let chosen_problem_hint = '';

  let clicked = [];
  let answer = [];
  let lives = 8;
  let on_hint = false;

  // canvas 
  let draw_array = [
    drawFrame1,
    drawFrame2,
    drawFrame3,
    drawFrame4,
    drawFrame5,
    drawFrame6,
    drawFrame7,
    drawFrame8,
  ]; 

  // event
  start_button.addEventListener('click', onClickStartButton);

  function onClickStartButton (op) {
    // start_button 클릭 시 일어나는 햔싱
    if (op === 'back') {
      category_wrapper.innerHTML = '';
      problem_page_container.style.display = 'none';
      count_wrapper.style.display = 'none';
      header_container.style.display = 'block';
      problem_header_container.style.display = 'none';
    }
    start_container.style.display = 'none';
    loading_container.style.display = 'flex';
    setTimeout(() => {
      loading_container.style.display = 'none';
      category_container.style.display = 'block';
      initCategory();
    }, 2000)
  }

  function onClickCategory (event) {
    chosen_category_id = event.target.dataset['id'];
    initGame('start')
    header_container.style.display = 'none';
    problem_header_container.style.display = 'block'
    category_container.style.display = 'none';
    problem_page_container.style.display = 'flex'
  }

  function shuffleProblem(problems) {
    return problems.sort(() => Math.random() - 0.5); // 무작위로 섞는법 하나씩 지우고 넣는 피셔-예이츠 알고리즘도 있다.
  }

  function initCategory() {
    for (let i = 0; i < categories.length; i++) {
      const category_list = document.createElement('div');
      category_list.classList.add('category-wrapper__wrap__category');
      category_list.onclick = onClickCategory;
      category_list.dataset['id'] = i;
      category_list.innerHTML = categories[i];
      category_wrapper.appendChild(category_list);
    }
  }

  function initStart() {
    end_modal.style.display = 'none'
    problem_page_container.style.display = 'none'
    loading_container.style.display = 'flex';
    header_container.style.display = 'block';
    problem_header_container.style.display = 'none';
    count_wrapper.innerHTML = '';
    category_wrapper.innerHTML = '';
    setTimeout(() => {
        problem_wrapper.innerHTML = '';
        start_container.style.display = 'block';
        loading_container.style.display = 'none'
      }, 2000)
  }

    function makeButtons (wrong_spelling) {
      alphabet_container.innerHTML = '';
      for (let i = 0; i < consonant_alphabet.length; i++) {
      const list = document.createElement('div');
      if (answer.includes(consonant_alphabet[i]) || lives === 0) list.classList.add('disabled');
      else {
        if (wrong_spelling === consonant_alphabet[i] || clicked.includes(consonant_alphabet[i]) )  {
          if (!clicked.includes(consonant_alphabet[i])) clicked.push(consonant_alphabet[i])
            list.classList.add('disabled');
          }
          else list.onclick = onClicKButton;
        }
      list.classList.add('alphabet-wrapper__alphabet');
      list.innerHTML = consonant_alphabet[i];
      alphabet_container.appendChild(list);
      }
    }
  
  function makeCollectionButtons(wrong_spelling) {
    collection_container.innerHTML = '';
    for (let i = 0; i < collection_alphabet.length; i++) {
      const list = document.createElement('div');
      if (answer.includes(collection_alphabet[i]) || lives === 0) list.classList.add('disabled');
      else {
        if (wrong_spelling === collection_alphabet[i] || clicked.includes(collection_alphabet[i])) {
          if (!clicked.includes(collection_alphabet[i])) clicked.push(collection_alphabet[i])
          list.classList.add('disabled');
        }
        else list.onclick = onClickCollectionButton;
      }
      list.classList.add('collection-alphabet-wrapper__alphabet');
      list.innerHTML = collection_alphabet[i];
      collection_container.appendChild(list);
    }
  }
  
  function onClicKButton (event) {
    validateAlphabet(event.target.innerHTML);
    validateAnswer();
  };

  function onClickCollectionButton(event) {
    validateCollectionAlphabet(event.target.innerHTML);
    validateAnswer();
  }

  function validateCollectionAlphabet (spelling) {
    if (chosen_problem_word.includes(spelling)) {
      let index = chosen_problem_word.indexOf(spelling);
      // index가 여러개 인거 고려해서 while 문 돌려서 해당 index 전부다 뽑아 내야한다.
      while (index !== -1) {
        answer[index] = spelling;
        index = chosen_problem_word.indexOf(spelling, index + 1);
      }
      makeCollectionButtons();
      updateAnswerElement();
    } else {
      makeCollectionButtons(spelling);
    }
  }

  // spelling: string Type
  function validateAlphabet (spelling) {
    if (chosen_problem_word.includes(spelling)) {
      let index = chosen_problem_word.indexOf(spelling);
      // index가 여러개 인거 고려해서 while 문 돌려서 해당 index 전부다 뽑아 내야한다.
      while (index !== -1) {
        answer[index] = spelling;
        index = chosen_problem_word.indexOf(spelling, index + 1);
      }
      makeButtons();
      makeCollectionButtons();
      updateAnswerElement();
    } else {
      updateLives();
      makeButtons(spelling);
      makeCollectionButtons();
      const frame = draw_array.shift();
      if (frame) frame();
    }
  }

  function validateAnswer() {
    if (!answer.includes('_')) {
      hangman.style.display = 'none';
      hint_wrapper.style.display = 'flex';
      setTimeout(() => {
        hangman.style.display = 'block';
        hint_wrapper.style.display = 'none';
        reset('update');
      }, 5000);
    }
  }

  function updateAnswerElement () {
  problem_wrapper.innerHTML = '';
  for (let i = 0; i < answer.length; i++) {
    problem_wrapper.innerHTML += `
    <div class="problem-wrapper__spelling">${answer[i] === '_' ? '' : answer[i]}</div>
    `;
    }
  }
  function updateLives () {
    lives -= 1;
    if (lives === 0) {
      hint_img.src = chosen_problem_hint;
      const chosen_problem_word_arr = chosen_problem_word.split('');
      problem_wrapper.innerHTML = '';
      for (let x of chosen_problem_word_arr) {
        const answer_index = answer.indexOf(x);
        if (answer_index !== -1) problem_wrapper.innerHTML += `
    <div class="problem-wrapper__spelling">${x}</div>`;
        else problem_wrapper.innerHTML += `<div class="problem-wrapper__spelling text-red">${x}</div>`;
      }
      setTimeout(() => {
        hangman.style.display = 'none';
        hint_wrapper.style.display = 'flex';
      }, 1000);
    }
  }

  // canvas function
  
  function drawFrame1() {
    context.moveTo(650, 400);
    context.lineTo(830, 220);
    context.stroke();
    context.beginPath();
    context.arc(740, 310, 70, 0, Math.PI * 2, true);
    context.stroke();
  }
  
  function drawFrame2() {
    context.moveTo(1050, 400);
    context.lineTo(1230, 220);
    context.stroke();
    context.beginPath();
    context.arc(1140, 310, 70, 0, Math.PI * 2, true);
    context.stroke();
  }
  
  function drawFrame3() {
    context.moveTo(720, 560);
    context.lineTo(1150, 560);
    context.stroke();
    context.beginPath();
    context.moveTo(725, 550);
    context.lineTo(725, 750);
    context.stroke();
    context.beginPath();
    context.moveTo(725, 740);
    context.lineTo(1150, 740);
    context.stroke();
    context.beginPath();
    context.moveTo(1150, 750);
    context.lineTo(1150, 550);
    context.stroke();
  }
  
  function drawFrame4() {
    context.moveTo(860, 560);
    context.lineTo(860, 740);
    context.stroke();
    context.beginPath();
    context.moveTo(1000, 550);
    context.lineTo(1000, 740);
    context.stroke();
  }

  function drawFrame5 () {
    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(800, 150);
    context.lineTo(1000, 150);
    context.stroke();
    context.beginPath();
    context.arc(1015, 150, 20, 0, Math.PI, true);
    context.stroke();
    context.beginPath();
    context.moveTo(800, 100);
    context.lineTo(1000, 100);
    context.stroke();
    context.beginPath();
    context.arc(1015, 100, 20, 0, Math.PI, true);
    context.stroke();
    context.beginPath();
    context.stroke();
    context.moveTo(800, 50);
    context.lineTo(1000, 50);
    context.stroke();
    context.beginPath();
    context.arc(1015, 50, 20, 0, Math.PI, true);
    context.stroke();
  }
  
  function drawFrame6 () {
    context.beginPath();
    context.lineWidth = 20;
    context.arc(950, 500, 550, 0, Math.PI * 2, true);
    context.stroke();
  }
  
  function drawFrame7() {
    context.beginPath();
    context.strokeStyle = '#f00';
    context.moveTo(0, 0);
    context.lineTo(2000, 1038);
    context.stroke();
  }
  
  function drawFrame8() {
    context.moveTo(2000, 0);
    context.lineTo(0, 1038);
    context.stroke();
  }

  function drawCanvas (pathFromX, pathFromY, pathToX, pathToY) {
    context.moveTo(pathFromX, pathFromY); // 그리는 시작점을 설정하는 method
    context.lineTo(pathToX, pathToY); // 시작점에서 lineTo에서 정의한 x, y 값까지 선을 그리는 메서드
    context.stroke();
  }

  function initCanvas () {
    context.beginPath();
    context.strokeStyle = '#fff';
    context.lineWidth = 20;
  }

  // hint
  function showHint() {
    if (on_hint === false) {
      hangman.style.display = 'none';
      hint_wrapper.style.display = 'flex';
      hint_img.src = chosen_problem_hint;
      on_hint = true;
      setTimeout(() => {
        hint_wrapper.style.display = 'none';
        hangman.style.display = 'flex';
        on_hint = false;
      }, 5000);
    }
  }

  function reset (op) {
    lives = 8;
    answer = [];
    clicked = [];
    draw_array = [
    drawFrame1,
    drawFrame2,
    drawFrame3,
    drawFrame4,
    drawFrame5,
    drawFrame6,
    drawFrame7,
    drawFrame8,
  ]; 
    initGame(op);
    context.clearRect(0, 0, 2000, 2000)
  }

  function initGame(op) {
    if (op === 'start') {
      chosen_category_problems = shuffleProblem([...problem_words[chosen_category_id]]);
      chosen_category_problems_count = chosen_category_problems.length;
      if (hangman.style.display === 'none') {
        hangman.style.display = 'block';
        hint_wrapper.style.display = 'none';
      }
    }
    if (chosen_category_problems.length === 0) {
      // modal 띄우는 로직 하고 함수 종료
      end_modal.style.display = 'flex';
      return
    }
    chosen_problem = JSON.parse(JSON.stringify(chosen_category_problems.shift()));
    chosen_problem_word = chosen_problem.problem;
    chosen_problem_hint = chosen_problem.hint;
    chosen_category_problems_now = chosen_category_problems_count - chosen_category_problems.length;
    // view update
    makeButtons();
    makeCollectionButtons();
    initCanvas();
    problem_wrapper.innerHTML = '';
    for (let i = 0; i < chosen_problem_word.length; i++) {
      problem_wrapper.innerHTML += `
      <div class="problem-wrapper__spelling"></div>
      `;
      answer.push('_');
    }
    count_wrapper.innerHTML = `${chosen_category_problems_now} / ${chosen_category_problems_count}`;
  };
  hint_button.onclick = showHint;
  replay_button.onclick = () => reset('start');
  // back_button.onclick = () => onClickStartButton('back');
  modal_button.onclick = ()  => initStart();
}

