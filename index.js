function convert() {
    const uraniumValue = 15000000; //Value of 1KG Uranium in USD
    const creamCheeseValue = 8.29; //Value of 0.32KG cream cheese in USD

    const uraniumInput = document.getElementById("uranium-input").value;
    const result = uraniumInput * (uraniumValue / creamCheeseValue);
    document.getElementById("result").innerHTML = result.toFixed(2) + " tub(s) of cream cheese";
}