async function populate(){
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    // console.log(requestURL);
    console.log(isHttpValid('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')); // true

    const request = fetch(requestURL);
    const response = await fetch(request);
    const superHeros = await response.json();
console.log(request);
    populateHeader(superHeros);
    populateHeroes(superHeros);
};
//populating the header
function populateHeader(obj){
const header = document.querySelector('header');
const myH1 = document.createElement('h1');
myH1.textContent = obj.squadName;
header.appendChild(myH1);

const myPara = document.createElement('p')
myPara.textContent = `Hometown: ${obj.homeTown} // Formed:${obj.formed}`;
header.appendChild(myPara);
}

//creating the hero information cards
function populateHeros(){
    const section = document.querySelector('section');
    const heroes = obj.members;

    for (const hero of heroes){
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = 'Superpowers:';

        const superPowers = hero.powers;
        for (const power of superPowers){
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);

        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
    populate()
}