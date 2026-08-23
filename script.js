function showSection(sectionId) {
    let sections = document.querySelectorAll(".page-section");

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

/* default view */
window.onload = function () {
    showSection("about");
};