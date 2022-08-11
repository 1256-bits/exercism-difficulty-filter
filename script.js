const style = document.querySelector("style");
const body = document.querySelector("body");
const buttons = document.createElement("div");

buttons.innerHTML = `<button class="buttons">Easy</button>
                     <button class="buttons">Medium</button>
                     <button class="buttons">Hard</button`;
style.innerHTML += `
.buttons-div {
    display: flex;
    position: absolute;
    top: 0px;
    flex-direction: column;
    gap: 10px;
    max-width: 100px;
    z-index: 100;
    background-color: #E0E0E0;
}
.buttons {
    padding: 5px 10px;
} `

buttons.classList.toggle("buttons-div");

Array.from(buttons.children).forEach(child => child.addEventListener("click", filterByDiff));

body.appendChild(buttons);

function filterByDiff (e) {
    const cards = document.querySelectorAll(".c-exercise-widget");
    const diff = e.target.innerText.toLowerCase();
    
    cards.forEach(card => {
        if (!card.querySelector(`.--${diff}`))
            card.style.display = 'none';
        });
}