let getScoreClass = (score) =>
{
    if (score > 74)
        return ("high");
    else if (score > 49)
        return ("medium");
    else if (score > 0)
        return ("low");
    return ("n-a");
}

let createScoreBox = (metascore, url, name, check) =>
{
    let container = 0;
    if (check === 0)
        container = document.getElementById("scores-container");
    else
        container = document.getElementById("main-score");
    const wrapper = document.createElement("div");
    wrapper.classList.add("score-wrapper");

    const scoreBox = document.createElement("div");
    scoreBox.classList.add("score-box");
    scoreBox.textContent = metascore;
    if (metascore == null)
        scoreBox.textContent = "N-A";
    scoreBox.classList.add(getScoreClass(metascore));

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = name;
    link.classList.add("link-back");

    wrapper.appendChild(scoreBox);
    wrapper.appendChild(link);
    container.appendChild(wrapper);
}

async function displayMetascore(game)
{
    let data = await getGameInfo(game);
    let mainBox = createScoreBox(data.metacritic, data.website, "Metacritic", 1);
    data.metacritic_platforms.forEach(platformInfo => {
        const { metascore, url, platform } = platformInfo;
        createScoreBox(metascore, url, platform.name, 0);
    });
}
