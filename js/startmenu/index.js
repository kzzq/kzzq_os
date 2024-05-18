function toggleDropdown() {
    document.getElementById("startyMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.startbu')) {
        var dropdowns = document.getElementsByClassName("startb");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}