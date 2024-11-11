window.addEventListener("DOMContentLoaded", () => {
    // JAVASCRIPT ALERT
    // JQuery.ajax()
    function search() {
        $.ajax({
            url: "superheroes.php",
            method: "GET",
            dataType: "html",
            success: function(data) {
                alert(data)
            },
            error: function(xhr, status, error) {
                console.error("AJAX error:", status, error);
                alert("Failed to fetch the list of superheroes.");
            }
        });
    }

    // Add event listener to the "Search" button
    const searchButton = document.querySelector(".searchbutton");
    searchButton.addEventListener("click", search);

});
