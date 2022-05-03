document.addEventListener("DOMContentLoaded", function() {});

const url = 'http://localhost:3000/books'

function getBook(urls){
    fetch(urls).then(resp => resp.json()).then(data => {
        function shallowIterator(data) {
            for (const key in data) {
            console.log(data[key]);
    }



      //         => {
// for (const info in data){
//         let title = data.title
//                 console.log(title)
// }
//     })