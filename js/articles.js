



//Animation Recent Articles Section

document.addEventListener('DOMContentLoaded', () => {
    const recentArticlesHeader = document.querySelector('.recentArticlesHeader');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                recentArticlesHeader.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(recentArticlesHeader);
});


document.addEventListener('DOMContentLoaded', () => {
    const recentArticle = document.querySelector('.recentArticle');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                recentArticle.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(recentArticle);
});