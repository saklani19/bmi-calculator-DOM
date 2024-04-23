const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    
    if (height === "" || height <= 0 || isNaN(height)) {
        results.textContent = `Please enter a valid height.`;
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.textContent = `Please enter a valid weight.`;
    } else {
        const bmi = (weight / ((height/100) ** 2)).toFixed(2);
        results.textContent = `Your calculated BMI is ${bmi}`;
    }
});