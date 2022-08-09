const url = 'https://jsonplaceholder.typicode.com/posts';

const loadingElement = document.getElementById('loading');
const postsContainer = document.getElementById('posts-container');

//Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

// Get all posts and post in the post.html
const postPage = document.getElementById('post');
const postContainer = document.getElementById('post-container');
const commentsContainer = document.getElementById('comments-container');

//Post comments by form
const commentForm = document.getElementById('comment-form');
const emailInput = document.getElementById('email');
const bodyInput = document.getElementById('body');

// Get all posts
async function getAllPosts() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    loadingElement.classList.add('hide');

    data.map((post) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const paragraph = document.createElement('p');
        const link = document.createElement('a');

        title.innerText = post.title;
        paragraph.innerText = post.body;
        link.innerText = "Ler"
        link.setAttribute('href', `/post.html?id=${post.id}`);
        div.appendChild(title);
        div.appendChild(paragraph);
        div.appendChild(link);
        postsContainer.appendChild(div)

    })
    
}

//Get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json();
    console.log(dataPost)
    const dataComment = await responseComments.json();
    console.log(dataComment)
    loadingElement.classList.add('hide');
    postPage.classList.remove('hide');

    const title = document.createElement('h1')
    const paragraph = document.createElement('p')

    title.innerText = dataPost.title;
    paragraph.innerText = dataPost.body;
    postContainer.appendChild(title);
    postContainer.appendChild(paragraph)

    dataComment.map((comments)=>{
        createComment(comments);
    })

}

// Get all comments

function createComment(comment){

    const div = document.createElement('div')
    const email = document.createElement('h3')
    const commentBody = document.createElement('p')

    email.innerText = comment.email
    commentBody.innerText = comment.body

    div.appendChild(email);
    div.appendChild(commentBody)

    commentsContainer.appendChild(div)
}

//Post a comment
async function postComment(comment){

    const response = await fetch(`${url}/${postId}/comments`,{
        method: "POST",
        body: comment,
        headers: {
            "Content-type": "application/json",
        },
    });

    const data = await response.json();
    createComment(data)

}


if(!postId) {

    getAllPosts();
}else {
    getPost(postId);

    //Add event to comment form
    commentForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value
        }
        comment = JSON.stringify(comment);
        postComment(comment);
    })
}
