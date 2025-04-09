const button = document.getElementById('toggle-dark-mode');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});