// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
} else if (systemDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateButtonText('dark');
}

document.body.hidden = false;

// Theme toggle function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
}

// Update button text
function updateButtonText(theme) {
    const button = document.getElementById('themeButton');
    button.textContent = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`;
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateButtonText(e.matches ? 'dark' : 'light');
    }
});
