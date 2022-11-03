const postImg = document.getElementById('post-img');
postImg.style.width = '4%';
postImg.style.height = '100%';


const inputField = document.getElementById('input-field');
inputField.style.width = '70%';

document.getElementById('post-img').addEventListener('click', function(){
    const commentBox = document.getElementById('input-field');
    const comment = commentBox.value;
    const commentContainer = document.getElementById('comment-content');
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p);
    
    commentBox.value = '';
})