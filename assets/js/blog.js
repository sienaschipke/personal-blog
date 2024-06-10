//DEPENDENCIES
const backBtn = document.querySelector('#back-button');
const modeButton = document.querySelector('#mode-button');
const bodyEl = document.querySelector('#body');
const headerEl = document.querySelector('#header');
const blogCard = document.querySelectorAll('.blog-card');
const blogTitle = document.querySelectorAll('.blog-header');
const footerEl =document.querySelector('#footer');
const mainEl = document.querySelector('#main');

//DATA
let posts;
//FUNCTIONS
function init() {
    const postsJSON = localStorage.getItem('blog post');
    posts = postsJSON ? JSON.parse(postsJSON) : [];
    renderPosts();
  };

function renderPosts() {
    for (const post of posts) {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-card';
        mainEl.appendChild(postDiv);
        const titleH2 = document.createElement('h2');
        titleH2.className = 'blog-header';
        const contentP = document.createElement('p');
        contentP.className = 'blog-content';
        const authorDiv = document.createElement('div');
        authorDiv.className = 'blog-author';
        titleH2.textContent = post.title;
        contentP.textContent = post.content;
        authorDiv.textContent = `Posted by: ${post.username}`;
        postDiv.append(titleH2, contentP, authorDiv);
  }
};

const modeChange = function() {
    if (modeButton.className === 'light'){
        modeButton.textContent = '🌙';
        modeButton.className = 'dark';
        bodyEl.style.backgroundColor = 'black';
        bodyEl.style.color = 'white';
        headerEl.style.borderBottom = '10px double white';
        blogCard.style.backgroundColor = 'dimgrey';
        blogCard.style.border = '1px solid white';
        footerEl.style.borderTop = '10px double white';
    } else {
        modeButton.textContent = '☀️';
        modeButton.className = 'light';
        bodyEl.style.backgroundColor = 'white';
        bodyEl.style.color = 'black';
        headerEl.style.borderBottom = '10px double black';
        blogCard.style.backgroundColor = 'white';
        blogCard.style.border = '1px solid black';
        footerEl.style.borderTop = '10px double black';
    }
};

const toHomePage = function() {    
    location.assign('./index.html');
};

//USER INTERACTIONS
backBtn.addEventListener('click', toHomePage);
modeButton.addEventListener('click', modeChange);
init();

