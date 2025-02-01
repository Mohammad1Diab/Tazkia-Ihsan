// Filters
function filters_all() {
    var all_button = document.getElementById("all_button");
    var all_accordions = document.getElementsByClassName("accordion-item");
    var active_button = document.getElementsByClassName("active_button")[0];

    for (var i = 0; i < all_accordions.length; i++) {
        all_accordions[i].style.display = 'block';
    }
    active_button.classList.remove("active_button");
    all_button.classList.add("active_button");
}

function filters_tasawwuf() {
    var tasawwuf_accordions = document.getElementsByClassName("tasawwuf");
    var tasawwuf_button = document.getElementById("tasawwuf_button");
    var all_accordions = document.getElementsByClassName("accordion-item");
    var active_button = document.getElementsByClassName("active_button")[0];

    for (var i = 0; i < all_accordions.length; i++) {
        all_accordions[i].style.display = 'none';
    }
    for (var i = 0; i < tasawwuf_accordions.length; i++) {
        tasawwuf_accordions[i].style.display = 'block';
    }

    active_button.classList.remove("active_button");
    tasawwuf_button.classList.add("active_button");
}

function filters_mental() {
    var mental_accordions = document.getElementsByClassName("mental");
    var mental_button = document.getElementById("mental_button");
    var all_accordions = document.getElementsByClassName("accordion-item");
    var active_button = document.getElementsByClassName("active_button")[0];

    for (var i = 0; i < all_accordions.length; i++) {
        all_accordions[i].style.display = 'none';
    }
    for (var i = 0; i < mental_accordions.length; i++) {
        mental_accordions[i].style.display = 'block';
    }

    active_button.classList.remove("active_button");
    mental_button.classList.add("active_button");
}

function filters_physical() {
    var physical_accordions = document.getElementsByClassName("physical");
    var physical_button = document.getElementById("physical_button");
    var all_accordions = document.getElementsByClassName("accordion-item");
    var active_button = document.getElementsByClassName("active_button")[0];

    for (var i = 0; i < all_accordions.length; i++) {
        all_accordions[i].style.display = 'none';
    }
    for (var i = 0; i < physical_accordions.length; i++) {
        physical_accordions[i].style.display = 'block';
    }

    active_button.classList.remove("active_button");
    physical_button.classList.add("active_button");
}

function filters_social() {
    var social_accordions = document.getElementsByClassName("social");
    var social_button = document.getElementById("social_button");
    var all_accordions = document.getElementsByClassName("accordion-item");
    var active_button = document.getElementsByClassName("active_button")[0];


    for (var i = 0; i < all_accordions.length; i++) {
        all_accordions[i].style.display = 'none';
    }
    for (var i = 0; i < social_accordions.length; i++) {
        social_accordions[i].style.display = 'block';
    }

    active_button.classList.remove("active_button");
    social_button.classList.add("active_button");
}


// Searchbar
function filterFAQs() {
    let input = document.getElementById("faqSearch").value.toLowerCase();
    let faqs = document.querySelectorAll(".accordion-item"); // Select entire FAQ item

    faqs.forEach(faq => {
        let question = faq.querySelector(".accordion-button").innerText.toLowerCase(); // Get the text inside the button
        // Show if the search matches either question
        if (question.includes(input)) {
            faq.style.display = "block";
        } else {
            faq.style.display = "none";
        }
    });
}
