document.getElementById('2025').textContent = new Date().getFullYear;

//Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
            });
        }
    });
});

//Add click animation to buttons
document.querySelectorAll('.social-btn, .contact-btn, .project-link').forEach(button => {
    button.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

//Simple cisitor counter (using localStorage)
if (typeof Storage !== "undefined") {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    console.log('Welcome! This is your visit #${visitCount} to my portfolio.');
}