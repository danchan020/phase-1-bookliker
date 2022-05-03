document.addEventListener("DOMContentLoaded", function() {});

const url = 'http://localhost:3000/books'

function getBook(urls){
    fetch(urls).then(resp => resp.json()).then(data => {
            for (const info of data) {
                info
            }
        })
    }

getBook(url)



      //         => {
// for (const info in data){
//         let title = data.title
//                 console.log(title)
// }
//     })