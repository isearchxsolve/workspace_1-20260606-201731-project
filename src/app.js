import './styles.css';

// Frontend logic to interact with the API
async function solveTSP() {
    const response = await fetch('/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cities: ['A', 'B', 'C'] })
    });
    const data = await response.json();
    console.log(data.solution);
}

solveTSP();
