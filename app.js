window.addEventListener("DOMContentLoaded", () => {
    // Create div.result to display query response
    let newDiv = document.createElement('div');
    newDiv.className = 'result'
    document.querySelector(".Resultsection").appendChild(newDiv);

    // JQuery.ajax()
    function search() {
        // Collect user input, hero name/alias
        const query = document.querySelector(".searchinput").value.trim();

        $.ajax({
            url: "superheroes.php",
            method: "GET",
            data: { query: query }, // Send query to sever
            dataType: "html",
            success: function (response) {
                newDiv.innerHTML = response; // Updates html with response
            },
            error: function (xhr, status, error) {
                console.error("AJAX error:", status, error);
                alert("Failed to fetch the list of superheroes.");
            }
        });
    }

    // Add event listener to the "Search" button
    const searchButton = document.querySelector(".searchbutton");
    searchButton.addEventListener("click", search);

});