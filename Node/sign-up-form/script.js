const TOGGLE_THEME_BUTTON = document.querySelector('.toggle-theme');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
    toggleTheme();
};

TOGGLE_THEME_BUTTON.addEventListener('click', toggleTheme);

function toggleTheme () {
        document.documentElement.classList.toggle('light');
        document.documentElement.classList.toggle('dark');
}