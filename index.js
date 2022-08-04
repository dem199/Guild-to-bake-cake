function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#051e36');
        root.style.setProperty('--text-color', '#4A4E74');
        root.style.setProperty('--title-color', '#4A4E74');        
    } else if (theme === 'light') {
        root.style.setProperty('--bg-color', '051e36#');
        root.style.setProperty('--text-color', '#051e36');
        root.style.setProperty('--title-color', '#4A4E74');
    }
}


setTheme('light');