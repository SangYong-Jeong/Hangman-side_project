/* 
UI 기획 
1) 카테고리 선택 기능 page 따로 구현 필요 -> category 선택하는 page 따로 구현
2) 카테고리 클릭 후에 나오는 화면 구현 (퍼블리싱) -> 완료
3) button 나와야함 -> innerHTML 이용해서 구현 필요 -> 구현 완료 
4) 해당 카테고리 나와야하고 -> 이건 나중에 구현 + 답으로 정해져있는 단어는 미리 정해져야한다.
-> 문제 배열이 필요한다. 우선 하나의 문제만 푼다고 가정하고 코딩
-> 해당 문자열의 length 만큼 problem__wrapper__spelling 태그 생성 -> 구현 완료
-> 버튼 클릭시 검증 필요 (클릭 이벤트 구현 완료) -> 맞다면 answer update 해당 index의 spelling update 및 버튼 disabled 줘야한다. (다시 for문을 돌려서 button setting?) + 다시 for 문을 돌려서 problem_wrapper 안에 들어가는 tag 재생성 및 배치 필요 / 틀린 spelling 인 경우에는 canvas에 졸라맨 그려서 해당 hangman 이 나오게 setting -> 총 10번의 기회를 줄 예정이다. -> 구현 완료
-> 틀렸다면 canvas에 졸라맨 생성 및 -> lives 1 감소 기능 구현 필요 -> 구현 완료
-> 틀린 거 click 시에도 버튼에 disabled 걸어줘야 한다..... () -> 구현 완료
-> canvas 졸라맨으로 그려주는 작업필요  -> 구현 완료
-> canvas 이용해서 hangman 그리기 ~ 완성

-> 0 되면 gameover 나오게 setting -> 그리고 답이 나오게 setting 및 모든 button 같은 경우에는 disabled 처리 필요
-> 힌트 및 다시풀기 기능 구현 -> 힌트 버튼은 구현 완료
-> hint 버튼 누르면 clue 에 관련 단어의 hint 추가 -> 구현 완료
-> replay 버튼 누르면 전부다 reset 되고 다시 start 새로고침 강제로 발생시킨다? -> 깜빡이는게 ui상 별로일 것같다. 초기화 할 부분만 선정해서 해당부분만 reset 시켜주면 될것 같다. init 하는 부분들을 함수로 뺀 다음 해당 함수를 다시 실행해 reset 해주면 될 것같다. good -> 구현 완료 
-> scss 파일 분리 필요 (완성 되었다 느낄 때)

-> 이제 구현해야할 부분 -> category 선택 page 
-> (좀 더 고도화 시킨다면 a, e, i, o, u) 모음은 전부 선택할 수 있게하고 lives는 안깎이게 세팅
-> 하지만 자음은 틀리면 - 1

-> 카테고리 page 퍼블리싱 필요
-> 쿼리 스트링 또는 path 이용해서 어떤 category인지 구분 필요 -> method 및 속성 존재하는 지 확인 필요

-> 및 간단한 data들 -> firebase 활용해서? -> 추후에.. 전체적인 기능 구현후 그에 맞춰 data 생성 하면 될것같다. ajax 이용 (axios)

-> 한 page 안에서 클릭 시 category 선택 되고 back 누르면 다시 category 창 나오게 setting 필요 (작업 우선순위 0순위) + hangman game 부분에서 back 버튼 (category선택으로 돌아갈 수 있는 버튼 필요) -> 다음주에 작업 start 아침에 (+ 주말에 )

-> 카테고리 js로 세팅 (init)

*/

// constant
const categories = ['Animals', 'Home', 'Clothes', 'Food', 'Jobs', 'Sports', 'Countries', 'Colors', 'Transport'];


// 문제 같은 경우에는 해당 배열의 순서를 random 으로 섞어서 { problem: string; hint: string } 이 형태로 짜는게 제일 베스트일 것 같다.

// Animals 카테고리로 테스트 진행하면서 개발
const problem_words = [
  [
    { problem: 'dog', hint: 'It likes people' },
    { problem: 'cat', hint: 'It doesn\'t care about people ' }
  ]
  ,
  [
    { problem: 'sofa', hint: 'It gives people comfort ' },
  ],
  [
    { problem: 'socks', hint: 'It\'s on your feet.' },
  ],
  [
    { problem: 'chocolate', hint: 'The food is very sweet.' },
  ],
  [
    { problem: 'doctor', hint: 'The job heals people.' },
  ],
  [
    { problem: 'soccer', hint: 'That exercise is kicking a ball with your feet.' },
  ],
  [
    { problem: 'China', hint: 'That country has the most population in the world.' },
  ],
  [
    { problem: 'blue', hint: 'This color is the color of the sea.' },
  ],
  [
    { problem: 'boat', hint: 'It\'s moving on the sea.' },
  ]
];

