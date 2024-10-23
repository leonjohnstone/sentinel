// Function to handle the free trial button click
function startFreeTrial() {
    const trialUrl = 'https://sentineltraining.fitr.training/p/sentinel';
    window.open(trialUrl, '_blank');
}

// Add event listener to the button when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const freeTrialBtn = document.getElementById('freeTrialBtn');
    if (freeTrialBtn) {
        freeTrialBtn.addEventListener('click', startFreeTrial);
    }
});

