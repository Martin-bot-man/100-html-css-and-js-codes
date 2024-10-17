async function population(){
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeros = await response.json();

    populateHeader(superHeros);
    populateHeroes(superHeros);
};