// const { createElement } = require("react/cjs/react.production.min");

document.addEventListener("DOMContentLoaded", function() {});

const url = 'http://localhost:3000/books'

function getBook(path){
    fetch(path)
    .then(resp => resp.json())
    .then(data => {

        for (const info of data) {
            let titles = document.createElement('li')
            let bookTitles = document.getElementById("list") 
            
            titles.textContent = info.title
            titles.addEventListener('click', () => {
                cards(url)

            })
            bookTitles.appendChild(titles)  
        }
    })
}

getBook(url)

function cards(path){ 

        let showPanel = document.getElementById("show_panel");        
        let title = document.createElement('h3');
        let subtitle = document.createElement('h4');
        let description = document.createElement('p')
        let cover = document.createElement('p')
        let userList = document.createElement('ul')
        let user = document.createElement('li')

    fetch(path)
    .then(resp => resp.json())
    .then(data => {        
        
        for (const info of data){
                
            title.textContent = info.title;
            subtitle.textContent = info.subtitle;
            description.textContent = info.description;
            imgURL = info.img_url
            userList.textContent = 'Liked By:';
                for (info.users of data)
                        user.textContent = info.users;
            
        }
        showPanel.append(title, subtitle, description, userList)
        userList.appendChild(user)
    
    })




}