const post = 'https://jsonplaceholder.typicode.com/posts/1';
const pokemon = 'https://pokeapi.co/api/v2/pokemon/';
// Async / Await
async function getPost(url) {
  try {
    const responsePost = await fetch(`${url}`);
    const jsonPost = await responsePost.json();
    console.log(jsonPost);
  } catch(e) {
    console.log(e);
  }
}
getPost(post);
getPost(pokemon);

// Then
function pegaPost(url) {
  fetch(url)
  .then(res => res.json())
  .then(json => console.log(json))
}
pegaPost(post);
pegaPost(pokemon);