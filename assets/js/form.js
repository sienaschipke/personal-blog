//DEPENDENCIES

//DATA
let posts;

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

        const postsJSON = localStorage.getItem('blog post');
        posts = postsJSON ? JSON.parse(postsJSON) : [];
        posts.push(blogPost);
    
        localStorage.setItem('blog post', JSON.stringify(posts));
        usernameInput.value = "";
        titleInput.value = "";
        contentInput.value = "";
    
        location.assign('./blog.html');
    };
};

submitBtn.addEventListener('click', saveBlogPost);
