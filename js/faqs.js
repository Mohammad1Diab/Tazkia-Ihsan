
//Buttons
var button_filter0 = document.getElementById("button_filter0");
button_filter0.innerHTML = "All";
var button_filter1 = document.getElementById("button_filter1");
button_filter1.innerHTML = "Tasawwuf";
var button_filter2 = document.getElementById("button_filter2");
button_filter2.innerHTML = "Aql";
var button_filter3 = document.getElementById("button_filter3");
button_filter3.innerHTML = "Worship";
var button_filter4 = document.getElementById("button_filter4");
button_filter4.innerHTML = "Social";
var button_filter5 = document.getElementById("button_filter5");
button_filter5.innerHTML = "Aḥwal";

var active_button_counter = 0;
//Dropdown filter
function filter_category(button) {
    //Questions handling
    var category;
    if (button.innerHTML == 'All') {
        category = '.qa';
        active_button_counter = 0;
    } else if (button.innerHTML == 'Tasawwuf') {
        category = '.tasawwuf';
        active_button_counter = 1;
    } else if (button.innerHTML == 'Aḥwal') {
        category = '.ahwal';
        active_button_counter = 5;
    } else if (button.innerHTML == 'Social') {
        category = '.social';
        active_button_counter = 4;
    } else if (button.innerHTML == 'Worship') {
        category = '.worship';
        active_button_counter = 3;
    } else if (button.innerHTML == 'Aql') {
        category = '.aql';
        active_button_counter = 2;
    }
    let all_questions = document.querySelectorAll(".qa");
    let category_questions = document.querySelectorAll(category);

    all_questions.forEach(q => q.style.display = "none");
    category_questions.forEach(q => q.style.display = "block");

    //Dropdown handling
    let space = button.innerHTML;
    if (button_filter0.innerHTML == 'All') {
        button.innerHTML = button_filter1.innerHTML;
        button_filter1.innerHTML = 'All';
        button_filter0.innerHTML = space;
    } else {
        button.innerHTML = button_filter0.innerHTML;
        button_filter0.innerHTML = space;
    }

}

//Searchbar filter
function filterFAQs() {
    let input = document.getElementById("faqSearch").value.toLowerCase();
    let activeCategory = ["all", "tasawwuf", "aql", "worship", "social", "ahwal"][active_button_counter];
    let faqs = document.querySelectorAll(activeCategory === "all" ? ".qa" : `.${activeCategory}`);

    faqs.forEach(faq => {
        let question = faq.querySelector(".question_text")?.innerText.toLowerCase() || "";

        faq.style.display = (question.includes(input)) ? "block" : "none";
    });
}

//Date filter
function filter_date() {
    let input = document.getElementById("datepicker").value;
    let activeCategory = ["all", "tasawwuf", "aql", "worship", "social", "ahwal"][active_button_counter];
    let faqs = document.querySelectorAll(activeCategory === "all" ? ".qa" : `.${activeCategory}`);
    console.log(input);
    if (input) {
        let [year, month, day] = input.split("-"); // Split into parts
        let formattedDate = `#${day}/${month}/${year}`; // Reformat to #dd/mm/yyyy
        console.log(formattedDate);
        faqs.forEach(faq => {
            let refElement = faq.querySelector(".reference_number"); // Get the reference number element
            let referenceText = refElement ? refElement.textContent.trim() : ""; // Ensure text exists
            console.log(formattedDate);
            console.log(referenceText);
            // Show the accordion if the reference number matches exactly, otherwise hide it
            faq.style.display = (referenceText === formattedDate) ? "block" : "none";
     
        });
    }
}


