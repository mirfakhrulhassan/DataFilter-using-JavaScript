// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!

var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");

displayAll(tableData);

var filterButton =d3.select("#filter-btn");

function displayAll(ufoSightings) {
    tbody.html("");
    ufoSightings.forEach(ufoSighting =>{
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach(value =>{
            row.append("td").text(value);
        });
    });

}

filterButton.on("click",handleDateSearch);

function handleDateSearch() {
    console.log("entered here");
    var input = d3.select("#datetime").property("value");
    console.log(input);

    if (input.length ==0)   {
        displayAll(tableData);
    } else {

    var filterDate = tableData.filter(function(ufoData){

        return (ufoData.datetime === input) ;

    });

    console.log(filterDate);
    displayAll(filterDate);
    }
}



