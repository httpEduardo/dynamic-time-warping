const result = document.getElementById("result") as HTMLDivElement;
const dtwButton = document.getElementById("dtwButton") as HTMLButtonElement;

function render(data: { distance: number; path_length: number }): void {
  result.textContent = `Distance: ${data.distance} | Path length: ${data.path_length}`;
}

dtwButton.addEventListener("click", () => {
  const a = (document.getElementById("seriesA") as HTMLInputElement).value;
  const b = (document.getElementById("seriesB") as HTMLInputElement).value;
  fetch("/api/dtw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ a, b }),
  })
    .then((res) => res.json())
    .then((data) => render(data));
});
