const homePage = document.querySelector('.homePage')
const gameName = document.getElementById('game-name')
const gameDesc = document.getElementById('game-desc')
const gameContainer = document.getElementById('gameContainer')
const gameImg = document.getElementById('gameImg')
const refresh = document.getElementById('refresh')

document.getElementById('get-game').addEventListener('click', async () => {
    document.querySelectorAll('a.store-icon').forEach(button => button.remove());
    const genre = getSelectedValue();
    const game = await getGameByGenre(genre);
    displayGame();
    if (game) {
        await getStoresOfGame(game.slug);
    }
});

document.getElementById('refresh-button').addEventListener('click', async () => {
    document.querySelectorAll('a.store-icon').forEach(button => button.remove());
    const genre = getSelectedValue();
    const game = await getGameByGenre(genre);
    displayGame();
    if (game) {
        await getStoresOfGame(game.slug);
    }
});

fetchGenres();
