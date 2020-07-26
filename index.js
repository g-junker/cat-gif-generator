const button = document.querySelector('button');
const img = document.querySelector('img');
const info = document.querySelector('.info');
const url = 'http://api.giphy.com/v1/gifs/random?api_key=1WnXYd3PTIST0JhLBnfhk1th4AQYQH0h&tag=cat&limit=1';

button.addEventListener('click', function(){
    fetch(url)
        .then((result) => result.json())
        .then((result) => img.src = result.data.image_url)
});