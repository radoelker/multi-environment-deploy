document.addEventListener('DOMContentLoaded', function () {
    // Animate the card on load
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

    console.log('Environment: __SITE_TITLE__');
    console.log('Deployed at: __DEPLOY_TIME__');
});
