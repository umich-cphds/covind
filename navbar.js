// add state options to menu
dataURL = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv"
statesList = [];
Plotly.d3.csv(dataURL, function(data) {

    for (var i = 0; i < data.length; i++) {
        if (!statesList.includes(data[i]["place"]))
        {
            statesList.push(data[i]["place"]);
        }
    }

    statesList.sort()

    for (var i = 0; i < statesList.length; i++)
    {
        state = document.createElement("a");
        state.innerHTML = statesList[i];
        state.setAttribute("class", statesList[i]);

        document.getElementById("dropdown-content").appendChild(state);

    }
})

// states dropdown toggler
window.onload = function () {
    document.addEventListener("click", function(e) {
        // if clicked
        if (e.target.id == "States")
        {
            document.getElementById("dropdown-content").classList.toggle("dropdown-active");
            document.getElementById("States").classList.toggle("States-active");
        }
        // if open and anywhere is clicked
        else if (document.getElementById("dropdown-content").classList.contains("dropdown-active")){
            document.getElementById("dropdown-content").classList.toggle("dropdown-active");
            document.getElementById("States").classList.toggle("States-active");

        }
    })
}