"use strict";
const result = document.getElementById("result");
const dtwButton = document.getElementById("dtwButton");
function render(data) {
    result.textContent = `Distance: ${data.distance} | Path length: ${data.path_length}`;
}
dtwButton.addEventListener("click", () => {
    const a = document.getElementById("seriesA").value;
    const b = document.getElementById("seriesB").value;
    fetch("/api/dtw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a, b }),
    })
        .then((res) => res.json())
        .then((data) => render(data));
});
