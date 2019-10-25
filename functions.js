//task 1
function replaceString(text, searchStr, newStr) {
  //проверка вводных параметров
  if (!text && typeof text !== 'string' || !searchStr && typeof searchStr !== 'string' || typeof newStr !== 'string') { //проверяем, введены ли исходные данные
    return false;
  }
  //переводим переменные в нижний регистр, чтобы функция могла обрабатывать любые значения и не была чувствительна к регистру 
  text = text.toLowerCase();
  searchStr = searchStr.toLowerCase();
  newStr = newStr.toLowerCase();
  //начинаем искать
  if (text.indexOf(searchStr) === -1) {
    return false; //не нашли искомую строку
  }
  for (var i = 0; i < text.length; i++) {
    text = text.replace(searchStr, newStr); //нашли искомую строку и меняем на новую
  }
  return text;
}

//task 2
function isArrayEqual(firstArray, secondArray) {
  if (Array.isArray(firstArray) && Array.isArray(secondArray) && firstArray.length === secondArray.length) { //проверка являютли ли переданные значения массивами + проверка на соответствие длин массивов
    var isEqual = true;
    for (var i = 0; i < firstArray.length; i++) { //если длины массивов совпадают, в цикле сравниваем каждый элемент
      if (firstArray[i] !== secondArray[i]) {
        isEqual = false;
        break; //при несовпадении завершаем цикл
      }
    }
    return isEqual;
  } else {
    return false; // или на вход переданы не массивы длины массивов не совпали
  }
}

//task 3
function flatArray(array) {
  if (Array.isArray(array)) { //проверяем, являются ли введенные данные массивом
    var newArray = [];
    for (var i = 0; i < array.length; i++) { //в цикле проверяем каждый элемент исходного массива
      if (!Array.isArray(array[i]) && typeof array[i] === 'number' && !Number.isNaN(array[i])) { //если элемент массива - чиcло
        newArray.push(array[i]); //записываем его в новый массив
      } else if (Array.isArray(array[i])) { //если элемент исходного массива - массив
        for (var j = 0; j < array[i].length; j++) { //проверяем в цикле его элементы на принадлежность к типу 'number'
          if (typeof array[i][j] === 'number' && !Number.isNaN(array[i][j])) { //если элемент массива - чиcло
            newArray.push(array[i][j]); //записываем его в newArray
          }
        }
      }
    }
    return newArray;
  } else {
    return false; //введенные данные не являются массивом
  }
}

//task4
function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (timeRange1[0] < timeRange2[0] && timeRange1[1] <= timeRange2[0] || timeRange1[0] > timeRange2[0] && timeRange2[1] <= timeRange1[0]) return false;
  else return true;
}

//task5
function check(data, expectedType) {
  var result = false;

  if (expectedType === 'array' && Array.isArray(data)) {
    result = true;
  }

  if (expectedType === 'number' && typeof data === 'number') {
    result = true;
  }
  if (expectedType === 'string' && typeof data === 'string') {
    result = true;
  }

  if (expectedType === 'object' && data !== null && data.constructor === Object) {
    result = true;
  }

  if (expectedType === 'null' && typeof data === 'null') {
    result = true;
  }

  return result;
}

//task6
var tracks = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3', 'song5.mp3'];
var Player = {
  currentTrack: 0,
  status: 'pause',
  display: function() {
    return 'Track: ' + tracks[this.currentTrack] + ' Status: ' + this.status;
  },
  play: function() {
    if (tracks.length !== 0) {
      this.status = 'play';
    } else {
      this.currentTrack = 'Nothing to play!'
    }
  },
  pause: function() {
    if (tracks.length !== 0) {
      this.status = 'pause';
    } else {
      this.currentTrack = 'Nothing to play!'
    }
  },
  next: function() {
    if (this.currentTrack < tracks.length - 1) {
      this.currentTrack++;
    } else {
      this.currentTrack = 0;
    }
  },
  prev: function() {
    if (this.currentTrack !== 0) {
      this.currentTrack--;
    } else {
      this.currentTrack = tracks.length - 1;
    }
  }
}

//это от себя добавил
document.getElementsByClassName('prev')[0].onclick = function() {
  Player.prev();
  document.getElementsByClassName('player')[0].innerHTML = Player.display();
}

document.getElementsByClassName('next')[0].onclick = function() {
  Player.next();
  document.getElementsByClassName('player')[0].innerHTML = Player.display();
}

document.getElementsByClassName('play')[0].onclick = function() {
  Player.play();
  document.getElementsByClassName('player')[0].innerHTML = Player.display();
}

document.getElementsByClassName('pause')[0].onclick = function() {
  Player.pause();
  document.getElementsByClassName('player')[0].innerHTML = Player.display();
}
