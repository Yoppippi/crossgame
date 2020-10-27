let flag = false;
let winningLine = null;
const squares = document.querySelectorAll('.square');
const squaresArray = [].slice.call(squares); 
const messages = document.querySelectorAll('.message-list li');
const messagesArray = [].slice.call(messages); 
const resetBtn = document.querySelector('#reset-btn');

const setMessage = (id) => {
    messagesArray.forEach((message) => {
        if (message.id === id) {
            message.classList.remove('js-hidden');
        } else {
            message.classList.add('js-hidden');
        }
    });
}

const filterById = (targetArray, idArray) => {
    return targetArray.filter((e) => {
        return (e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}
const line1 = filterById(squaresArray, ['1-1', '1-2', '1-3']);
const line2 = filterById(squaresArray, ['2-1', '2-2', '2-3']);
const line3 = filterById(squaresArray, ['3-1', '3-2', '3-3']);
const line4 = filterById(squaresArray, ['1-1', '2-1', '3-1']);
const line5 = filterById(squaresArray, ['1-2', '2-2', '3-2']);
const line6 = filterById(squaresArray, ['1-3', '2-3', '3-3']);
const line7 = filterById(squaresArray, ['1-1', '2-2', '3-3']);
const line8 = filterById(squaresArray, ['1-3', '2-2', '3-1']);
const lineArray = [line1, line2, line3, line4, line5, line6, line7, line8];
const isWinner = (symbol) => {
    const result = lineArray.some((line) => {
        const subResult = line.every((square) => {
            if (symbol === 'maru') {
                return square.classList.contains('js-maru-checked');
            } else 
            if (symbol === 'batsu') {
                return square.classList.contains('js-batsu-checked');
            }
        });

        if (subResult) { winningLine = line }

        return subResult;
    });
    return result;
}

squaresArray.forEach((square) => {
    square.addEventListener('click', () => {
        if (flag === true) {
            if (square.classList.contains('js-maru-checked')) {
              square.classList.add('js-maru-checked-4');
              square.classList.add('js-unclickable');
            };
              square.classList.add('js-maru-checked');
              
              if (square.classList.contains('js-batsu-checked')) {
                square.classList.add('js-maru-checked-2');
                square.classList.add('js-unclickable');
              };

              if (isWinner('maru')) {
                  setMessage('maru-win');
                  gameOver();
                  return;
              }
  
              setMessage('batsu-turn');
              flag = false;
  
          } else {
            if (square.classList.contains('js-batsu-checked')) {
              square.classList.add('js-batsu-checked-5');
              square.classList.add('js-unclickable');
            };
              square.classList.add('js-batsu-checked');
  
              if (square.classList.contains('js-maru-checked')) {
                square.classList.add('js-batsu-checked-3');
                square.classList.add('js-unclickable');
              };
  
              if (isWinner('batsu')) {
                  setMessage('batsu-win');
                  gameOver();
                  return;
              }
  
              setMessage('maru-turn');
              flag = true;
          }

        counter--;
    });
});

function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
  
    var blackBg = document.getElementById('js-black-bg');
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
  popupImage();