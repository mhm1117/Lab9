
window.addEventListener('DOMContentLoaded', init);
let errorBtns;
let form;

function init() {

  form = document.querySelector('form');
    try {
      form.addEventListener('submit', e => {
        e.preventDefault();
          let output = document.querySelector('output');
          let firstNum = document.querySelector('#first-num').value;
          let secondNum = document.querySelector('#second-num').value;
          let operator = document.querySelector('#operator').value;
          try {
            if (firstNum == "" || secondNum == "")
              throw new NoInputError("No number inputted");
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
          } catch (err) {
            if (err instanceof NoInputError) {
              console.error("Invalid Input: " + err.message);
            }
            else if (err instanceof SyntaxError)
              console.error("Input Syntax Error: " + err.message);
            else 
              throw err;
          }
      });
    } catch (err) {
      throw err;
    } finally {
      errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
      addBtnListeners();
    }
}

class NoInputError extends Error {
  constructor(message) {
    super(message);
    this.name="NumberInputError";
  }
}

window.onerror = (event, source, lineno, colno, error) => {
  console.log("Oh No! There's an error!");
  //throw error;
}

function addBtnListeners() {

    errorBtns[0].addEventListener('click', function logBtn() { console.log("Console Log Demo"); });

    errorBtns[1].addEventListener('click', function errorBtn() { console.error("Console Error Demo"); });

    errorBtns[2].addEventListener('click', function consoleCntBtn() { console.count("Console Count Button"); });

    errorBtns[3].addEventListener('click', function warnBtn() { console.warn("Console Warn Demo"); });

    let x = 5; 
    let errorMsg = 'x does not equal 0';
    errorBtns[4].addEventListener('click', function assertBtn() { console.assert(x == 0, {x, errorMsg}); });

    errorBtns[5].addEventListener('click', function clearConsoleBtn() { console.clear(); });

    errorBtns[6].addEventListener('click', function dirBtn() { console.dir(document.querySelector("form")); });

    errorBtns[7].addEventListener('click', function dirxmlBtn() { console.dirxml(document.body); });

    errorBtns[8].addEventListener('click', function startGroupBtn() { console.group("Console Group Demo"); });

    errorBtns[9].addEventListener('click', function endGroupBtn() { console.groupEnd(); });

    let grades = [
        {
            Name: 'Bob',
            Grade: 'A',
        },
        {
            Name: 'Bert',
            Grade: 'D',
        },
        {
            Name: 'Ana',
            Grade: 'B',
        },
    ];
    errorBtns[10].addEventListener('click', function tableBtn() { console.table(grades); });

    errorBtns[11].addEventListener('click', function startTimerBtn() { console.time(); });

    errorBtns[12].addEventListener('click', function endTimerBtn() { console.timeEnd(); });

    errorBtns[13].addEventListener('click', function consoleTraceBtn() { 
        const deep = () => { deeper(); };
        const deeper = () => { console.trace(); } 
        deep();
    });

    errorBtns[14].addEventListener('click', function globalErrorBtn() { badcode(); });
}

function badcode() {
  something();
}