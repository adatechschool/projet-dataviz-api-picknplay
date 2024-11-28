async function fetchGenres()
{
    const apiKey = '1bfb6535755c4056858d3fe255dbd7dd';
    const genresUrl = `https://api.rawg.io/api/genres?key=${apiKey}`;
    const selectElement = document.getElementById('my-select');

    try {
        const response = await fetch(genresUrl);
        if (!response.ok)
            throw new Error('Failed to fetch genres');
        const data = await response.json();
        data.results.forEach(genre => {
            const option = document.createElement('option');
            genre.name === "RPG" ? option.value = "role-playing-games-rpg" : option.value = genre.name.toLowerCase().replace(' ', '-');
            option.textContent = genre.name;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
}

function getSelectedValue()
{
    const selectElement = document.getElementById('my-select');
    const selectedValue = selectElement.value;
    return (selectedValue);
}

let getHowManyPages = (genre) =>
{
    let page = 0;
    genre === "family" ? page = 541 : 0;
    genre === "massively-multiplayer" ? page = 384 : 0;
    genre === "board-games" ? page = 839 : 0;
    genre === "card" ? page = 454 : 0;
    return (page > 0 ? page : 1000);
}

async function getGameByGenre(genre)
{
    const randomPage = Math.floor(Math.random() * getHowManyPages(genre)) + 1;
    const randomGame = Math.floor(Math.random() * 10);
    const apiKey = '1bfb6535755c4056858d3fe255dbd7dd';
    const url = `https://api.rawg.io/api/games?genres=${genre}&page=${randomPage}&page_size=10&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Error fetching data');
        const data = await response.json();
        console.log(randomPage + " " + randomGame);
        return (data.results[randomGame].name);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('get-game').addEventListener('click', async () => {
    const genre = getSelectedValue();
    const game = await getGameByGenre(genre);
    document.getElementById('result').textContent = `Random Game: ${game}`;
});

//bouton Home
const gameSection = document.getElementById('gameContainer')
const homeButton = document.createElement('button')
homeButton.innerHTML ='Home'
document.body.appendChild(homeButton)

if (localStorage.getItem('isGameSectionHidden') === 'true') {
    gameSection.style.display = 'none';
  }

  homeButton.addEventListener('click', () =>{
    setTimeout(()=> location.reload(),100)
    gameSection.style.display = 'none'
});
localStorage.setItem('isGameSectionHidden', 'true');

fetchGenres();
