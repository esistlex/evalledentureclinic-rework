fetch('frameworks/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
        setActiveNavLink();
    })
    .catch(error => console.error((('Error loading navbar:', error))));

function setActiveNavLink() {
    let current = window.location.pathname.split('/').pop();
    if (current === '' || current === 'index.html') current = 'index.html';

    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if(linkPage === current) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}