// Client-side script
const solveButton = document.getElementById('solve-button');
const tourOutput = document.getElementById('tour-output');

solveButton.addEventListener('click', () => {
  fetch('/api/tsp')
    .then(response => response.json())
    .then(tour => {
      tourOutput.textContent = `Tour: ${tour.join(', ')};
      console.log(tour);
    });
});
