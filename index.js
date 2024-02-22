import { generateWo, startUnlocked, selectList } from "./woGenerator.js";
import { playClicked, pauseClicked, stopClicked } from "./clock.js";

let workOut;

let ul = document.getElementById("ul-wo");
let startBtn = document.getElementById("start-btn");

let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset-btn");

//vaciar ul-wo
let emptyUl = () => {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
};


//método que genera elementos <li>
let generateLi = () => {
    console.log("generating li's now")
    let li;
    workOut = generateWo();
    workOut.forEach((exercise, i) => {
        li = document.createElement("li");
        li.setAttribute("class","li-wo");
        li.setAttribute("id",`li-${i}`);
        li.textContent = exercise;
        ul.appendChild(li);     
    });
};




let startClicked = () => {
    if(startUnlocked) {
        emptyUl();
        playClicked();
    }
};

resetBtn.addEventListener('click', () => stopClicked());
pauseBtn.addEventListener('click', () => pauseClicked());
startBtn.addEventListener('click', () => startClicked());


//BOTÓN "START"
//bloqueado hasta que se haya generado el workout
//al pulsarlo, inicia/abilita el cronómetro y mostrador de workout
//una vez pulsado, su nombre cambia a "Next"
//BOTÓN DE NEXT
//salta al siguiente elemento de la lista en el mostrador de workout
//sustituye al botón de "Start" una vez que este se haya pulsado
//al encontrarse en el último elemento de la lista del mostrador de
//workout, es sustituido por el botón de "=== FINISH ==="
//BOTÓN DE FINISH
//al pusarlo, el programa se reinicia por completo. Misma función del
//botón "Quit"


//MOSTRADOR DE WORKOUT
//indica la lista de ejercicios y descansos y en cuál de ellos nos 
//encontramos actualmente. Para ello, el código pone en highlight dicho
//elemento


//BOTÓN "QUIT"
//al pusarlo, el programa se reinicia por completo

