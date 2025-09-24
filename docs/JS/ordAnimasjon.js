document.addEventListener('DOMContentLoaded', () => { 
  const items = [...document.querySelectorAll('.ord')];
  let current = 0;
  const displayTime = 5000; // hvor lenge ett ord er synlig (ms)

  // start med første
  items[current].classList.add('show');

  setInterval(() => {
    // gjeldende bort
    items[current].classList.remove('show');

    // neste
    current = (current + 1) % items.length;
    items[current].classList.add('show');
  }, displayTime);
});