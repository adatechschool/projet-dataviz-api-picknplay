async function getGameInfo(game){
    const url = `https://api.rawg.io/api/games/${game}?key=${apiKey}`

    const response = await fetch(url);
    const data = await response.json();
    return data

}

async function displayGame(){
    const genre = getSelectedValue();
    const game = await getGameByGenre(genre);
    const gameInfo = await getGameInfo(game.slug)

    homePage.style.display ='none';
    gameContainer.style.display = 'inline-block';
    refresh.style.display = 'inline-block';

    gameName.textContent = gameInfo.name;
    gameDesc.innerHTML = `<h3>About the game :</h3> ${gameInfo.description}`;
    gameImg.setAttribute('src',gameInfo.background_image)
}
