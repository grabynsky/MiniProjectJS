document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    if (userId) {
        fetch(`${url}/${userId}`)
            .then(response => response.json())
            .then(({id, name, username, email, address, phone, website, company}) => {

                const postOfCurrentUserBtn = document.createElement('button');
                const userDetails = document.getElementById("user-details");

                userDetails.innerHTML = `
                            <p><strong>ID:</strong> ${id}</p>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Login:</strong> ${username}</p>
                            <p><strong>E-mail:</strong> ${email}</p>
                            <p><strong>Adress:</strong></p>
                            
                            <ul>
                                <li><strong>Street:</strong> ${address.street}</li>
                                <li><strong>Room:</strong> ${address.suite}</li>
                                <li><strong>City:</strong> ${address.city}</li>
                                <li><strong>Zip code:</strong> ${address.zipcode}</li>
                                <li><strong>Geo:</strong>
                                    <ul>
                                        <li><strong>Latitude:</strong> ${address.geo.lat}</li>
                                        <li><strong>Longitude:</strong> ${address.geo.lng}</li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <p><strong>Telephone:</strong> ${phone}</p>
                            <p><strong>Web-site:</strong> ${website}</p>
                            <p><strong>Company:</strong></p>
                            
                            <ul>
                                <li><strong>Name:</strong> ${company.name}</li>
                                <li><strong>Carth Phrase:</strong> ${company.catchPhrase}</li>
                                <li><strong>BS:</strong> ${company.bs}</li>
                            </ul>
                        `;

                postOfCurrentUserBtn.textContent = 'post of current user';
                postOfCurrentUserBtn.classList.add('post-of-current-user-btn')

                userDetails.appendChild(postOfCurrentUserBtn);

                postOfCurrentUserBtn.addEventListener('click', () => {
                    fetch(`${url}/${userId}/posts`)
                        .then(response => response.json())
                        .then(posts => {

                            const postContainer = document.getElementById('posts-container');
                            postContainer.innerHTML = '';

                            posts.map(({id, title}) => {
                                const postDiv = document.createElement('div');

                                postDiv.innerHTML = ``;

                                postDiv.innerHTML = `
                                  <h3>${title}</h3>
                                  <a href="post-details.html?postId=${id}" class="view-details">View details</a>
                                `;

                                postDiv.classList.add('post-div')

                                postContainer.appendChild(postDiv);

                            })
                        })
                });
            })
            .catch(error => {
                console.error('Error getting user details', error);
            });
    } else {
        document.getElementById("user-details").textContent = "No user ID specified";
    }
});
