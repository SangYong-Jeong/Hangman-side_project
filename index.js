// window.onload = function () {
//   const alphabet = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // array of alphabet 

//   const alphabet_wrapper = document.querySelector('.alphabet-wrapper');
//   const problem_wrapper = document.querySelector('.problem-wrapper__problem');
//   const life_wrapper = document.querySelector('.problem-wrapper__my-lives');
//   const clue_wrapper = document.querySelector('.problem-wrapper__clue');
//   const hangman = document.getElementById('hangman');
//   const context = hangman.getContext('2d');
//   const hint_button = document.querySelector('.button-wrapper__hint-button');
//   const replay_button = document.querySelector('.button-wrapper__replay-button');
//   const problem = 'monkey';
//   let clicked = [];
//   let answer = [];
//   let lives = 10;

//   let hint_count = 1;
//   const hint = 'It likes bananas.';

//   let draw_array = [drawFrame1, drawFrame2, drawFrame3, drawFrame4, drawHead, drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg]; // shift method 이용해서 하나하나씩 함수 실행할 예정


//   function showHint () {
//     if (hint_count > 0) {
//       // 힌트 하나 준다. clue-wrapper update 필요
//       clue_wrapper.innerHTML += hint;
//     }
//     hint_count -= 1;
//   }

//   function reset () {
//     hint_count = 1;
//     lives = 10;
//     alphabet_wrapper.innerHTML = '';
//     problem_wrapper.innerHTML = '';
//     answer = [];
//     clicked = [];
//     draw_array = [drawFrame1, drawFrame2, drawFrame3, drawFrame4, drawHead, drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg]
//     init();
//     context.clearRect(0, 0, 400, 400)
//   }

//   function makeButtons (wrong_spelling) {
//     alphabet_wrapper.innerHTML = '';
//     for (let i = 0; i < alphabet.length; i++) {
//       const list = document.createElement('div');
//       if (answer.includes(alphabet[i])) list.classList.add('disabled');
//       else {
//         if (wrong_spelling === alphabet[i] || clicked.includes(alphabet[i]) ) {
//           if (!clicked.includes(alphabet[i])) clicked.push(alphabet[i])
//           list.classList.add('disabled');
//         }
//         else list.onclick = onClicKButton;
//       }
//       list.classList.add('alphabet-wrapper__alphabet');
//       list.innerHTML = alphabet[i];
//       alphabet_wrapper.appendChild(list);
//     }
//   }

//   function updateAnswerElement () {
//     problem_wrapper.innerHTML = '';
//     for (let i = 0; i < answer.length; i++) {
//       problem_wrapper.innerHTML += `
//       <div class="problem-wrapper__spelling">${answer[i]}</div>
//       `;
//     }
//   }
  
//   function updateLives () {
//     lives -= 1;
//     if (lives === 0) life_wrapper.innerHTML = 'Game over!';
//     else life_wrapper.innerHTML = `현재 남은 목숨은 ${lives}입니다!`;
//   }

//   function gameOver() {
//     // 모든 button disabled 처리 
//     // 정답이 problem-wrapper에 나오게 세팅
//     // 힌트 버튼은 없애고 다시 시작 버튼만 세팅
//   }

//   // spelling: string Type
//   function validateAlphabet (spelling) {
//     if (problem.includes(spelling)) {
//       let index = problem.indexOf(spelling);
//       // index가 여러개 인거 고려해서 while 문 돌려서 해당 index 전부다 뽑아 내야한다.
//       while (index !== -1) {
//         answer[index] = spelling;
//         index = problem.indexOf(spelling, index + 1);
//       }
//       makeButtons();
//       updateAnswerElement();
//     } else {
//       // 틀린 경우.. canvas에 졸라맨 생성 -> 이건 좀 알아봐야한다.
//       // + 틀린 경우 life-wrapper.innerHTML update 필요
//       updateLives();
//       makeButtons(spelling);
//       const frame = draw_array.shift();
//       if (frame) frame();
//     }
//   }

//   function onClicKButton (event) {
//     validateAlphabet(event.target.innerHTML);
//   };  

