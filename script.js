const homePage = document.querySelector('.homePage')
const gameName = document.getElementById('game-name')
const gameDesc = document.getElementById('game-desc')
const gameContainer = document.getElementById('gameContainer')
const gameImg = document.getElementById('gameImg')
const refresh = document.getElementById('refresh')
const homepageTitle = document.getElementById('title')

async function displayAll()
{
    document.querySelectorAll('a.store-icon').forEach(button => button.remove());
    document.querySelectorAll("div.score-box").forEach(score => score.remove());
    document.querySelectorAll("a.link-back").forEach(name => name.remove());
    const genre = getSelectedValue();
    const game = await getGameByGenre(genre);
    const gameInfo = await getGameInfo(game.slug);
    displayGame(gameInfo);
    if (game) {
        await getStoresOfGame(game.slug);
        await displayMetascore(game.slug);
    }
}

document.getElementById('get-game').addEventListener('click', async () => {
    await displayAll();
});

document.getElementById('refresh-button').addEventListener('click', async () => {
    await displayAll();
});
