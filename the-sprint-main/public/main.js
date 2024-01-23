// Laat filters wel of niet zien

const filterButton = document.querySelector(".filter")
const showTags = document.querySelector(".tags-small-screen")
const hideFilter = document.querySelector(".hide-filter")
const showFilter = document.querySelector(".show-filter")


filterButton.addEventListener("click", function() {
    showTags.classList.toggle("show-tags"); // toggled de filters
    hideFilter.classList.toggle("show-minus"); // laat minnetje zien naast filter als je de filters open heb staan
  showFilter.classList.toggle("hide-plus"); // laat plusje zien naast filter als je de filters dicht heb staan
});


// Filter

const filterButtons = document.querySelectorAll(".filter-option"); // Selecteer alle elementen met de class 'filter-option'
const allButton = document.querySelector(".filter-option:first-of-type"); // Selecteer de knop "Zie iedereen"

filterButtons.forEach((button) => { // Voeg een click eventlistener toe aan alle filter knoppen
  button.addEventListener("click", filterPeople); // Wanneer er wordt geklikt, roep dan de functie 'filterPeople' aan
});

function filterPeople(e) { // Functie om mensen te filteren op basis van het geklikte filter knopje
  const people = document.querySelectorAll(".flip-card"); // Selecteer alle elementen met de class 'flip-card'
  let filter;
  const filterButton = e.target; // 'e.target' is het element dat is geklikt

  if (filterButton.classList.contains("focused")) { // Als de geklikte knop al gefocust is,
    allButton.classList.add("focused"); // Voeg dan de focus class toe aan de "Zie iedereen" knop,
    filterButton.classList.remove("focused"); // en verwijder de focus class van de geklikte filter knop
    filter = "*"; // Stel het filter in op "*" om iedereen weer te geven
  } else {
    let currentButton = document.querySelector(".focused"); // Zo niet, selecteer de momenteel gefocuste knop
    filter = e.target.dataset.filter; // Krijg de filterwaarde uit het 'data-filter' attribuut van de geklikte filter knop

    if (currentButton) {
      currentButton.classList.remove("focused"); // Als er al een gefocuste knop is, verwijder dan de focus class ervan
    }

    filterButton.classList.add("focused"); // Voeg focus toe aan de geklikte filter knop
  }

  people.forEach((person) => { // Loop door alle personen heen

    if (filter === "*" || person.classList.contains(filter)) { // Als het filter "*" is (alles) of de persoon het geselecteerde filter heeft,
      person.classList.remove("hidden"); // Verwijder dan de 'hidden' class om de foto's zichtbaar te maken
      person.classList.add("slide-in"); // Voeg de 'slide-in' animatie class toe
    } else {
      person.classList.add("hidden"); // Zo niet, voeg dan de 'hidden' class toe om de foto's te verbergen
    }
  });
}


// Flip card

const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(function (card) { // Voegt een click eventlistener toe aan alle flip cards

    const personImage = card.querySelector('.person'); // selecteert de foto in de card
    const cardBack = card.querySelector('.flip-card-back');

    personImage.addEventListener('mouseenter', function () { // Luistert naar de funcite zodra je muis de foto 'binnendringt'
      card.classList.add('hover'); // Voegt de hover class toe om te kunnen flippen
    });

    card.addEventListener('mouseleave', function () { // Als je muis buiten de foto komt, wordt de hover class weer weggehaald zodat hij terugflipt
      card.classList.remove('hover');
    });

    personImage.addEventListener('click', function () { // Luistert naar de funcite zodra je op de foto klikt
      card.classList.add('click'); // Voegt de click class toe om te kunnen flippen
    });

    cardBack.addEventListener('click', function () { // Als je nog een keer klikt, wordt de click class weer weggehaald zodat hij terugflipt
      card.classList.remove('click');
    });

    card.addEventListener('animationend', function() { // Voegt één keer een eventlistener toe aan álle kaartjes
      this.classList.remove('slide-in') // Haalt de animatie slide in weg zodat ie daarna weer toegevoegd kan worden
    })
  });