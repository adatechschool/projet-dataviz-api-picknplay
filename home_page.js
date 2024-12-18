//DOM
const storesIcon = document.getElementById('stores-section')
const sideBar = document.getElementById('side-bar')
const getGame = document.getElementById('get-game')
const homeIcon  = document.getElementById('home-icon')
const refreshBtn = document.getElementById('refresh-button')
const stores = document.getElementById('stores')
const Home = document.getElementById('home')
const gameSection = document.getElementById('gameContainer')
const homeButton = document.getElementById('home-button')


function displayNone(){
    gameSection.style.display = 'none'
    refreshBtn.style.display = 'none'
    Home.style.display = 'none'
    stores.style.display = 'none'
    homeIcon.style.display = 'none'
    refresh.style.display = 'none'
    sideBar.style.display = 'none'
    storesIcon.style.display = 'none'
}

function displayBlock(){
    refreshBtn.style.display = 'block'
    Home.style.display = 'block'
    stores.style.display = 'block'
    homeIcon.style.display = 'block'
    refresh.style.display = 'block'
    sideBar.style.display = 'block'
    storesIcon.style.display = 'block'
}


if (localStorage.getItem('isGameSectionHidden') === 'true') {
    displayNone()
}

    
homeButton.addEventListener('click', () =>{ 
    setTimeout(()=> location.reload(),100)
    gameSection.style.display = 'none'
    localStorage.setItem('isGameSectionHidden', 'true') 
        displayNone()
});
 