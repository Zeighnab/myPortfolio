const navBtn = document.getElementById('navbtn');
const sideBar = document.getElementById('sidebar');
const navBar = document.getElementById('navbar');
const closeBtn = document.getElementById('closebtn');
const sideLinks = document.querySelectorAll('.side')

window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > navBar.offsetHeight) {
    navBar.classList.add('active');
  } else {
    navBar.classList.remove('active');
  }
}

navBtn.addEventListener('click', () => {
  sideBar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});

sideLinks.forEach(side => {
  side.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar')
  })
})