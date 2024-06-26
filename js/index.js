//Animation About Section
document.addEventListener('DOMContentLoaded', () => {
    const aboutHeader = document.querySelector('.aboutHeader');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutHeader.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(aboutHeader);
});

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

document.addEventListener('DOMContentLoaded', () => {
    const recentArticleSecond = document.querySelector('.recentArticleSecond');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                recentArticleSecond.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(recentArticleSecond);
});

document.addEventListener('DOMContentLoaded', () => {
    const recentArticleThird = document.querySelector('.recentArticleThird');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                recentArticleThird.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(recentArticleThird);
});

// Daily Hadiths

//Hadith changes Daily, but same Hadith on the day every Week

const quotes = {
    0: "Jabir reported: The Messenger of Allah, ﷺ, said:    <br><br>   سَلُو اللَّهَ عِلْمًا نَافِعًا وَتَعَوَّذُوا بِاللَّهِ مِنْ عِلْمٍ لَا يَنْفَعُ    <br>Ask Allah for beneficial knowledge and seek refuge in Allah from knowledge without benefit.<br> [Sunan Ibn Mājah 3843, Hasan]",
    1: "Sayidunna Mu’awiyah reported: The Messenger of Allah, ﷺ, said:<br><br> مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ<br>If Allah intends goodness for someone, he gives him understanding of the religion.<br> [Ṣaḥīḥ al-Bukhārī 71, Muttafaqun Alayhi]",
    6: "Abu Huraira reported: The Messenger of Allah, ﷺ, said:<br><br> خَيْرُكُمْ إِسْلَامًا أَحَاسِنُكُمْ أَخْلَاقًا إِذَا فَقُهُوا<br>The best of you in Islam are those with the best character, if they have religious understanding.<br> [Musnad Aḥmad 9880, Sahih]",
    3: "Anas ibn Malik reported: The Messenger of Allah, ﷺ, said:<br><br> طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ <br>Seeking knowledge is an obligation upon every Muslim.<br> [Sunan Ibn Mājah 224, Sahih]",
    4: "Uthman bin Affan reported: The Prophet, ﷺ, said:<br><br>خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ <br> The best of you are those who learn the Quran and teach it. <br> [Ṣaḥīḥ al-Bukhārī 4739, Sahih]",
    5: "Abu Huraira reported: The Messenger of Allah, ﷺ, said:  <br><br> إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ  <br>When the human being dies, his deeds end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him.<br> [Ṣaḥīḥ Muslim 1631, Sahih]",
    2: "Malik ibn Anas, May Allah have mercy on him, said:    <br><br> لا يَنْبَغِي لأَحَدٍ يَكُونُ عِنْدَهُ الْعِلْمُ أَنْ يَتْرُكَ التَّعَلُّمَ    <br>It is not befitting for anyone with knowledge to give up learning. <br> [Jāmi’ Bayān al-‘Ilm 423]"
//tell Sheikh couldnt find other than for prophet and for Allah
};

// Function to get the current quote based on the day of the week
function getDailyQuote() {
    const today = new Date().getDay();
    return quotes[today];
}


document.addEventListener("DOMContentLoaded", function() {
    const quoteContainer = document.getElementById('dailyHadithsSection');
    quoteContainer.innerHTML = getDailyQuote();
 
});