window.onload = function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // container 
  const header_container = document.querySelector('.header-wrapper');
  const problem_header_container = document.querySelector('.problem-header-wrapper');
  const start_container = document.querySelector('.start-wrapper');
  const category_container = document.querySelector('.category-wrapper');
  const problem_page_container = document.querySelector('.problem-container');
  const problem_container = document.querySelector('.problem-wrapper');
  const loading_container = document.querySelector('.progress-wrapper');
  const alphabet_container = document.querySelector('.alphabet-wrapper');
  const canvas_container = document.querySelector('.canvas-wrapper');
  const button_container = document.querySelector('.button-wrapper');

  // wrapper 
  const start_wrapper = document.querySelector('.start-wrapper__wrap');
  const count_wrapper = document.querySelector('.problem-header-wrapper__count');
  const category_wrapper = document.querySelector('.category-wrapper__wrap');
  const problem_wrapper = document.querySelector('.problem-wrapper__problem');
  const life_wrapper = document.querySelector('.problem-wrapper__my-lives');
  const clue_wrapper = document.querySelector('.problem-wrapper__clue');
  const hangman = document.getElementById('hangman');
  const context = hangman.getContext('2d');
  
  // modal 
  const end_modal = document.querySelector('.congratulation-modal');

  // element
  const start_button = document.querySelector('.start-wrapper__button');
  const hint_button = document.querySelector('.button-wrapper__hint-button');
  const replay_button = document.querySelector('.button-wrapper__replay-button');
  const back_button = document.querySelector('.button-wrapper__back-button')
  const modal_button = document.querySelector('.congratulation-modal__button');

  // variables
  let chosen_category_id = '';
  let chosen_category_problems = [];
  let chosen_category_problems_count = 0;
  let chosen_category_problems_now = 0;
  let chosen_problem = '';
  let chosen_problem_word = '';

  let clicked = [];
  let answer = [];
  let lives = 10;

  let chosen_problem_hint_count = 1;
  let chosen_problem_hint = '';

  // canvas 
  let draw_array = [
    drawFrame1,
    drawFrame2,
    drawFrame3,
    drawFrame4,
    drawHead,
    drawBody,
    drawLeftArm,
    drawRightArm,
    drawLeftLeg,
    drawRightLeg
  ]; // shift method 이용해서 하나하나씩 함수 실행할 예정

  // event
  start_button.addEventListener('click', onClickStartButton);

  function onClickStartButton (op) {
    // start_button 클릭 시 일어나는 햔싱
    if (op === 'back') {
      category_wrapper.innerHTML = '';
      problem_page_container.style.display = 'none'
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
    problem_page_container.style.display = 'block'
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
        start_container.style.display = 'block';
        loading_container.style.display = 'none'
      }, 2000)
  }

    function makeButtons (wrong_spelling) {
    alphabet_container.innerHTML = '';
    for (let i = 0; i < alphabet.length; i++) {
      const list = document.createElement('div');
      if (answer.includes(alphabet[i]) || lives === 0) list.classList.add('disabled');
      else {
        if (wrong_spelling === alphabet[i] || clicked.includes(alphabet[i]) ) {
          if (!clicked.includes(alphabet[i])) clicked.push(alphabet[i])
          list.classList.add('disabled');
        }
        else list.onclick = onClicKButton;
      }
      list.classList.add('alphabet-wrapper__alphabet');
      list.innerHTML = alphabet[i];
      alphabet_container.appendChild(list);
    }
    }
  
  function onClicKButton (event) {
    validateAlphabet(event.target.innerHTML);
    validateAnswer();
  };

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
      updateAnswerElement();
    } else {
      // 틀린 경우.. canvas에 졸라맨 생성 -> 이건 좀 알아봐야한다.
      // + 틀린 경우 life-wrapper.innerHTML update 필요
      updateLives();
      makeButtons(spelling);
      const frame = draw_array.shift();
      if (frame) frame();
    }
  }

  function validateAnswer() {
    if (!answer.includes('_')) {
      // 정답인 경우이다. 이 경우 chosen_problem_update 작업 필요
      reset('update');
    }
  }

  function updateAnswerElement () {
  problem_wrapper.innerHTML = '';
  for (let i = 0; i < answer.length; i++) {
    problem_wrapper.innerHTML += `
    <div class="problem-wrapper__spelling">${answer[i]}</div>
    `;
    }
  }

  function updateLives () {
    lives -= 1;
    if (lives === 0) life_wrapper.innerHTML = `<span style="color: red;">Game over!</spna>`;
    else life_wrapper.innerHTML = `현재 남은 목숨은 ${lives}입니다!`;
  }

  // canvas function

  function drawFrame1() {
    drawCanvas(0, 150, 150, 150);
  }
  
  function drawFrame2() {
    drawCanvas(20, 150, 20 ,0);
  }
  
  function drawFrame3() {
    drawCanvas(10, 0, 100, 0);
  }
  
  function drawFrame4() {
    drawCanvas(75, 0, 75, 20);
  }

  function drawHead () {
    context.beginPath();
    context.arc(75, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  }
  
  function drawBody () {
    drawCanvas(75, 40, 75, 70)
  }
  
  function drawLeftArm () {
    drawCanvas(75, 40, 60, 50);
  }
  
  function drawRightArm() {
    drawCanvas(75, 40, 90, 50);
  }
  
  function drawLeftLeg() {
    drawCanvas(75, 70, 60, 80);
  }
  
  function drawRightLeg() {
    drawCanvas(75, 70, 90, 80);
  }

  function drawCanvas (pathFromX, pathFromY, pathToX, pathToY) {
    context.moveTo(pathFromX, pathFromY); // 그리는 시작점을 설정하는 method
    context.lineTo(pathToX, pathToY); // 시작점에서 lineTo에서 정의한 x, y 값까지 선을 그리는 메서드
    context.stroke();
  }

  function initCanvas () {
    context.beginPath();
    context.strokeStyle = '#fff';
    context.lineWidth = 2;
  }

  // hint
  function showHint () {
    if (chosen_problem_hint_count > 0) {
      // 힌트 하나 준다. clue-wrapper update 필요
      clue_wrapper.innerHTML += `<span style="color: red; margin-left: 1rem;">${chosen_problem_hint}</span>`;
    }
    chosen_problem_hint_count -= 1;
  }

  function reset (op) {
    chosen_problem_hint_count = 1;
    lives = 10;
    alphabet_container.innerHTML = '';
    problem_wrapper.innerHTML = '';
    clue_wrapper.innerHTML = 'Clue -';
    answer = [];
    clicked = [];
    draw_array = [drawFrame1, drawFrame2, drawFrame3, drawFrame4, drawHead, drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg]
    initGame(op);
    context.clearRect(0, 0, 400, 400)
  }

  function initGame(op) {
    if (op === 'start') {
      chosen_category_problems = shuffleProblem([...problem_words[chosen_category_id]]);
      chosen_category_problems_count = chosen_category_problems.length;
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
    initCanvas();
    for (let i = 0; i < chosen_problem_word.length; i++) {
      problem_wrapper.innerHTML += `
      <div class="problem-wrapper__spelling">_</div>
      `;
      answer.push('_');
    }
    life_wrapper.innerHTML = `현재 남은 목숨은 ${lives}개 입니다!`;
    count_wrapper.innerHTML = `${chosen_category_problems_now} / ${chosen_category_problems_count}`;
  };
  hint_button.onclick = showHint;
  replay_button.onclick = () => reset('start');
  back_button.onclick = () => onClickStartButton('back');
  modal_button.onclick = ()  => initStart();
}

    
// 기본적으로 구현할려고 했던 기능들은 전부 구현해놓은 상태

// 이제 문제 맞춘 경우에 다음 문제로 넘어가는 logic ( 맞은 count + 문제의 총수를 오른쪽 위에 표현하면 좋을 것 같다. ) -> 구현 start -> 변수는 세팅 이제 이걸 html tag에 맞게 뿌려주면 된다. prototype을 통해 화면에 어떻게 나오는 지 대략적으로 파악한 후에 js로 구현 -> 구현 완료

// reset 에서 error 발생.. reset 버튼을 눌렀는데 now가 계속 update 되는 현상이 발생하고 있다.. -> 해결 완료

// 문제 다 풀고 나면 Congraturation Modal 나와서 축하 후 카테고리 선택 화면으로 가는 button 클릭 하면 넘어가게 세팅 -> 일단 modal 창 세팅은 완료 마지막 문제 끝났을 때 모달창 띄워주게 세팅 -> 구현 완료 -> 여기서 Go to Category 버튼 클릭 시 다시 카테고리 선택화면으로 나오게 세팅 ( 중간에 로딩 바 나오게 세팅 ) -> 구현 완료


// back button 구현 ( loading bar open ) => Category click 으로 돌아가는 기능 구현 -> start -> 구현 완료

// category 별 문제 setting -> start -> prototype 용으로 간단히 -> 완료


// design 적인 측면 좀 잘 잡으면 마무리일 것같다. -> layout 잡아주기
// 반응형 잡기
// 중복되는 코드들 수정하고 마무리 

/* 
design 추가로 잡아야 할 부분 -> cateogry 쪽  
start 쪽도 심심
design 느낌 대로 하는중 + problem-header-wrapper 카테고리로 돌아갈 때 display 수정 시키기 ( header-wrapper는 display: block;으로 바꾸기  )

clue 같은 경우 좀 강조되게 clue 라는 거 알려줄 수 있게 세팅
game over 시 modal 이용해서 게임 오버 되었고 button 클릭 시 다시 카테고리로 보내기
전체적으로 감싸는 wrapper 하나 만들기
1차 완성

-> 모음 먼저 선택하는 기능 있으면 좋을 것 같다.
*/