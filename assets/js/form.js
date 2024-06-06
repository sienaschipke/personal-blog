//DEPENDENCIES
// const submitBtn = document.querySelector('#submit-btn');


//DATA
const posts = [];
// let blogPost = {};

//FUNCTIONS
const saveBlogPost = function(event) {
    event.preventDefault();

    if (usernameInput.value === "" || titleInput.value === "" || contentInput.value === ""){
        alert("You missed some entries. Please try again.");
    } else {
        let blogPost = {
            username: usernameInput.value,
            title: titleInput.value,
            content: contentInput.value
        };
        posts.push(blogPost);
        console.log(posts);
    
        localStorage.setItem('blog post', JSON.stringify(posts));
        usernameInput.value = "";
        titleInput.value = "";
        contentInput.value = "";
    
        location.assign('file:///Users/sienaschipke/Bootcamp/Homeworks/personal-blog/blog.html');
    };
};

submitBtn.addEventListener('click', saveBlogPost);



// store form input in local storage

// submit button should load blog posts page and add the new blog post






// when you press back, page returns to home page