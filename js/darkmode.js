// Dark Mode 
document.addEventListener('DOMContentLoaded', function () {

    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null || savedMode === 'true';

    document.body.classList.toggle('dark-mode', isDarkMode);

    updateToggleButton(isDarkMode);
    updateLogo(isDarkMode);

    // Add event listeners to all theme toggles (desktop and mobile)
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDarkMode);
    });
});

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', isDarkMode);

    updateToggleButton(isDarkMode);
    updateLogo(isDarkMode);
}

function updateToggleButton(isDarkMode) {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => {
        toggle.innerHTML = isDarkMode
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon text-dark"></i>';

        toggle.title = isDarkMode
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode';
    });
}

function updateLogo(isDarkMode) {
    const logo = document.getElementById('siteLogo');
    if (!logo) return;

    // If dark mode is active, use the light logo (white text) on dark background
    // If light mode is active, use the dark logo (black text) on light background
    logo.src = isDarkMode
        ? 'img/logo-light.png'
        : 'img/logo-dark.png';
}
