
document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');
    const postDetails = document.getElementById('post-details');

    if (postId) {
        fetch(`${url}/${postId}`)

            .then(response => response.json())
            .then(({title, body}) => {
                const postDetails = document.getElementById('post-details');

                const postDetailsDiv = document.createElement('div');

                postDetailsDiv.innerHTML = `
                    <h3>${title}</h3>
                    <p>${body}</p>
                `;
                postDetails.style.width = '90%';
                postDetails.style.margin = '0 auto';

                postDetails.appendChild(postDetailsDiv);

                fetch(`${url}/${postId}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        const commentsBlock = document.getElementById('comments');

                        commentsBlock.innerHTML = '';

                        comments.map(({name, email, body}) => {
                            const commentDiv = document.createElement('div');

                            commentDiv.innerHTML = `
                              <h4>${name}</h4>
                              <h5>${email}</h5>
                              <p>${body}</p>
                            `;

                            commentDiv.style.width = '22%';
                            commentDiv.style.display = 'inline-block';
                            commentDiv.style.backgroundColor = '#96b4ea';
                            commentDiv.style.color = '#fff'
                            commentDiv.style.margin = '1%';
                            commentDiv.style.borderRadius = '5px';
                            commentDiv.style.padding = '10px';
                            commentDiv.style.boxSizing = 'border-box';

                            commentsBlock.appendChild(commentDiv);

                        })
                    })
            })
            .catch(error => {
                console.error('Error getting post details', error);
            });
    } else {
        document.getElementById("post-details").textContent = "No ID specified";
    }
});
