// Laat filters wel of niet zien

const filterButton = document.querySelector(".filter")
const showTags = document.querySelector(".tags-small-screen")
const hideFilter = document.querySelector(".hide-filter")
const showFilter = document.querySelector(".show-filter")


filterButton.addEventListener("click", function() {
    showTags.classList.toggle("show"); // toggled de filters
    hideFilter.classList.toggle("show"); // laat minnetje zien naast filter als je de filters open heb staan
  showFilter.classList.toggle("hide"); // laat plusje zien naast filter als je de filters dicht heb staan
});


// Filter

const filterButtons = document.querySelectorAll('.filter-option');  // Selecteert alle elementen met de class 'filter-option'

filterButtons.forEach(button => { // Voegt een click eventlistener toe aan alle filter tags
  button.addEventListener('click', filterPeople);
});

function filterPeople(e) { // Functie die alle mensen filtert op basis van het geklikte filter knopje
const people = document.querySelectorAll(".flip-card"); // Selecteert alle elementen met de class 'flip-card'
let filter = e.target.dataset.filter; // Verkrijg de filter waarde van de geklikte filter tags' 'data-filter' attribuut

people.forEach(person => { // Loop door alle mensen heen
  if (filter === '*' || person.classList.contains(filter)) { // Checkt of het filter "*"/"alles" is of een ander specifiek filter
    person.classList.remove('hidden'); // Zo ja, verwijder dan de .hidden class met display:none om de foto's te laten zien
  } else {
    person.classList.add('hidden'); // Zo niet, voeg dan de .hidden class met display: none toe om de foto's te verbergen
  }
});
}


// Flip card

const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(function (card) { // Voegt een click eventlistener toe aan alle flip cards

    const personImage = card.querySelector('.person'); // selecteert de foto in de card

    personImage.addEventListener('mouseenter', function () { // Luistert naar de funcite zodra je muis de foto 'binnendringt'
      card.classList.add('hover'); // Voegt de hover class toe om te kunnen flippen
    });

    card.addEventListener('mouseleave', function () { // Als je muis buiten de foto komt, wordt de hover class weer weggehaald zodat hij terugflipt
      card.classList.remove('hover');
    });
  });