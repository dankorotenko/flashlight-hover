const cards = document.querySelectorAll<HTMLElement>(".card");
const cardWrapper = document.getElementById("cards") as HTMLDivElement;

cardWrapper.onmousemove = (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
};
