// add state options to menu
dataURL = "https://raw.githubusercontent.com/umich-cphds/cov-ind-19-data/master/source_data/package-data/processed/new_everything.csv"
statesList = [];
Plotly.d3.csv(dataURL, function(data) {

    for (var i = 0; i < data.length; i++) {
        if (!statesList.includes(data[i]["place"]) && data[i]["place"] != "India")
        {
            statesList.push(data[i]["place"]);
        }
    }

    statesList.sort()

    for (var i = 0; i < statesList.length; i++)
    {
        state = document.createElement("a");
        state.innerHTML = statesList[i];
        state.setAttribute("id", statesList[i]);
        document.getElementById("dropdown-content").appendChild(state);
    }
})

//----------------------------------------------------------------------------------------------------//

// page changer
document.addEventListener("click", function(e) {
    // toggle state nav bar appearance
    if (e.target.id == "States")
    {
        toggleMenu();
    }
    // if non-active menu button (besides states) is pressed ***NEED TO IMPLEMENT NON_ACTIVE PART
    else if (e.target.parentNode.parentNode.tagName == "MENU")
    {
        siteBuildUp(e.target.id);

        // if states dropdown is open, close it
        if (document.getElementById("dropdown-content").classList.contains("dropdown-active"))
        {
            console.log("here")
            toggleMenu();
        }
    }
    // specific state pressed
    else if (e.target.parentNode.id == "dropdown-content")
    {
        siteBuildUp(e.target.id)
        toggleMenu();
    }
    // if open and anywhere is clicked
    else if (document.getElementById("dropdown-content").classList.contains("dropdown-active")) {
        toggleMenu();
    }
})

function toggleMenu() {
    document.getElementById("dropdown-content").classList.toggle("dropdown-active");
    document.getElementById("States").classList.toggle("States-active");
}

function siteBuildUp(siteName) {
    siteBreakdown();
    switch(siteName)
    {
        // note: clicking 'states'is handled elsewhere
        case 'National':
            document.getElementById("navbar").firstElementChild.setAttribute("id", "national");
            buildNationalSite();
            break;
        case 'Metrics':
            document.getElementById("navbar").firstElementChild.setAttribute("id", "metrics");
            // to do
            break;
        case 'References':
            document.getElementById("navbar").firstElementChild.setAttribute("id", "references");
            // to do
            break;
        // case where a state is clicked
        default:
            document.getElementById("navbar").firstElementChild.setAttribute("id", "states");
            buildPlotSite(siteName)
            break;        
    }
}

function siteBreakdown()
{
    if (document.getElementById("navbar").firstElementChild.id == "national")       
    {
        breakdownPlots()
    }
    else if (document.getElementById("navbar").firstElementChild.id == "states")
    {
        breakdownPlots()
    }
    else if (document.getElementById("navbar").firstElementChild.id == "metrics")
    {
        // to do
    }
    else if (document.getElementById("navbar").firstElementChild.id == "references")
    {
        // to do
    }
}