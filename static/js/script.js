function toggleOption(button) {
    // Check if the button is a car or a fuel button
    if (button.classList.contains('pump-button')) {
        // Remove the 'active' class from all pump buttons
        const allPumpButtons = document.querySelectorAll('.pump-button');
        allPumpButtons.forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked pump button
        button.classList.add('active');

        // Disable all fuel buttons initially
        disableAllFuelButtons();

        // Clear any active fuel button
        clearActiveFuelButton();

        // Enable the corresponding fuel buttons based on the selected car
        switch (button.querySelector('.pump-text').textContent) {
            case '1':
                enableFuelButtons([document.getElementById('fuel-ron95'), document.getElementById('fuel-ron97')]);
                break;
            case '2':
                enableFuelButtons([document.getElementById('fuel-ron95')]);
                break;
            case '3':
                enableFuelButtons([document.getElementById('fuel-euro5')]);
                break;
            case '4':
                enableFuelButtons([
                    document.getElementById('fuel-ron95'),
                    document.getElementById('fuel-ron97'),
                    document.getElementById('fuel-euro5'),
                    document.getElementById('fuel-diesel')
                ]);
                break;
        }
    } else if (button.classList.contains('fuel-button')) {
        // Remove the 'active' class from all fuel buttons
        const allFuelButtons = document.querySelectorAll('.fuel-button');
        allFuelButtons.forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked fuel button
        button.classList.add('active');
    }
}

// Disable all fuel buttons by default
function disableAllFuelButtons() {
    const fuelButtons = document.querySelectorAll('.fuel-button');
    fuelButtons.forEach(button => {
        button.classList.remove('enabled');
        button.disabled = true;
    });
}

// Enable specific fuel buttons
function enableFuelButtons(buttons) {
    buttons.forEach(button => {
        button.classList.add('enabled');
        button.disabled = false;
    });
}

// Clear active fuel button
function clearActiveFuelButton() {
    const activeFuelButton = document.querySelector('.fuel-button.active');
    if (activeFuelButton) {
        activeFuelButton.classList.remove('active');
    }
}

// Initialize by disabling all fuel buttons
document.addEventListener('DOMContentLoaded', function() {
    disableAllFuelButtons();
});


function setPresetAmount(amount) {
    // Remove 'active' class from all amount boxes
    const allAmountBoxes = document.querySelectorAll('.amount-box');
    allAmountBoxes.forEach(box => box.classList.remove('active'));

    // Set 'active' class to the clicked box
    const button = event.target;
    button.classList.add('active');

    // Show or hide the slider based on the selection
    const slider = document.getElementById('amount-slider');
    if (amount === 'other') {
        slider.style.display = 'block';
    } else {
        slider.style.display = 'none';
        updateDisplay(amount);
    }
}

function updateAmount() {
    const slider = document.getElementById('amount-slider');
    const rmValue = slider.value;
    updateDisplay(rmValue);
}

function updateDisplay(rmValue) {
    const amountRM = document.getElementById('amount-rm');
    const amountLiters = document.getElementById('amount-liters');
    
    // Assume 1 RM = 0.4 liters for demonstration purposes
    const litersPerRM = 0.48780488;

    const litersValue = (rmValue * litersPerRM).toFixed(2);

    amountRM.textContent = 'RM ' + rmValue;
    amountLiters.textContent = 'Liters: ' + litersValue;
}

// Additional functionality for pre-auth payment button if needed
document.querySelector('.preauth-button').addEventListener('click', function() {
    // Your pre-auth payment logic here
    alert('Pre-Auth Payment');
});

document.addEventListener('DOMContentLoaded', function() {
    // Unmute the video
    const video = document.getElementById('video-ad');
    video.muted = false; // Ensure the video is unmuted
    video.play();

    // Update date and time every second
    function updateDateTime() {
        const dateTimeElement = document.getElementById('date-time');
        const now = new Date();
        const options = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        };
        dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});

function start() {
    window.location.href = "/next";
}
