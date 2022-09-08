const posts = [
    { title: 'Post one', body: 'this is post one'},
    { title: 'Post two', body: 'this is post two'},
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach (post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
        
    }, 3000);
};

const createPost = (post, callback) => {
    setTimeout (()=>{
        posts.push(post);
        callback()
    }, 5000)
};

createPost ({title: "Post three", body: "This is post three"}, getPosts);