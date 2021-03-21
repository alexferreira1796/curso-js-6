// CORS
/*const url = 'https://cors-anywhere.herokuapp.com/https://www.youtube.com/';
const div = document.createElement('div');

fetch(url, {
  method: 'GET'
})
.then(res => res.text())
.then(text => {
  div.innerHTML = text;
  document.body.appendChild(div);
})*/

//  HTTP
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(json => console.log(json));

const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; chartset=utf-8'
  },
  body: '{ "title": "JavaScript é foda" }'
}
fetch(url, options)
.then(res => res.json())
.then(json => console.log(json));