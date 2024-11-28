const apiKey = '1bfb6535755c4056858d3fe255dbd7dd'

async function fetchGenres()
{
    const genresUrl = `https://api.rawg.io/api/genres?key=${apiKey}`;
    const selectElement = document.getElementById('my-select');

    try {
        const response = await fetch(genresUrl);
        if (!response.ok)
            throw new Error('Failed to fetch genres');
        const { results } = await response.json();
        results.forEach(({ slug, name }) => {
            const option = document.createElement('option');
            option.value = slug;
            option.textContent = name;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
}

function getSelectedValue()
{
    return (document.getElementById('my-select').value);
}

const getHowManyPages = (genre) => {
    const pageCounter = {
        'family': 541,
        'massively-multiplayer': 384,
        'board-games': 839,
        'card': 454,
    };
    return (pageCounter[genre] || 1000);
};

async function getGameByGenre(genre)
{
    const randomPage = Math.floor(Math.random() * getHowManyPages(genre)) + 1;
    const randomGame = Math.floor(Math.random() * 10);
    const url = `https://api.rawg.io/api/games?genres=${genre}&page=${randomPage}&page_size=10&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Error fetching data');
        const { results } = await response.json();
        return (results[randomGame]);
    } catch (error) {
        console.error('Error:', error);
    }
}
