const themeSelect = document.getElementById('themeSelect');

if (themeSelect) {

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    applyTheme(storedTheme);
    themeSelect.value = storedTheme;
  }

  themeSelect.addEventListener('change', function() {
    const theme = this.value;
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  });
}

function applyTheme(theme) {
  const body = document.body;
  const links = document.querySelectorAll('.link');

  if (theme === 'dark') {
    body.style.backgroundColor = '#333';
    body.style.color = '#ffffff';
    links.forEach(link => {
      link.style.color = '#ffffff'; 
      link.style.textDecoration = 'none'; 
    });
    document.querySelectorAll('.letter').forEach(letter => {
      letter.style.color = '#ffffff'; 
    });
  } else {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';
    links.forEach(link => {
      link.style.color = '#000000'; 
      link.style.textDecoration = 'none'; 
    });
    document.querySelectorAll('.letter').forEach(letter => {
      letter.style.color = '#000000';
    });
  }
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  applyTheme(storedTheme);
        }
