// ==UserScript==
// @name        New script - exercism.org
// @namespace   Violentmonkey Scripts
// @match       https://exercism.org/tracks/*/exercises
// @grant       none
// @version     1.0
// @author      -
// @description 8/11/2022, 10:43:20 PM
// ==/UserScript==
const style = document.querySelector("style");
const body = document.querySelector("body");
const buttons = document.createElement("div");
const cc = document.createElement("div");

const expanded = `<button class="buttons">Easy</button>
                  <button class="buttons">Medium</button>
                  <button class="buttons">Hard</button>`;

cc.innerHTML = `<button class="buttons">Clear</button>
                <button class="buttons button-cc">[x]</button>`

style.innerHTML += `
.buttons-div {
    display: flex;
    position: fixed;
    top: 0px;
    flex-direction: column;
    gap: 10px;
    max-width: 100px;
    z-index: 100;
    background-color: #E0E0E0;
}
.buttons {
    padding: 3px 5px;
}
.cc {
  display: flex;
}
.button-cc {
  font-weight: bold;
}`

buttons.classList.toggle("buttons-div");
cc.classList.toggle("cc");
expand();

body.appendChild(buttons);

function filterByDiff (e) {
    const cards = document.querySelectorAll(".c-exercise-widget");
    const diff = e.target.innerText.toLowerCase();
    cards.forEach(card => card.style.display = (card.querySelector(`.--${diff}`) ? '' : 'none'));
}

function clearFilter () {
    const cards = document.querySelectorAll(".c-exercise-widget");
    cards.forEach(card => card.style.display = '');
}

function collapse () {
  buttons.innerHTML = `<button class="buttons button-cc">[+]</button>`;
  buttons.firstChild.addEventListener("click", expand);
}

function expand () {
  buttons.innerHTML = expanded;
  Array.from(buttons.children).forEach(child => child.addEventListener("click", filterByDiff));
  buttons.appendChild(cc);
  cc.firstChild.addEventListener("click", clearFilter);
  cc.lastChild.addEventListener("click", collapse);
}