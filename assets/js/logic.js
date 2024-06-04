//DEPENDENCIES
const modeButton = document.querySelector('#mode-button');
const bodyEl = document.querySelector('#body');
const submitBtn = document.querySelector('#submit-btn');
const headerEl = document.querySelector('#header');
const h1El = document.querySelector('.h1');

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
}
    // background-color: black;
    // color: white;
modeButton.addEventListener('click', modeChange);


// submit button should load blog posts page and add the new blog post
// when you press back, page returns to home page