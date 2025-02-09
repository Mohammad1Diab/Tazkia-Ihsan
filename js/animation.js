// Animation Recent Articles Section in Home page and Lectures in Lecture Page
const recent_articles = [".recentArticle", ".recentArticleSecond", ".recentArticleThird"];
const lecture_cards = [".lectureCard", ".lectureCard2", ".lectureCard3", ".lectureCard4"];

function animation(selectors, animationClass) {
    const elements = document.querySelectorAll(selectors.join(','));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element)); // Observe each element
}

document.addEventListener('DOMContentLoaded', () => {
    animation(recent_articles, 'fade-in'); 
    animation(lecture_cards, 'cardAnimation'); 
});