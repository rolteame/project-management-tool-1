const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navCollapse = document.querySelector('.navbar-collapse');
console.log(navList.clientHeight);
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    if (hamburger.classList.contains('is-active')) {
        const newHeight = navList.clientHeight + 20;
        navCollapse.style.height = `${newHeight}px`;
    } else {
        navCollapse.style.height = `0`;
    }
});
