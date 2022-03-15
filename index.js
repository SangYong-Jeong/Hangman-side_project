window.onload = function () {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  var categories; // 카테고리들의 배열
  var chosenCategory; // 선택된 카테고리
  var getHint; // 단어에 대한 힌트
  var word; // 선택된 단어
  var guess; // 
  var guesses = []; //  
  var lives; // 목숨
  var counter; // 정확히 맞은 것들 (찍은 것들 중에서)
  var space; // '-'의 수

  // Get elements
  var showLives = document.getElementById('mylives');
  var showCategory = document.getElementById('scategory') // ?
  var getHint = document.getElementById('hint');
  var showClue = document.getElementById('clue');

  // 알파벳 목록 생성 
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet'
    }
  }

}