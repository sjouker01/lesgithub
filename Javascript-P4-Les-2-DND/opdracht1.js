/**
 * 0.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * 1.
 * 
*/




/**
 * Schrijf de code om met fetch() de volgende URL op te halen: 
 * https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json
 * 
 * fetch(): https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * 
 * 
 * 2.
 * Bekijk de response (bijv. met console.log, of via de network inspector.
 * 
 * Request: https://developer.mozilla.org/en-US/docs/Web/API/Request
 * Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
 * 
 * 
 * 3.
 * Bekijk met de .json() methode de data in de console
 * 
 * Response.json(): https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 * 
 * 
 * 4. 
 * Vervang console.log(...) met de onderstaande code:
 * 
 *   const destination = document.getElementById("destination");
 *   destination.innerHTML = `<h3>Monster: ${monsters[0].name}</h3>`;
 * 
 * Bekijk de nieuwe data in je browser.
 * 
 * 
 * 5. 
 * Schrijf een functie die als argument een monster object ontvangt,
 * en de HTML van #destination aanpast naar onderstaande voorbeeld (gebruikmakend van de data natuurlijk)
 * 
 * LET OP: je zult de variabele waar de monsters in worden opgeslagen en opgehaald globaal moeten maken.
 * 
 * Voorbeeld output:
 * 
 *   <h3>Monster Aboleth</h3>
 *   <p>AC: 17</p>
 * 
 * 
 * 6. 
 * Schrijf de code die ervoor zorgt dat de knoppen Previous, Random, Next werken.
 * 
 * LET OP: je zult bij moeten houden welke monster (index) wordt getoond.
 */


// Globale variabelen
let monsters = []; // Array om monsters op te slaan
let currentMonsterIndex = 0; // Index van het huidige monster

window.addEventListener("load", function () {
    fetch("https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json")
    .then(response => response.json())
    .then(data => {
        monsters = data; // Monsters toewijzen aan de globale variabele
        showMonster(currentMonsterIndex); // Het eerste monster weergeven
    });

    // Event listeners voor knoppen
    document.getElementById("previousBtn").addEventListener("click", showPreviousMonster);
    document.getElementById("randomBtn").addEventListener("click", showRandomMonster);
    document.getElementById("nextBtn").addEventListener("click", showNextMonster);
});

function showMonster(index) {
    const monster = monsters[index];
    const destination = document.getElementById("destination");
    destination.innerHTML = `<h3>Monster: ${monster.name}</h3>
                             <p>AC: ${monster.ac}</p>`;
}

function showPreviousMonster() {
    if (currentMonsterIndex > 0) {
        currentMonsterIndex--;
        showMonster(currentMonsterIndex);
    }
}

function showRandomMonster() {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    currentMonsterIndex = randomIndex;
    showMonster(currentMonsterIndex);
}

function showNextMonster() {
    if (currentMonsterIndex < monsters.length - 1) {
        currentMonsterIndex++;
        showMonster(currentMonsterIndex);
    }
}



//Bonus! Zorg dat je met de monsters kunt vechten die je ophaald!