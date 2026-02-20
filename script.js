function calculateIBW() {
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const resultBox = document.getElementById("result");

    // Validation
    if (!height || height < 100 || height > 250) {
        alert("Please enter a valid height between 100 cm and 250 cm.");
        return;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }

    let ibw;

    if (gender === "male") {
        ibw = 50 + 0.9 * (height - 152);
    } else {
        ibw = 45.5 + 0.9 * (height - 152);
    }

    ibw = ibw.toFixed(2);

    resultBox.style.display = "block";
    resultBox.innerHTML = `
        Your Ideal Body Weight is <br>
        <strong>${ibw} kg</strong>
    `;
          }
