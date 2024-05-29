const container = document.getElementsByClassName('container')[0];

const url = 'https://jsonplaceholder.typicode.com/users';


fetch(url)
    .then(response => response.json())
    .then(users => {
        
        function detains(){
            return;
        }
        
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
        });
    })