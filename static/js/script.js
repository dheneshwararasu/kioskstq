function toggleOption(button) {
    // Get all toggle buttons
    const allButtons = document.querySelectorAll('.toggle-button');
    
    // Remove the 'active' class from all buttons
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Get all toggle buttons in the same parent container
    const containerButtons = button.parentNode.querySelectorAll('.pump-button');
    
    // Remove the 'active' class from all buttons in the same parent container
    containerButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add the 'active' class to the clicked button
    button.classList.add('active');
}

function updateAmount() {
    const slider = document.getElementById('amount-slider');
    const amountRM = document.getElementById('amount-rm');
    const amountLiters = document.getElementById('amount-liters');
    
    // Assume 1 RM = 0.4 liters for demonstration purposes
    const litersPerRM = 0.48780488;

    const rmValue = slider.value;
    const litersValue = (rmValue * litersPerRM).toFixed(2);

    amountRM.textContent = rmValue;
    amountLiters.textContent = litersValue;
}

// Additional functionality for pre-auth payment button if needed
document.querySelector('.preauth-button').addEventListener('click', function() {
    // Your pre-auth payment logic here
    alert('Pre-Auth Payment');
});