//   function init() {
//     for (let i = 0; i < alphabet.length; i++) {
//       const list = document.createElement('div');
//       list.onclick = onClicKButton;
//       list.classList.add('alphabet-wrapper__alphabet');
//       list.innerHTML = alphabet[i];
//       alphabet_wrapper.appendChild(list); 
//     }
  
//     for (let i = 0; i < problem.length; i++) {
//       problem_wrapper.innerHTML += `
//       <div class="problem-wrapper__spelling">_</div>
//       `;
//       answer.push('_');
//     }
//     life_wrapper.innerHTML = `현재 남은 목숨은 ${lives}개 입니다!`;
//     initCanvas();
//   }

//   function initCanvas () {
//     context.beginPath();
//     context.strokeStyle = '#fff';
//     context.lineWidth = 2;
//   }
  

//   function drawHead () {
//     context.beginPath();
//     context.arc(75, 30, 10, 0, Math.PI * 2, true);
//     context.stroke();
//   }
  
//   function drawCanvas (pathFromX, pathFromY, pathToX, pathToY) {
//     context.moveTo(pathFromX, pathFromY); // 그리는 시작점을 설정하는 method
//     context.lineTo(pathToX, pathToY); // 시작점에서 lineTo에서 정의한 x, y 값까지 선을 그리는 메서드
//     context.stroke();
//   }
  
//   function drawBody () {
//     drawCanvas(75, 40, 75, 70)
//   }
  
//   function drawLeftArm () {
//     drawCanvas(75, 40, 60, 50);
//   }
  
//   function drawRightArm() {
//     drawCanvas(75, 40, 90, 50);
//   }
  
//   function drawLeftLeg() {
//     drawCanvas(75, 70, 60, 80);
//   }
  
//   function drawRightLeg() {
//     drawCanvas(75, 70, 90, 80);
//   }
  
  
  
//   function drawFrame1() {
//     drawCanvas(0, 150, 150, 150);
//   }
  
//   function drawFrame2() {
//     drawCanvas(20, 150, 20 ,0);
//   }
  
//   function drawFrame3() {
//     drawCanvas(10, 0, 100, 0);
//   }
  
//   function drawFrame4() {
//     drawCanvas(75, 0, 75, 20);
//   }

//   // queryt_string 활용해서 선택한 category 에 맞게 문제 setting
//   // const query_string = window.location.search;
//   // console.log(query_string.substring(1, query_string.length).split('=')[1]);
  
//   // category 고르는 page settting + category 별로 우선 문제 1개씩 세팅 필요
//   // 어떤 category들이 들어가면 좋을 지 한번 check 해보자 ( 영단어 game site 참고 )
  
//   init();
//   // hint 버튼에 onClick method setting
//   hint_button.onclick = showHint;
//   replay_button.onclick = reset;
// }


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

window.onload = function () {
  const categories = ['Animals', 'Home', 'Clothes', 'Food', 'Jobs', 'Sports', 'Countries', 'Colors', 'Transport'];
  // container 
  const category_container = document.querySelector('.category-wrapper');
  const problem_container = document.querySelector('.problem-wrapper');

  // wrapper 
  const category_wrapper = document.querySelector('.category-wrapper__wrap');
  const alphabet_wrapper = document.querySelector('.alphabet-wrapper');
  const problem_wrapper = document.querySelector('.problem-wrapper__problem');
  const life_wrapper = document.querySelector('.problem-wrapper__my-lives');
  const clue_wrapper = document.querySelector('.problem-wrapper__clue');
  const hangman = document.getElementById('hangman');
  let chosen_category = '';

  function hangmanGameStart () {
    
  }

  function onClickCategory (event) {
    chosen_category = event.target.innerHTML;
    // 여기서 이제 hangman game이 나오면 될 것 같다.
  }

  function init () {
    for (let i = 0; i < categories.length; i++) {
      const category_list = document.createElement('div');
      category_list.classList.add('category-wrapper__wrap__category');
      category_list.onclick = onClickCategory;
      category_list.innerHTML = categories[i];
      category_wrapper.appendChild(category_list);
    }
  }

  init();
}

// border 가 계속 움직이는 animation 있으면 좋을 것 같다. 추가해보자!