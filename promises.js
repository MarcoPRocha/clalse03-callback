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

const createPost = (post) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            posts.push (post);

            const error = true;

            if (!error) {
                resolve ();

            } else {
                reject ('Error...')
            }
        }, 2000)
    })
};

createPost ({title: "Post three", body: "This is post three"})
    .then(getPosts)
    .catch(err => console.log(err))