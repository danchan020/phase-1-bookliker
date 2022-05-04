
document.addEventListener("DOMContentLoaded", function() {

    fetch('http://localhost:3000/books')
    .then(r => r.json())
    .then( booksArr => {

        renderSideContainer(booksArr)



    })
        const renderSideContainer = booksArr =>{
            const sideContainer = document.querySelector('#list')
            
            booksArr.forEach(bookObj => {
                const titleEl = document.createElement('li')
                titleEl.textContent = bookObj.title
                sideContainer.appendChild(titleEl);
                titleEl.addEventListener('click', () => {
                    renderMainBookObj( bookObj )
                })
            const renderMainBookObj = (bookObj) => {
                const showPanel = document.getElementById('show_panel')
                showPanel.innerHTML = ''
                const title = document.createElement('h1')
                title.innerText = bookObj.title
                const subtitle = document.createElement('h2')
                subtitle.innerText = bookObj.subtitle
                const description = document.createElement('p')
                description.innerText = bookObj.description
                const author = document.createElement('h3')
                author.innerText = bookObj.author
                const image = document.createElement('img')
                image.src = bookObj.img_url

                
                showPanel.append(image, title, subtitle, description, author)


            }

            })


        }
})
