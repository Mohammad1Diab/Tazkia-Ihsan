// Animation card ongoing


document.addEventListener('DOMContentLoaded', () => {
    const lectureCard = document.querySelector('.lectureCard');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lectureCard.classList.add('cardAnimation');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(lectureCard);
});

document.addEventListener('DOMContentLoaded', () => {
    const lectureCardSecond = document.querySelector('.lectureCardSecond');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lectureCardSecond.classList.add('cardAnimation');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(lectureCardSecond);
});







// Animation lecturesHeaderCompleted

document.addEventListener('DOMContentLoaded', () => {
    const lectureHeaderCompleted = document.querySelector('.lectureHeaderCompleted');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lectureHeaderCompleted.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(lectureHeaderCompleted);
});



