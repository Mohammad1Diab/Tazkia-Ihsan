
// Animation Lectures
function animationlectures(selector) {
    const card = document.querySelector(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('cardAnimation');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(card);
}

document.addEventListener('DOMContentLoaded', () => {
   animationlectures('.lectureCard');
   animationlectures('.lectureCardSecond');
    animationlectures('.lectureCardThird');
    animationlectures('.lectureCardFourth');
  });




