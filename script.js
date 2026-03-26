const hamburger = document.getElementById('hamburger');
const Menu = document.getElementById('Menu');

hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      Menu.classList.toggle('active');
});
document.querySelectorAll('.Menu a').forEach(link => {
      link.addEventListener('click', () => {
      Menu.classList.remove('active');
      hamburger.classList.remove('active');
      });
});