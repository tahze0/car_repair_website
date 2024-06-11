document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "confirmation.html";
});

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = targetId;
        }
    });
});
