//DEPENDENCIES
const backBtn = document.querySelector('#back-button');
const modeButton = document.querySelector('#mode-button');
const bodyEl = document.querySelector('#body');
const headerEl = document.querySelector('#header');
// const h1El = document.querySelector('.h1');
const blogCard = document.querySelector('.blog-card');
const blogTitle = document.querySelector('.blog-header');
// const blogContent = document.querySelector('.blog-content');
// const blogAuthor = document.querySelector('.blog-author');
const footerEl =document.querySelector('#footer');

//FUNCTIONS
// sun should change mode from light to dark
const modeChange = function() {
    if (modeButton.className === 'light'){
        modeButton.textContent = '🌙';
        modeButton.className = 'dark';
        bodyEl.style.backgroundColor = 'black';
        bodyEl.style.color = 'white';
        headerEl.style.borderBottom = '10px double white';
        blogCard.style.backgroundColor = 'dimgrey'
        blogCard.style.border = '1px solid white';
        footerEl.style.borderTop = '10px double white'
    } else {
        modeButton.textContent = '☀️';
        modeButton.className = 'light';
        bodyEl.style.backgroundColor = 'white';
        bodyEl.style.color = 'black';
        headerEl.style.borderBottom = '10px double black';
        blogCard.style.backgroundColor = 'white'
        blogCard.style.border = '1px solid black';
        footerEl.style.borderTop = '10px double black'
    }
};

const toHomePage = function() {
    location.assign('file:///Users/sienaschipke/Bootcamp/Homeworks/personal-blog/index.html');
};

//USER INTERACTIONS
backBtn.addEventListener('click', toHomePage);
modeButton.addEventListener('click', modeChange);





//when adding each element to the blog page, make sure to add the corresponding class for the CSS