const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

// Закрытие меню при клике вне хедера
document.addEventListener('click', (event) => {
    if (!mobileNav.contains(event.target) && !mobileNavToggle.contains(event.target)) {
        mobileNav.classList.remove('show');
    }
});

// Закрытие меню при скроллинге
window.addEventListener('scroll', () => {
    mobileNav.classList.remove('show');
});