const backBtn = document.querySelector('#back-button');

const toHomePage = function() {
    location.assign('file:///Users/sienaschipke/Bootcamp/Homeworks/personal-blog/index.html');
};

backBtn.addEventListener('click', toHomePage);


//when adding each element to the blog page, make sure to add the corresponding class for the CSS