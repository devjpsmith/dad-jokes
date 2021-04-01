const joke = document.querySelector('#joke');

const headers = {
    'Accept': 'application/json'
}

async function fetchJoke() {
    const res = await fetch('https://icanhazdadjoke.com', { headers });
    const data = await res.json();
    joke.innerHTML = data.joke;
}

fetchJoke();