//bouton Home
const gameSection = document.getElementById('gameContainer')
const homeButton = document.getElementById('home-button')
document.body.appendChild(homeButton)

if (localStorage.getItem('isGameSectionHidden') === 'true') {
    gameSection.style.display = 'none';
  }

  homeButton.addEventListener('click', () =>{
    setTimeout(()=> location.reload(),100)
    gameSection.style.display = 'none'
});
localStorage.setItem('isGameSectionHidden', 'true');
