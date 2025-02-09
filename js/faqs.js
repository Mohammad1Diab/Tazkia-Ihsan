var active_button_counter = 0;
// Generic Filter Function
function applyFilter(category) {
    let all_accordions = document.querySelectorAll(".accordion-item");
    let active_button = document.querySelector(".active_button");
    let category_accordions = document.querySelectorAll(`.${category}`);

    // Show/Hide Accordions
    all_accordions.forEach(acc => acc.style.display = "none");
    category_accordions.forEach(acc => acc.style.display = "block");

    // Update Active Button
    if (active_button) active_button.classList.remove("active_button");
    document.getElementById(category + "_button").classList.add("active_button");

    // Set Counter
    active_button_counter = {
        "all": 0,
        "tasawwuf": 1,
        "aql": 2,
        "worship": 3,
        "social": 4,
        "ahwal": 5
    }[category];
}

// Individual Filter Calls
function filters_all() { applyFilter("all"); document.querySelectorAll(".accordion-item").forEach(acc => acc.style.display = "block"); }
function filters_tasawwuf() { applyFilter("tasawwuf"); }
function filters_aql() { applyFilter("aql"); }
function filters_worship() { applyFilter("worship"); }
function filters_ahwal() { applyFilter("ahwal"); }
function filters_social() { applyFilter("social"); }

function filterFAQs() {
    let input = document.getElementById("faqSearch").value.toLowerCase();
    let activeCategory = ["all", "tasawwuf", "aql", "worship", "social", "ahwal"][active_button_counter];
    let faqs = document.querySelectorAll(activeCategory === "all" ? ".accordion-item" : `.${activeCategory}`);

    faqs.forEach(faq => {
        let question = faq.querySelector(".accordion-button")?.innerText.toLowerCase() || "";

        faq.style.display = (question.includes(input)) ? "block" : "none";
    });
}
