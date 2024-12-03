async function getStoresOfGame(game) {
    const apiKey = '1bfb6535755c4056858d3fe255dbd7dd';
    const gameUrl = `https://api.rawg.io/api/games/${game}?key=${apiKey}`;
    const storesContainer = document.getElementById('stores-section');

    try {
        const response = await fetch(gameUrl);
        if (!response.ok)
            throw new Error('Failed to fetch game');
        const { stores } = await response.json();
        if (stores.length === 0 ) {
            document.querySelector('.store-text1').textContent = "Sorry ! Not available in stores";
            document.querySelector('.store-text2').textContent = "";
        } else {
            document.querySelector('.store-text1').textContent = "Interested?";
            document.querySelector('.store-text2').textContent = "Here is where you can buy the game: ";
        }
        stores.forEach(({ store }) => {
            const storeButton = document.createElement("a");
            storeButton.href = `https://${store.domain}`;
            storeButton.target = "_blank";
            storeButton.innerHTML = `
                <button>
                    <img src="https://${store.domain}/favicon.ico" alt="${store.name} Icon">
                    <span>${store.name}</span>
                </button>`;
            storeButton.classList.add("store-icon");
            storesContainer.appendChild(storeButton);
        });
    } catch (error) {
        console.error('Error fetching stores:', error);
    }
}

fetchGenres();

