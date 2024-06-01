const container = document.getElementById('users-container');

const url = 'https://jsonplaceholder.typicode.com/users';


fetch(url)
    .then(response => response.json())
    .then(users => {

        users.map(({id, name})=> {

            const detainsUserBtn = document.createElement('button');
            const userDiv = document.createElement('div');

            userDiv.innerHTML = `
            ${id}. ${name}       
            `;
            
            userDiv.classList.add('user-div');
            
            detainsUserBtn.textContent = 'detains user';
            detainsUserBtn.classList.add('detains-btn');

            userDiv.appendChild(detainsUserBtn);
            
            container.appendChild(userDiv);

            detainsUserBtn.addEventListener('click', ()=>{
                return window.location.href = `user-details.html?id=${id}`
            });
        });

       
    })