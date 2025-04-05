// Function to calculate tip and update values dynamically
function calculateTip() {
    let billAmount = parseFloat(document.getElementById("billAmount").value) || 0;
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;

    document.getElementById("tipAmount").innerText = `Tip: $${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").innerText = `Total: $${totalAmount.toFixed(2)}`;
}

// Update tip percentage value display
function updateTip() {
    let tipPercentage = document.getElementById("tipPercentage").value;
    document.getElementById("tipValue").innerText = `${tipPercentage}%`;
    calculateTip(); // Recalculate tip in real time
}

// Reset function to clear fields
function resetFields() {
    document.getElementById("billAmount").value = "";
    document.getElementById("tipPercentage").value = 15;
    document.getElementById("tipValue").innerText = "15%";
    document.getElementById("tipAmount").innerText = "Tip: $0.00";
    document.getElementById("totalAmount").innerText = "Total: $0.00";
}
