//bouton Home
const getGame = document.getElementById('get-game')
const homeIcon  = document.getElementById('home-icon')
const refreshBtn = document.getElementById('refresh-button')
const stores = document.getElementById('stores')
const Home = document.getElementById('home')
const gameSection = document.getElementById('gameContainer')
const homeButton = document.getElementById('home-button')
document.body.appendChild(homeButton)

if (localStorage.getItem('isGameSectionHidden') === 'true') {
        gameSection.style.display = 'none'
        refreshBtn.style.display = 'none'
        Home.style.display = 'none'
        stores.style.display = 'none'
        homeIcon.style.display = 'none'
        refresh.style.display = 'none'
  }

    homeButton.addEventListener('click', () =>{
    setTimeout(()=> location.reload(),100)
    gameSection.style.display = 'none'
    localStorage.setItem('isGameSectionHidden', 'true')

        refreshBtn.style.display = 'none'
        Home.style.display = 'none'
        stores.style.display = 'none'
        homeIcon.style.display = 'none'
        refresh.style.display = 'none'
});

getGame.addEventListener('click', () =>{
    if(gameSection.style.display === 'none'){
        gameSection.style.display = 'block'
        localStorage.setItem('isGameSectionHidden' ,'false' )

        refreshBtn.style.display = 'block'
        Home.style.display = 'block'
        stores.style.display = 'block'
        homeIcon.style.display = 'block'
        refresh.style.display = 'block'
    }else{
        gameSection.style.display = 'none'
        localStorage.setItem('isGameSectionHidden' ,'true' )

        refreshBtn.style.display = 'none'
        Home.style.display = 'none'
        stores.style.display = 'none'
        homeIcon.style.display = 'none'
        refresh.style.display = 'none'

    }
} )
