const style = document.querySelector("style");
const body = document.querySelector("body");
const buttons = document.createElement("div");

buttons.innerHTML = `<button>Easy</button>
                     <button>Medium</button>
                     <button>Hard</button`;
style.innerHTML = `.buttons-div {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        max-width: 100px;
                        z-index: 10;
                    }
                    .buttons {
                        padding: 5px 10px;
                    }`
