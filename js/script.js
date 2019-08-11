const endpoint = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json";

const superHeroes = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => superHeroes.push(...data)) //push data in superHeroes using spread operator

function findMatches(wordToMatch, superHeroes) {
    return superHeroes.filter(superHero => {
        const regex = new RegExp(wordToMatch, 'gi');
        return superHero.name.match(regex);
    });
};

function displayMatches() {
    const matchArray = findMatches(this.value, superHeroes);
    if (this.value === " ") return;
    const markup = matchArray.map(superHero => {

        return `
                <li class="result">
                    <img src="${superHero.images.sm}"
                    <span class="name">${superHero.name}</span>
                    <div class="stats">
                        <span>Intelligence:${superHero.powerstats.intelligence}</span>
                        <span>Strength:${superHero.powerstats.strength}</span>
                        <span>Speed:${superHero.powerstats.speed}</span>
                        <span>Combat:${superHero.powerstats.combat}</span>
                    </div>

                </li>
            `;
    }).join('');
    suggestions.innerHTML = markup;


}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches);