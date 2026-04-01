document.addEventListener('DOMContentLoaded', () => {
    /* Intersection Observer for Scroll Animations */
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after it's shown once
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        observer.observe(item);
    });

    /* Smoother scroll-to-top interaction (can be extended) */
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        // console.log(`Scrolled: ${scrollPercent}%`);
    });
});
