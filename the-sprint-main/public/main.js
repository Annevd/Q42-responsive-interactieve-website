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

const filterButtons = document.querySelectorAll('.filter-option');  // Selecteert alle elementen met de class 'filter-option'
const allButton = document.querySelector('.filter-option:first-of-type');

filterButtons.forEach(button => { // Voegt een click eventlistener toe aan alle filter tags
  button.addEventListener('click', filterPeople);
});

function filterPeople(e) { // Functie die alle mensen filtert op basis van het geklikte filter knopje
  const people = document.querySelectorAll(".flip-card"); // Selecteert alle elementen met de class 'flip-card'
  let filter; // Verkrijg de filter waarde van de geklikte filter tags' 'data-filter' attribuut
  const filterButton = e.target;

  if (filterButton.classList.contains('focused')) {
    
    allButton.classList.add('focused');
    filterButton.classList.remove('focused');
    filter = '*';
  }

  else {
    let currentButton = document.querySelector(".focused");
    filter = e.target.dataset.filter;

    if (currentButton){
      currentButton.classList.remove('focused');
    }

    filterButton.classList.add('focused');
  }

  people.forEach(person => { // Loop door alle mensen heen
    
    if (filter === '*' || person.classList.contains(filter)) { // Checkt of het filter "*"/"alles" is of een ander specifiek filter
      person.classList.remove('hidden'); // Zo ja, verwijder dan de .hidden class met display:none om de foto's te laten zien
      person.classList.add('slide-in'); // Zo ja, voeg de slide in animatie toe
    } else {
      person.classList.add('hidden'); // Zo niet, voeg dan de .hidden class met display: none toe om de foto's te verbergen
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

    personImage.addEventListener('click', function () { // Luistert naar de funcite zodra je muis de foto 'binnendringt'
      card.classList.add('click'); // Voegt de hover class toe om te kunnen flippen
    });

    cardBack.addEventListener('click', function () { // Als je muis buiten de foto komt, wordt de hover class weer weggehaald zodat hij terugflipt
      card.classList.remove('click');
    });

    card.addEventListener('animationend', function() { // Voegt één keer een eventlistener toe aan álle kaartjes
      this.classList.remove('slide-in') // Haalt de animatie slide in weg zodat ie daarna weer toegevoegd kan worden
    })
  });