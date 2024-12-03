const container = document.querySelector(".container");
let draggedCard = null;

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    if (card.classList.contains("middle")) {
      draggedCard = card;
    }
  });

  card.addEventListener("dragend", () => {
    draggedCard = null;
  });
});

container.addEventListener("dragover", (event) => {
  event.preventDefault();
});

container.addEventListener("drop", () => {
  if (draggedCard && draggedCard.classList.contains("middle")) {
    const topCard = document.querySelector(".top");
    const middleCard = document.querySelector(".middle");
    const bottomCard = document.querySelector(".bottom");

    topCard.className = "card bottom";
    middleCard.className = "card top";
    bottomCard.className = "card middle";

    updateDraggable();
  }
});

function updateDraggable() {
  cards.forEach((card) => {
    if (card.classList.contains("middle")) {
      card.setAttribute("draggable", "true");
    } else {
      card.removeAttribute("draggable");
    }
  });
}

updateDraggable();
