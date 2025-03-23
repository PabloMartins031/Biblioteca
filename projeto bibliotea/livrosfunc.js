function searchBooks() {
    let input = document.getElementById("procura");
    let filter = input.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        let links = dropdown.querySelectorAll(".dropdown-content a");
        let dropdownTitle = dropdown.getElementsByTagName("h4")[0].innerText.toUpperCase();
        let hasVisibleLinks = false;

        links.forEach(function(link) {
            let txtValue = link.textContent || link.innerText;
            if (txtValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().indexOf(filter) > -1) {
                link.style.display = "";
                hasVisibleLinks = true;
            } else {
                link.style.display = "none";
            }
        });

        // Exibir ou ocultar dropdown
        if (dropdownTitle.indexOf(filter) > -1 || hasVisibleLinks) {
            dropdown.style.display = "flex"; // ou "grid" dependendo do CSS
        } else {
            dropdown.style.display = "none";
        }
    });
}
