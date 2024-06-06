//DEPENDENCIES
const modeButton = document.querySelector('#mode-button');
const bodyEl = document.querySelector('#body');
const submitBtn = document.querySelector('#submit-btn');
const headerEl = document.querySelector('#header');
const h1El = document.querySelector('.h1');
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

//DATA


//FUNCTIONS
// sun should change mode from light to dark
const modeChange = function() {
    if (modeButton.className === 'light'){
        modeButton.textContent = '🌙';
        modeButton.className = 'dark';
        bodyEl.style.backgroundColor = 'black';
        bodyEl.style.color = 'white';
        submitBtn.style.backgroundColor = 'white';
        submitBtn.style.color = 'black';
        headerEl.style.borderBottom = '10px double white';
        h1El.style.borderRight = '10px double white';
    } else {
        modeButton.textContent = '☀️';
        modeButton.className = 'light';
        bodyEl.style.backgroundColor = 'white';
        bodyEl.style.color = 'black';
        submitBtn.style.backgroundColor = 'black';
        submitBtn.style.color = 'white';
        headerEl.style.borderBottom = '10px double black';
        h1El.style.borderRight = '10px double black';
    }
};



//USER INTERACTIONS
modeButton.addEventListener('click', modeChange);


