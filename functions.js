//task 1
function replaceString(text, searchStr, newStr) {
  //проверка вводных параметров
  if (!text || !searchStr || newStr == undefined) { //проверяем, введены ли исходные данные
    console.log('Wrong parameters!');
  } else {
    //переводим переменные в нижний регистр, чтобы функция могла обрабатывать любые значения и не была чувствительна к регистру 
    text = text.toLowerCase();
    searchStr = searchStr.toLowerCase();
    newStr = newStr.toLowerCase();
    //начинаем искать
    if (text.indexOf(searchStr) == -1) {
      return false; //не нашли искомую строку
    } else {
      for (var i = 0; i < text.length; i++) {
        text = text.replace(searchStr, newStr); //нашли искомую строку и меняем на новую
      }
      return text;
    }
  }
}

//task 2
function isArrayEqual(firstArray, secondArray) {
  if (Array.isArray(firstArray) && Array.isArray(secondArray)) { //проверка являютли ли переданные значения массивами
    if (firstArray.length == secondArray.length) { //проверка на соответствие длин массивов
      var result = true;
      for (var i = 0; i < firstArray.length; i++) { //если длины массивов совпадают, в цикле сравниваем каждый элемент
        if (firstArray[i] !== secondArray[i]) {
          result = false;
          break; //при несовпадении завершаем цикл
        }
      }
      return result;
    } else {
      return false; //длины массивов не совпали
    }
  } else {
    return false; //на вход переданы не массивы
  }
}

//task 3
function flatArray(array) {
  if (Array.isArray(array)) { //проверяем, являются ли введенные данные массивом
    var newArray = [];
    for (var i = 0; i < array.length; i++) { //в цикле проверяем каждый элемент исходного массива
      if (!Array.isArray(array[i]) && typeof array[i] == 'number' && !Number.isNaN(array[i])) { //если элемент массива - чиcло
        newArray.push(array[i]); //записываем его в новый массив
      } else if (Array.isArray(array[i])) { //если элемент исходного массива - массив
        for (var j = 0; j < array[i].length; j++) { //проверяем в цикле его элементы на принадлежность к типу 'number'
          if (typeof array[i][j] == 'number' && !Number.isNaN(array[i][j])) { //если элемент массива - чиcло
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
  if (timeRange1[0] < timeRange2[0]) {
    if (timeRange1[1] <= timeRange2[0]) return false;
    else return true;
  } else {
    if (timeRange2[1] <= timeRange1[0]) return false;
    else return true;
  }
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

  if (expectedType === 'object' && data != null && data.constructor === Object) {
    result = true;
  }

  if (expectedType === 'null' && typeof data === 'null') {
    result = true;
  }

  return result;
}

//task6
var tracks = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3', 'song5.mp3', 'song6.mp3', 'song7.mp3'];
var Player = {
  currentTrack: tracks[0],
  status: 'pause',
  display: function() {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  },
  play: function() {
    this.status = 'play';
  },
  pause: function() {
    this.status = 'pause';
  },
  next: function() {
    if (this.currentTrack != tracks[tracks.length - 1]) {
      this.currentTrack = tracks[tracks.indexOf(this.currentTrack) + 1];
    } else {
      this.currentTrack = tracks[0];
    }
  },
  prev: function() {
    if (this.currentTrack != tracks[0]) {
      this.currentTrack = tracks[tracks.indexOf(this.currentTrack) - 1];
    } else {
      this.currentTrack = tracks[tracks.length - 1];
    }
  }
}