function menuLoader(main) {
  let array = [1, 2, 3, 4, 5, 6];

  const container = document.createElement("div");
  container.setAttribute("id", "menuContainer");

  array.forEach((element) => {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "cardContainer");

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardName = document.createElement("div");
    cardName.setAttribute("class", "cardName");
    cardName.textContent = "Name " + element;

    card.appendChild(cardName);

    const cardDesc = document.createElement("div");
    cardDesc.setAttribute("class", "cardDesc");
    cardDesc.textContent = "Random description nº " + element;

    card.appendChild(cardDesc);

    const cardPrice = document.createElement("div");
    cardPrice.setAttribute("class", "cardPrice");
    cardPrice.textContent = "$1" + element;

    card.appendChild(cardPrice);

    cardContainer.appendChild(card);

    container.appendChild(cardContainer);
  });

  main.appendChild(container);
}

export { menuLoader };
