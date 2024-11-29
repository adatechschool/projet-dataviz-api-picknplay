async function getGameInfo(game){
    const url = `https://api.rawg.io/api/games/${game}?key=${apiKey}`
    //console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    return data

}

async function displayGame(gameInfo){
    homePage.style.display ='none';
    gameContainer.style.display = 'inline-block';
    refresh.style.display = 'inline-block';

    gameName.textContent = gameInfo.name;
    gameDesc.innerHTML = `<h3>About the game :</h3> ${gameInfo.description}`;
    gameImg.setAttribute('src',gameInfo.background_image)
}
